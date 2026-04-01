---

## 文件一：`CLAUDE.md`

```markdown
# CLAUDE.md — 前端项目 Claude Code 工作指引与代码规范

## 🔴 核心工作流程

每次启动时，请执行以下步骤：
1. 读取本文件 `CLAUDE.md`，了解代码规范和技术栈
2. 读取 `CHECKLIST.md`，找到第一个状态为 `[ ]`（未完成）的任务
3. 执行该任务，完成后将 `[ ]` 改为 `[x]`，并在后面追加完成日期
4. 如果 token 充裕，继续下一个 `[ ]` 任务
5. 每完成一个 Phase，运行一次 `npm run test` 确保不破坏已有功能
6. 如果任务中途 token 不够，在 CHECKLIST.md 对应任务后追加 `⏸️ 进行中` 标记和进度说明

## 📁 项目目录结构（严格遵守）

```
project-root/
├── CLAUDE.md                          # 本文件
├── CHECKLIST.md                       # 功能清单
├── README.md                          # 使用文档
├── package.json
├── tsconfig.json
├── next.config.ts                     # Next.js 配置
├── tailwind.config.ts                 # Tailwind CSS 配置
├── postcss.config.mjs                 # PostCSS 配置
├── vitest.config.ts                   # Vitest 配置
├── playwright.config.ts              # Playwright E2E 配置
├── .env.local                         # 本地环境变量（不提交git）
├── .env.example                       # 环境变量模板
├── .eslintrc.json / eslint.config.mjs
├── .prettierrc
├── .gitignore
│
├── public/                            # 静态资源
│   ├── favicon.ico
│   ├── robots.txt                     # SEO: 爬虫规则
│   ├── sitemap.xml                    # SEO: 站点地图（或动态生成）
│   ├── manifest.json                  # PWA 配置
│   ├── icons/                         # PWA / favicon 多尺寸图标
│   └── images/                        # 静态图片
│
├── src/
│   ├── app/                           # Next.js App Router 页面
│   │   ├── layout.tsx                 # 根布局
│   │   ├── page.tsx                   # 首页
│   │   ├── loading.tsx                # 全局 loading
│   │   ├── error.tsx                  # 全局错误页
│   │   ├── not-found.tsx              # 404 页面
│   │   ├── globals.css                # 全局样式（Tailwind 入口）
│   │   ├── manifest.ts               # PWA manifest（动态生成）
│   │   ├── sitemap.ts                 # SEO: 动态生成 sitemap
│   │   ├── robots.ts                  # SEO: 动态生成 robots.txt
│   │   ├── opengraph-image.tsx        # OG 图片生成（可选）
│   │   │
│   │   ├── (marketing)/              # 营销页面组（SEO 友好，SSG）
│   │   │   ├── layout.tsx
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   └── contact/
│   │   │       └── page.tsx
│   │   │
│   │   ├── (dashboard)/              # 后台页面组（需登录，CSR/SSR）
│   │   │   ├── layout.tsx
│   │   │   └── dashboard/
│   │   │       └── page.tsx
│   │   │
│   │   └── api/                       # API Routes（BFF 层）
│   │       └── health/
│   │           └── route.ts
│   │
│   ├── components/                    # 组件
│   │   ├── ui/                        # 基础 UI 组件（shadcn/ui）
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   └── ...
│   │   ├── layout/                    # 布局组件
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── mobile-nav.tsx
│   │   │   └── container.tsx
│   │   ├── shared/                    # 通用业务组件
│   │   │   ├── seo-head.tsx
│   │   │   ├── theme-toggle.tsx
│   │   │   ├── language-switcher.tsx
│   │   │   ├── loading-screen.tsx
│   │   │   ├── error-boundary.tsx
│   │   │   ├── empty-state.tsx
│   │   │   ├── confirm-dialog.tsx
│   │   │   ├── infinite-scroll.tsx
│   │   │   ├── responsive-image.tsx
│   │   │   └── back-to-top.tsx
│   │   └── features/                  # 业务功能组件
│   │       ├── auth/
│   │       │   ├── login-form.tsx
│   │       │   └── register-form.tsx
│   │       └── user/
│   │           ├── user-avatar.tsx
│   │           └── user-profile-card.tsx
│   │
│   ├── hooks/                         # 自定义 Hooks
│   │   ├── use-media-query.ts         # 响应式断点检测
│   │   ├── use-debounce.ts
│   │   ├── use-throttle.ts
│   │   ├── use-local-storage.ts
│   │   ├── use-clipboard.ts
│   │   ├── use-intersection-observer.ts
│   │   ├── use-scroll-lock.ts
│   │   ├── use-toast.ts
│   │   └── index.ts
│   │
│   ├── lib/                           # 核心库 / 工具封装
│   │   ├── api-client.ts              # HTTP 请求封装
│   │   ├── auth.ts                    # NextAuth 配置
│   │   ├── cn.ts                      # className 合并工具
│   │   ├── constants.ts               # 全局常量
│   │   ├── env.ts                     # 环境变量读取（Zod 校验）
│   │   ├── fonts.ts                   # 字体加载
│   │   ├── seo.ts                     # SEO 工具函数
│   │   ├── analytics.ts              # 数据埋点
│   │   ├── storage.ts                 # localStorage / sessionStorage 封装
│   │   └── utils.ts                   # 通用工具函数
│   │
│   ├── services/                      # API 请求层（按模块分）
│   │   ├── user.service.ts
│   │   ├── auth.service.ts
│   │   └── index.ts
│   │
│   ├── stores/                        # 全局状态管理（Zustand）
│   │   ├── use-auth-store.ts
│   │   ├── use-app-store.ts
│   │   ├── use-theme-store.ts
│   │   └── index.ts
│   │
│   ├── types/                         # 全局类型定义
│   │   ├── api.types.ts               # API 请求/响应类型
│   │   ├── user.types.ts
│   │   ├── common.types.ts
│   │   └── index.ts
│   │
│   ├── styles/                        # 额外样式（如果需要）
│   │   └── animations.css             # 自定义动画
│   │
│   ├── i18n/                          # 国际化
│   │   ├── config.ts                  # i18n 配置
│   │   ├── request.ts                 # 服务端 i18n
│   │   └── locales/
│   │       ├── zh-CN.json
│   │       └── en-US.json
│   │
│   └── middleware.ts                  # Next.js 中间件（路由守卫、i18n、重定向）
│
├── tests/                             # 测试
│   ├── setup.ts                       # 测试全局初始化
│   ├── utils.tsx                      # 测试工具（renderWithProviders 等）
│   ├── unit/                          # 单元测试
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── stores/
│   │   └── components/
│   ├── integration/                   # 集成测试
│   │   └── pages/
│   └── e2e/                           # E2E 测试（Playwright）
│       ├── home.spec.ts
│       └── auth.spec.ts
│
└── scripts/                           # 工具脚本
    ├── generate-sitemap.ts
    ├── analyze-bundle.ts
    └── lighthouse-audit.ts
