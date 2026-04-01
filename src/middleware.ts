import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from '@/i18n/config';

// next-intl 中间件
const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
});

// 需要登录才能访问的路由
const protectedRoutes = ['/dashboard'];

// 已登录用户不能访问的路由
const authRoutes = ['/login', '/register'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 首先处理国际化
  const intlResponse = intlMiddleware(request);
  if (intlResponse) {
    // 检查认证状态
    const token = request.cookies.get('next-auth.session-token')?.value ||
                  request.cookies.get('__Secure-next-auth.session-token')?.value;
    const isAuthenticated = !!token;

    // 移除 locale 前缀来检查路由
    const pathWithoutLocale = pathname.replace(/^\/(zh|en)/, '') || '/';

    // 检查是否是受保护的路由
    const isProtectedRoute = protectedRoutes.some((route) => pathWithoutLocale.startsWith(route));
    const isAuthRoute = authRoutes.some((route) => pathWithoutLocale.startsWith(route));

    // 未登录访问受保护路由 -> 重定向到登录页
    if (isProtectedRoute && !isAuthenticated) {
      const locale = pathname.startsWith('/en') ? '/en' : '';
      const loginUrl = new URL(`${locale}/login`, request.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }

    // 已登录访问登录/注册页 -> 重定向到 dashboard
    if (isAuthRoute && isAuthenticated) {
      const locale = pathname.startsWith('/en') ? '/en' : '';
      return NextResponse.redirect(new URL(`${locale}/dashboard`, request.url));
    }

    return intlResponse;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * 匹配所有路径除了：
     * - api/* (API 路由)
     * - _next/static (静态文件)
     * - _next/image (图片优化)
     * - favicon.ico (图标)
     * - public 文件夹中的文件
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public|.*\\..*).*)',
  ],
};