```

## 📝 代码规范

### 1. TypeScript 严格模式
- `tsconfig.json` 必须开启 `strict: true`
- 禁止使用 `any`，必须使用具体类型或 `unknown`
- 组件 Props 必须用 `interface` 定义并导出
- 所有对外导出的函数必须有返回类型注解

### 2. 命名规范
| 类别 | 规范 | 示例 |
|------|------|------|
| 文件名（组件） | kebab-case | `user-avatar.tsx` |
| 文件名（非组件） | kebab-case | `use-debounce.ts` `api-client.ts` |
| 组件名 | PascalCase | `UserAvatar` |
| Hook | camelCase, use 前缀 | `useDebounce` |
| 接口/类型 | PascalCase | `UserProfile` |
| 函数/变量 | camelCase | `getUserById` |
| 常量 | UPPER_SNAKE_CASE | `MAX_FILE_SIZE` |
| CSS 类名 | Tailwind 优先，自定义用 kebab-case | `custom-scrollbar` |
| Store | camelCase, use 前缀 + Store 后缀 | `useAuthStore` |
| Service | PascalCase + Service 后缀 | `UserService` |

### 3. 组件编写规范
```tsx
// ✅ 正确的组件写法
'use client'; // 仅客户端组件需要

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import type { UserProfile } from '@/types';

// Props 接口导出
export interface UserCardProps {
  user: UserProfile;
  className?: string;
  onEdit?: (id: string) => void;
}

// 组件导出（命名导出，禁止 default export）
export function UserCard({ user, className, onEdit }: UserCardProps): React.ReactElement {
  const [isLoading, setIsLoading] = useState(false);

  const handleEdit = useCallback(() => {
    onEdit?.(user.id);
  }, [user.id, onEdit]);

  return (
    <div className={cn('rounded-lg border p-4', className)}>
      <h3 className="text-lg font-semibold">{user.name}</h3>
      <Button onClick={handleEdit} disabled={isLoading}>
        编辑
      </Button>
    </div>
  );
}
```

### 4. 导入顺序（严格执行）
```typescript
// 1. React / Next.js 内置
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// 2. 第三方库
import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';

// 3. 项目内部模块 — 按层级
import { Button } from '@/components/ui/button';
import { UserCard } from '@/components/features/user/user-card';
import { useAuthStore } from '@/stores/use-auth-store';
import { UserService } from '@/services/user.service';
import { cn } from '@/lib/cn';

// 4. 类型导入（使用 import type）
import type { UserProfile } from '@/types';

// 5. 样式导入（极少使用，优先 Tailwind）
import './custom.css';
```

### 5. Server Component vs Client Component 规范
```
默认使用 Server Component（不加 'use client'）

仅在以下情况使用 Client Component（添加 'use client'）：
- 使用 useState / useEffect / useRef 等 React Hooks
- 使用浏览器 API（window / document / localStorage）
- 需要事件监听（onClick / onChange 等）
- 使用第三方客户端库（如动画库）

原则：尽可能把 'use client' 边界推到组件树的叶子节点
```

### 6. 路径别名
- 使用 `@/` 作为 `src/` 的路径别名（Next.js 默认支持）
- 禁止使用相对路径超过两层：`../../` ❌

### 7. 响应式设计规范（Tailwind 断点）
```
移动优先设计（Mobile First）

断点约定：
- 默认（无前缀）: 0px+     → 手机竖屏
- sm:              640px+   → 手机横屏 / 小平板
- md:              768px+   → 平板竖屏
- lg:              1024px+  → 平板横屏 / 小桌面
- xl:              1280px+  → 桌面
- 2xl:             1536px+  → 大桌面

编写顺序：先写手机样式，再用 md: lg: xl: 依次覆盖
```
```tsx
// ✅ 正确的响应式写法
<div className="
  grid grid-cols-1 gap-4 p-4
  sm:grid-cols-2 sm:gap-6
  lg:grid-cols-3 lg:p-8
  xl:grid-cols-4
">
  {items.map(item => <Card key={item.id} />)}
</div>

// ✅ 移动端显示/隐藏
<nav className="hidden lg:flex">桌面导航</nav>
<button className="lg:hidden">☰ 汉堡菜单</button>
```

### 8. SEO 规范
```typescript
// 每个 page.tsx 必须导出 metadata 或 generateMetadata

// ✅ 静态 metadata
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '页面标题 | 网站名',
  description: '页面描述，60-160个字符',
  keywords: ['关键词1', '关键词2'],
  openGraph: {
    title: '分享标题',
    description: '分享描述',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '推特分享标题',
    description: '推特分享描述',
  },
  alternates: {
    canonical: 'https://example.com/page',
    languages: {
      'zh-CN': 'https://example.com/zh/page',
      'en-US': 'https://example.com/en/page',
    },
  },
};

// ✅ 动态 metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await fetchData(params.id);
  return {
    title: `${data.name} | 网站名`,
    description: data.summary,
  };
}
```

### 9. 数据获取规范
```typescript
// ✅ Server Component 直接 fetch（推荐，SEO 友好）
async function ProductPage({ params }: { params: { id: string } }) {
  const product = await ProductService.getById(params.id);
  return <ProductDetail product={product} />;
}

// ✅ Client Component 用 TanStack Query
'use client';
function ProductList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => ProductService.getList(),
  });

  if (isLoading) return <ProductListSkeleton />;
  if (error) return <ErrorState error={error} />;
  return <div>{data.map(p => <ProductCard key={p.id} product={p} />)}</div>;
}
```

### 10. HTTP 请求封装规范
```typescript
// src/lib/api-client.ts
// 所有请求通过此模块发出，禁止直接使用 fetch/axios

// 功能要求：
// - 统一 baseURL
// - 自动携带 Authorization header
// - 自动处理 token 刷新
// - 统一错误处理（401 跳登录、500 提示等）
// - 请求/响应拦截器
// - 请求超时（默认 15s）
// - 请求重试（可配置）
// - 完整 TypeScript 泛型支持

// 使用方式：
import { apiClient } from '@/lib/api-client';

const user = await apiClient.get<UserProfile>('/api/v1/user/123');
const result = await apiClient.post<CreateUserResponse>('/api/v1/user', { name: 'test' });
```

### 11. 状态管理规范
```typescript
// 使用 Zustand，按功能模块拆分

// ✅ 正确写法
import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

interface AuthState {
  user: UserProfile | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string, user: UserProfile) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        token: null,
        isAuthenticated: false,
        login: (token, user) => set({ token, user, isAuthenticated: true }),
        logout: () => set({ user: null, token: null, isAuthenticated: false }),
      }),
      { name: 'auth-store' }
    )
  )
);

// 仅需要持久化的 Store 使用 persist 中间件
// 所有 Store 使用 devtools 中间件（方便调试）
```

### 12. 错误处理规范
```tsx
// 页面级错误边界：每个路由组有 error.tsx
// src/app/(dashboard)/dashboard/error.tsx
'use client';

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <h2 className="text-xl font-bold">出错了</h2>
      <p className="text-muted-foreground mt-2">{error.message}</p>
      <Button onClick={reset} className="mt-4">重试</Button>
    </div>
  );
}

// 组件级错误边界：使用 ErrorBoundary 组件包裹
import { ErrorBoundary } from '@/components/shared/error-boundary';

<ErrorBoundary fallback={<ErrorState />}>
  <RiskyComponent />
</ErrorBoundary>
```

### 13. 环境变量规范
```bash
# .env.example
# ----- 公开变量（浏览器可访问，必须 NEXT_PUBLIC_ 前缀）-----
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000/api/v1
NEXT_PUBLIC_GA_ID=                        # Google Analytics
NEXT_PUBLIC_SITE_NAME=MySite

# ----- 私有变量（仅服务端可访问）-----
API_SECRET_KEY=
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=
DATABASE_URL=                             # 如果前端有独立数据库
```

```typescript
// src/lib/env.ts — 使用 Zod 校验环境变量
import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url(),
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  NEXT_PUBLIC_SITE_NAME: z.string().min(1),
  NEXTAUTH_SECRET: z.string().min(1),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
});
```

### 14. 无障碍（Accessibility）规范
```tsx
// 所有交互元素必须：
// - 有 aria-label 或可见文字
// - 可键盘操作（Tab 聚焦 + Enter/Space 触发）
// - 颜色对比度符合 WCAG AA 标准

// ✅ 图片必须有 alt
<Image src="/photo.jpg" alt="用户头像" />

// ✅ 图标按钮必须有 aria-label
<button aria-label="关闭对话框"><XIcon /></button>

// ✅ 表单必须有 label
<label htmlFor="email">邮箱</label>
<input id="email" type="email" />

// ✅ 使用语义化标签
<header>, <nav>, <main>, <section>, <article>, <footer>
```

### 15. 性能优化规范
```typescript
// 1. 图片使用 next/image（自动优化 + WebP + 懒加载）
import Image from 'next/image';
<Image src="/photo.jpg" alt="描述" width={800} height={600} />

// 2. 字体使用 next/font（无 FOUT）
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

// 3. 动态导入大组件
import dynamic from 'next/dynamic';
const HeavyChart = dynamic(() => import('@/components/chart'), {
  loading: () => <Skeleton className="h-[400px]" />,
  ssr: false,
});

// 4. React.memo 仅在性能真正需要时使用（不要滥用）

// 5. useCallback / useMemo 仅在有实际性能问题时使用

// 6. 列表必须有唯一稳定的 key（禁止用 index 作为 key，除非静态列表）
```

### 16. Git 提交规范
```
feat: 新功能
fix: 修复 bug
ui: 纯 UI 调整
docs: 文档更新
refactor: 代码重构
test: 测试相关
chore: 构建/工具相关
perf: 性能优化
a11y: 无障碍改进
seo: SEO 优化
i18n: 国际化相关
```

## 🛠️ 技术栈选择（必须使用）

| 类别 | 技术 | 版本 | 理由 |
|------|------|------|------|
| 框架 | Next.js (App Router) | 15.x | SSR/SSG/ISR + SEO + 全栈能力 |
| 语言 | TypeScript | 5.x strict | 类型安全 |
| UI 库 | shadcn/ui | latest | 可定制 + 无依赖锁定 + Radix 底层 |
| 样式 | Tailwind CSS | 4.x | 响应式 + 原子化 + 零运行时 |
| 状态管理 | Zustand | 5.x | 轻量 + TS 友好 + 无 boilerplate |
| 数据请求 | TanStack Query | 5.x | 缓存 + 重试 + 乐观更新 |
| 表单 | React Hook Form + Zod | latest | 性能好 + 类型推导 + Schema 校验 |
| 认证 | NextAuth.js (Auth.js) | 5.x | Next.js 官方推荐 |
| 国际化 | next-intl | latest | App Router 原生支持 |
| 动画 | Framer Motion | 11.x | React 动画标准 |
| 图标 | Lucide React | latest | 与 shadcn 配套 |
| HTTP | 原生 fetch 封装 | — | 服务端组件兼容 |
| 日期 | dayjs | latest | 轻量 |
| 单元测试 | Vitest + Testing Library | latest | 快 + React 生态标准 |
| E2E 测试 | Playwright | latest | 跨浏览器 + 稳定 |
| 代码质量 | ESLint + Prettier | latest | 标准化 |
| 包管理 | pnpm (推荐) 或 npm | latest | 快速 + 磁盘友好 |
| 部署 | Vercel / Docker / Node | — | Next.js 原生支持 |

## ⚡ 关键命令（最终实现目标）

```bash
# 开发
npm run dev                    # 启动开发服务器（热更新）
npm run build                  # 构建生产版本
npm run start                  # 启动生产服务器
npm run preview                # 构建 + 启动预览

# 代码质量
npm run lint                   # ESLint 检查
npm run lint:fix               # ESLint 自动修复
npm run format                 # Prettier 格式化
npm run typecheck              # TypeScript 类型检查
npm run check                  # lint + typecheck + format 一次性检查

# 测试
npm run test                   # Vitest 运行单元 + 集成测试
npm run test:watch             # 监听模式
npm run test:coverage          # 覆盖率报告
npm run test:e2e               # Playwright E2E 测试
npm run test:e2e:ui            # Playwright UI 模式（可视化调试）

# 分析与优化
npm run analyze                # Bundle 分析
npm run lighthouse             # Lighthouse 性能审计

# shadcn/ui 组件管理
npx shadcn@latest add button   # 添加 UI 组件
npx shadcn@latest add dialog   # 添加 UI 组件
```

## 🎨 主题与暗色模式

```typescript
// 使用 next-themes 管理主题
// Tailwind dark: 前缀控制暗色样式
// 所有组件必须同时支持亮色和暗色

// ✅ 正确写法
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  <p className="text-gray-600 dark:text-gray-400">内容</p>
</div>

// ✅ 使用 shadcn 的 CSS 变量方案（推荐）
<div className="bg-background text-foreground">
  <p className="text-muted-foreground">内容</p>
</div>
```

## 🔒 安全规范
- 所有 API Key 放服务端环境变量，禁止 NEXT_PUBLIC_ 前缀
- 用户输入必须转义（React 默认处理，但 dangerouslySetInnerHTML 禁止使用）
- 外部链接必须 `rel="noopener noreferrer"`
- CSP（Content Security Policy）在 next.config.ts 中配置
- 认证 Token 存 httpOnly cookie（不存 localStorage）
```

---
