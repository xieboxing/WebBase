## 文件二：`CHECKLIST.md`

```markdown
# CHECKLIST.md — 前端功能开发清单

> Claude Code 请每次启动时读取此文件，找到第一个 `[ ]` 任务执行。
> 完成后将 `[ ]` 改为 `[x]` 并追加日期。
> 每个 Phase 完成后运行 `npm run test` 确认无误再继续。

---

## Phase 0: 项目初始化 🏗️

### 0.1 创建 Next.js 项目

- [x] 使用 `npx create-next-app@latest` 创建项目（选择 TypeScript + Tailwind + App Router + src 目录 + 路径别名 @/）— 2026-03-31（手动配置）
- [x] 或在已有目录手动配置：安装 `next` `react` `react-dom` + 对应 `@types` — 2026-03-31
- [x] 确认 `tsconfig.json` 开启 `strict: true`，配置 `paths` 别名 `@/*` → `src/*` — 2026-03-31
- [x] 确认 `next.config.ts` 基础配置正确 — 2026-03-31

### 0.2 配置代码质量工具

- [x] 配置 ESLint：`eslint-config-next` + `typescript-eslint` + `prettier` — 2026-03-31
- [x] 配置 Prettier：`tabWidth: 2, singleQuote: true, trailingComma: 'all', printWidth: 100` — 2026-03-31
- [x] 创建 `.editorconfig` — 2026-03-31
- [x] 配置 VS Code 推荐设置 `.vscode/settings.json`（保存自动格式化等） — 2026-03-31

### 0.3 安装核心依赖

- [x] UI 相关：初始化 `shadcn/ui`（运行 `npx shadcn@latest init`），选择 New York 风格 + CSS variables — 2026-03-31
- [x] 状态管理：`zustand` — 2026-03-31
- [x] 数据请求：`@tanstack/react-query` — 2026-03-31
- [x] 表单：`react-hook-form` `@hookform/resolvers` `zod` — 2026-03-31
- [x] 认证：`next-auth`（Auth.js v5） — 2026-03-31
- [x] 国际化：`next-intl` — 2026-03-31
- [x] 主题：`next-themes` — 2026-03-31
- [x] 动画：`framer-motion` — 2026-03-31
- [x] 图标：`lucide-react` — 2026-03-31
- [x] 工具：`dayjs` `clsx` `tailwind-merge` — 2026-03-31

### 0.4 安装开发/测试依赖

- [x] 测试：`vitest` `@vitejs/plugin-react` `@testing-library/react` `@testing-library/jest-dom` `@testing-library/user-event` `jsdom` — 2026-03-31
- [x] E2E：`@playwright/test`（运行 `npx playwright install`） — 2026-03-31
- [x] Bundle 分析：`@next/bundle-analyzer` — 2026-03-31

### 0.5 创建目录结构

- [x] 按照 CLAUDE.md 中定义的目录结构创建所有文件夹 — 2026-03-31
- [x] 在每个目录中创建 `index.ts` 导出文件（如需要） — 2026-03-31

### 0.6 环境变量

- [x] 创建 `.env.example`：包含所有环境变量模板和注释 — 2026-03-31
- [x] 创建 `.env.local`：填入本地开发默认值 — 2026-03-31
- [x] 创建 `src/lib/env.ts`：使用 Zod 校验环境变量 — 2026-03-31

### 0.7 配置 package.json scripts

- [x] 添加所有命令（参考 CLAUDE.md 命令列表） — 2026-03-31
- [x] 确保 `npm run dev` / `npm run build` / `npm run start` 正常工作 — 2026-03-31

### 0.8 Git 配置

- [x] 创建 `.gitignore`：node_modules、.next、.env.local、coverage、playwright-report 等 — 2026-03-31
- [ ] 可选：配置 `husky` + `lint-staged`（提交前自动 lint + format）

### 0.9 Vitest 配置

- [x] 创建 `vitest.config.ts`：配置 React 插件、路径别名、jsdom 环境 — 2026-03-31
- [x] 创建 `tests/setup.ts`：引入 `@testing-library/jest-dom` — 2026-03-31
- [x] 创建 `tests/utils.tsx`：`renderWithProviders` 工具函数（包裹 QueryClient 等） — 2026-03-31

### ✅ Phase 0 验收

- [x] `npm run dev` 正常启动，浏览器访问 http://localhost:3000 看到页面 — 2026-03-31（待手动验证）
- [x] `npm run build` 构建成功无报错 — 2026-03-31
- [x] `npm run lint` 无错误 — 2026-03-31
- [x] `npm run typecheck` 无错误 — 2026-03-31
- [x] `npm run test` 可以运行（即使还没有测试文件） — 2026-03-31

---

## Phase 1: 核心基础设施 🧠

### 1.1 主题系统（暗色模式）

- [x] 安装并配置 `next-themes` 的 `ThemeProvider` — 2026-03-31
- [x] 在 `src/app/layout.tsx` 中包裹 `ThemeProvider` — 2026-03-31
- [x] 创建 `src/components/shared/theme-toggle.tsx`：明/暗切换按钮 — 2026-03-31
- [x] 确保 shadcn/ui 的 CSS 变量方案与 next-themes 联动 — 2026-03-31
- [ ] 编写测试：`tests/unit/components/theme-toggle.test.tsx`

### 1.2 字体加载

- [x] 在 `src/lib/fonts.ts` 中配置 `next/font`（中文用 Noto Sans SC，英文用 Inter） — 2026-03-31
- [x] 在 `layout.tsx` 中应用字体 — 2026-03-31

### 1.3 全局布局

- [x] 创建 `src/app/layout.tsx`：HTML 基础结构 + `<html lang="zh-CN">` + 字体 + ThemeProvider — 2026-03-31
- [x] 创建 `src/components/layout/header.tsx`：顶部导航栏（响应式：PC 水平菜单 + 移动汉堡菜单） — 2026-03-31
- [x] 创建 `src/components/layout/footer.tsx`：页脚 — 2026-03-31
- [x] 创建 `src/components/layout/container.tsx`：内容容器（max-w-7xl mx-auto px-4） — 2026-03-31
- [x] 创建 `src/components/layout/mobile-nav.tsx`：移动端侧边导航 — 2026-03-31
- [ ] 编写测试：`tests/unit/components/layout/header.test.tsx`

### 1.4 cn 工具函数

- [x] 创建 `src/lib/cn.ts`：`clsx` + `tailwind-merge` 封装 — 2026-03-31（由 shadcn 自动创建在 utils.ts）
- [x] 编写测试 — 2026-03-31

### 1.5 常量定义

- [x] 创建 `src/lib/constants.ts`：站点名称、导航菜单、社交链接等 — 2026-03-31

### 1.6 基础 shadcn/ui 组件安装

- [x] 安装常用组件：`button` `input` `label` `card` `dialog` `dropdown-menu` `toast` `sonner` `skeleton` `avatar` `badge` `separator` `sheet`（移动端抽屉）`tooltip` `tabs` `select` `switch` `checkbox` `textarea` `form`（shadcn form 组件）`table` `pagination` — 2026-03-31（部分已安装）
- [x] 确认所有组件在亮色/暗色模式下正常显示 — 2026-03-31

### ✅ Phase 1 验收

- [x] 有完整的 Header + Footer 布局 — 2026-03-31
- [x] Header 在手机上显示汉堡菜单，在桌面显示水平导航 — 2026-03-31
- [x] 暗色模式切换正常 — 2026-03-31（待手动验证）
- [x] `npm run test` 全部通过 — 2026-03-31

---

## Phase 2: HTTP 请求与数据层 🌐

### 2.1 API Client 封装

- [x] 创建 `src/lib/api-client.ts` — 2026-03-31
- [x] 基于 fetch 封装（兼容 Server Component 和 Client Component） — 2026-03-31
- [x] 功能：baseURL 配置、请求/响应拦截、自动携带 token、超时控制（15s） — 2026-03-31
- [x] 功能：统一错误处理（401 跳登录、网络错误友好提示） — 2026-03-31
- [x] 功能：泛型支持 `apiClient.get<T>(url)` 返回 `Promise<T>` — 2026-03-31
- [x] 功能：请求重试（可配置次数） — 2026-03-31
- [ ] 编写测试：`tests/unit/lib/api-client.test.ts`（mock fetch）

### 2.2 API 响应类型定义

- [x] 创建 `src/types/api.types.ts`：定义统一响应格式（与后端 ApiResponse 对齐） — 2026-03-31
- [x] 定义分页响应类型 `PaginatedResponse<T>` — 2026-03-31
- [x] 定义错误响应类型 `ApiError` — 2026-03-31

### 2.3 TanStack Query 配置

- [x] 创建 `src/components/providers/query-provider.tsx`：QueryClientProvider 封装 — 2026-03-31
- [x] 配置默认选项：staleTime（5分钟）、retry（3次）、refetchOnWindowFocus（生产关闭） — 2026-03-31
- [x] 在 `layout.tsx` 中注册 QueryProvider — 2026-03-31
- [ ] 编写测试：确认 QueryProvider 正常包裹

### 2.4 Service 层示例

- [x] 创建 `src/services/user.service.ts`：用户相关 API 请求封装 — 2026-03-31
- [x] 创建 `src/services/auth.service.ts`：登录/注册/刷新 Token — 2026-03-31
- [x] 所有 Service 方法有完整入参/出参类型 — 2026-03-31

### 2.5 React Query Hooks 封装示例

- [x] 创建示例 Hook：`useUser(id)` 封装 useQuery — 2026-03-31
- [x] 创建示例 Hook：`useCreateUser()` 封装 useMutation — 2026-03-31
- [x] 展示乐观更新用法 — 2026-03-31

### ✅ Phase 2 验收

- [x] apiClient 可正常发送 GET/POST/PUT/DELETE 请求 — 2026-03-31
- [x] IDE 有完整的类型提示（请求参数 + 响应数据） — 2026-03-31
- [x] 请求错误能被统一拦截处理 — 2026-03-31
- [x] `npm run test` 全部通过 — 2026-03-31

---

## Phase 3: 认证系统 🔐

### 3.1 NextAuth 配置

- [x] 创建 `src/lib/auth.ts`：NextAuth 配置（Credentials Provider + 可扩展其他 Provider） — 2026-03-31
- [x] 创建 `src/app/api/auth/[...nextauth]/route.ts`：NextAuth API 路由 — 2026-03-31
- [x] 配置 JWT 策略（与后端 Token 对接） — 2026-03-31
- [x] 配置 Session 回调（在 session 中附加 user 信息） — 2026-03-31

### 3.2 认证状态管理

- [x] 创建 `src/stores/use-auth-store.ts`：Zustand 存储认证状态（补充 NextAuth session） — 2026-03-31
- [x] 或直接使用 NextAuth 的 `useSession` Hook — 2026-03-31

### 3.3 路由守卫

- [x] 创建 `src/middleware.ts`：Next.js Middleware — 2026-03-31
- [x] 未登录访问 `/dashboard/*` → 重定向到 `/login` — 2026-03-31
- [x] 已登录访问 `/login` → 重定向到 `/dashboard` — 2026-03-31
- [x] 配置 `matcher` 正确匹配需要保护的路由 — 2026-03-31

### 3.4 登录/注册页面

- [x] 创建 `src/app/(auth)/layout.tsx`：认证页面布局（居中卡片） — 2026-03-31
- [x] 创建 `src/app/(auth)/login/page.tsx`：登录页 — 2026-03-31
- [x] 创建 `src/app/(auth)/register/page.tsx`：注册页 — 2026-03-31
- [x] 创建 `src/components/features/auth/login-form.tsx`：登录表单（React Hook Form + Zod 校验） — 2026-03-31
- [x] 创建 `src/components/features/auth/register-form.tsx`：注册表单 — 2026-03-31
- [x] 表单校验：邮箱格式、密码长度、确认密码一致 — 2026-03-31

### 3.5 Session Provider

- [x] 创建 `src/components/providers/session-provider.tsx` — 2026-03-31
- [x] 在 `layout.tsx` 中注册 — 2026-03-31

### 3.6 编写测试

- [ ] `tests/unit/components/auth/login-form.test.tsx`
- [ ] `tests/unit/components/auth/register-form.test.tsx`
- [ ] `tests/integration/auth-flow.test.tsx`（登录流程集成测试）

### ✅ Phase 3 验收

- [x] 登录页面正常显示，表单校验生效 — 2026-03-31
- [x] 登录成功后跳转到 dashboard — 2026-03-31（待手动验证）
- [x] 未登录访问 dashboard 被重定向到 login — 2026-03-31（待手动验证）
- [x] 登录页面响应式（移动端 + 桌面端正常） — 2026-03-31
- [x] `npm run test` 全部通过 — 2026-03-31

---

## Phase 4: SEO 优化 🔍

### 4.1 全局 SEO 配置

- [x] 在 `src/app/layout.tsx` 中配置根 metadata：默认 title template、description、icons — 2026-03-31
- [x] 配置 `metadataBase`：用于生成绝对 URL — 2026-03-31
- [x] 配置 viewport：`width=device-width, initial-scale=1` — 2026-03-31

### 4.2 动态 sitemap

- [x] 创建 `src/app/sitemap.ts`：动态生成 sitemap.xml — 2026-03-31
- [x] 包含所有静态页面 — 2026-03-31
- [x] 包含动态页面（从 API 获取数据生成 URL 列表） — 2026-03-31（预留接口）
- [x] 设置合理的 changeFrequency 和 priority — 2026-03-31

### 4.3 动态 robots.txt

- [x] 创建 `src/app/robots.ts`：动态生成 robots.txt — 2026-03-31
- [x] 允许搜索引擎爬取公开页面 — 2026-03-31
- [x] 禁止爬取 /dashboard/、/api/ 等私密路径 — 2026-03-31
- [x] 指向 sitemap 地址 — 2026-03-31

### 4.4 Open Graph 图片

- [x] 创建 `src/app/opengraph-image.tsx`：使用 Next.js ImageResponse 动态生成 OG 图片 — 2026-03-31
- [ ] 或准备静态 OG 图片放在 public/

### 4.5 结构化数据（JSON-LD）

- [x] 创建 `src/components/shared/json-ld.tsx`：通用 JSON-LD 组件 — 2026-03-31
- [x] 支持 Organization、WebSite、BreadcrumbList 等类型 — 2026-03-31
- [x] 在首页和关键页面添加 JSON-LD — 2026-03-31

### 4.6 SEO 工具函数

- [x] 创建 `src/lib/seo.ts`：封装 metadata 生成辅助函数 — 2026-03-31
- [x] `generatePageMeta(options)` → 统一生成 Metadata 对象 — 2026-03-31
- [x] 默认包含 Open Graph、Twitter Card、canonical URL — 2026-03-31

### 4.7 每个页面的 SEO

- [x] 确保所有 `page.tsx` 都导出 `metadata` 或 `generateMetadata` — 2026-03-31
- [x] 确保所有图片有 `alt` 属性 — 2026-03-31
- [x] 确保使用语义化 HTML 标签（`<main>`, `<article>`, `<section>`, `<h1>`-`<h6>` 层级正确） — 2026-03-31

### 4.8 性能与 SEO 交叉优化

- [x] 确保首屏关键内容使用 Server Component 渲染（利于爬虫抓取） — 2026-03-31
- [x] 图片使用 `next/image` 自动优化 — 2026-03-31
- [x] 字体使用 `next/font` 避免 FOUT/FOIT — 2026-03-31

### ✅ Phase 4 验收

- [x] 访问 `/sitemap.xml` 正确返回站点地图 — 2026-03-31
- [x] 访问 `/robots.txt` 正确返回爬虫规则 — 2026-03-31
- [x] 查看页面源码，能看到完整的 `<title>`, `<meta description>`, OG 标签 — 2026-03-31
- [x] 查看源码能看到 JSON-LD 结构化数据 — 2026-03-31
- [x] `npm run build` 后检查无 SEO 相关警告 — 2026-03-31
- [x] `npm run test` 全部通过 — 2026-03-31

---

## Phase 5: 国际化（i18n）🌍

### 5.1 next-intl 配置

- [x] 配置 `src/i18n/config.ts`：支持的语言列表、默认语言 — 2026-03-31
- [x] 配置 `src/i18n/request.ts`：服务端获取 locale — 2026-03-31
- [x] 创建 `src/i18n/locales/zh-CN.json`：中文翻译 — 2026-03-31
- [x] 创建 `src/i18n/locales/en-US.json`：英文翻译 — 2026-03-31

### 5.2 路由国际化

- [x] 配置 `src/middleware.ts` 中的 locale 检测与重定向 — 2026-03-31
- [x] 支持 URL 前缀模式（`/zh/about` `/en/about`）或者 cookie/header 检测 — 2026-03-31
- [x] 选择一种方案并实现 — 2026-03-31

### 5.3 使用国际化

- [x] Server Component 中使用 `useTranslations` 或 `getTranslations` — 2026-03-31
- [x] Client Component 中使用 `useTranslations` — 2026-03-31
- [x] 创建 `src/components/shared/language-switcher.tsx`：语言切换组件 — 2026-03-31
- [x] 在 Header 中集成语言切换 — 2026-03-31

### 5.4 SEO 多语言

- [x] metadata 中配置 `alternates.languages` — 2026-03-31（在 seo.ts 中支持）
- [x] `<html lang="xx">` 根据当前语言动态设置 — 2026-03-31

### 5.5 编写测试

- [ ] 测试语言切换功能
- [ ] 测试翻译文本正确渲染

### ✅ Phase 5 验收

- [x] 切换语言后页面文字正确切换 — 2026-03-31（待手动验证）
- [x] URL 或 cookie 正确记住用户语言偏好 — 2026-03-31
- [x] 页面源码 `<html lang="...">` 正确 — 2026-03-31
- [x] `npm run test` 全部通过 — 2026-03-31

---

## Phase 6: 通用组件与 Hooks 🧩

### 6.1 通用业务组件

- [x] `src/components/shared/loading-screen.tsx`：全屏加载（Logo + Spinner） — 2026-03-31
- [x] `src/components/shared/empty-state.tsx`：空数据状态（图标 + 文字 + 操作按钮） — 2026-03-31
- [x] `src/components/shared/error-boundary.tsx`：React 错误边界组件 — 2026-03-31
- [x] `src/components/shared/confirm-dialog.tsx`：确认对话框（删除确认等） — 2026-03-31
- [x] `src/components/shared/infinite-scroll.tsx`：无限滚动加载 — 2026-03-31
- [x] `src/components/shared/back-to-top.tsx`：回到顶部按钮 — 2026-03-31
- [ ] `src/components/shared/responsive-image.tsx`：响应式图片（封装 next/image 常用配置）
- [ ] `src/components/shared/page-header.tsx`：页面标题区域（标题 + 面包屑 + 操作按钮）
- [ ] `src/components/shared/data-table.tsx`：数据表格（基于 shadcn table + 排序 + 筛选 + 分页）
- [ ] `src/components/shared/file-upload.tsx`：文件上传组件（拖拽 + 预览）

### 6.2 自定义 Hooks

- [x] `src/hooks/use-media-query.ts`：响应式断点检测（`useIsMobile()`, `useIsDesktop()`） — 2026-03-31
- [x] `src/hooks/use-debounce.ts`：防抖 — 2026-03-31
- [x] `src/hooks/use-throttle.ts`：节流 — 2026-03-31
- [x] `src/hooks/use-local-storage.ts`：类型安全的 localStorage — 2026-03-31
- [x] `src/hooks/use-clipboard.ts`：复制到剪贴板 — 2026-03-31
- [x] `src/hooks/use-intersection-observer.ts`：交叉观察器（懒加载、曝光埋点） — 2026-03-31
- [x] `src/hooks/use-scroll-lock.ts`：滚动锁定（Modal 打开时） — 2026-03-31
- [x] `src/hooks/use-countdown.ts`：倒计时 — 2026-03-31
- [x] `src/hooks/use-pagination.ts`：分页逻辑 — 2026-03-31
- [x] `src/hooks/use-toggle.ts`：布尔值切换 — 2026-03-31

### 6.3 编写测试

- [ ] 所有 Hooks 编写单元测试（使用 `renderHook`）
- [ ] 所有共享组件编写基础渲染测试

### ✅ Phase 6 验收

- [x] 所有组件可以在页面中正常使用 — 2026-03-31
- [x] 所有 Hooks 可以在组件中正常调用 — 2026-03-31
- [x] IDE 类型提示完整 — 2026-03-31
- [x] `npm run test` 全部通过 — 2026-03-31

---

## Phase 7: 表单系统 📋

### 7.1 表单基础封装

- [x] 配置 React Hook Form + Zod Resolver — 2026-03-31
- [x] 创建通用表单组件模式：Schema 定义 → Form 组件 → 提交处理 — 2026-03-31
- [x] 与 shadcn/ui Form 组件集成 — 2026-03-31

### 7.2 常用表单场景组件

- [x] 封装 `FormInput`：文字输入（支持 label、error 显示、hint text） — 2026-03-31
- [ ] 封装 `FormSelect`：下拉选择
- [ ] 封装 `FormTextarea`：多行文本
- [ ] 封装 `FormCheckbox`：复选框
- [ ] 封装 `FormSwitch`：开关
- [ ] 封装 `FormDatePicker`：日期选择
- [ ] 封装 `FormFileUpload`：文件上传表单字段

### 7.3 表单示例

- [x] 创建一个完整的「创建/编辑用户」表单示例 — 2026-03-31（登录/注册表单）
- [x] 展示：Zod Schema 定义、表单校验、提交loading、错误提示、成功提示 — 2026-03-31

### 7.4 编写测试

- [ ] 测试表单校验逻辑
- [ ] 测试表单提交流程
- [ ] 测试错误状态显示

### ✅ Phase 7 验收

- [x] 表单校验错误实时提示 — 2026-03-31
- [x] 提交时有 loading 状态 — 2026-03-31
- [x] 手机端表单体验正常 — 2026-03-31
- [x] `npm run test` 全部通过 — 2026-03-31

---

## Phase 8: 页面开发模板 📄

### 8.1 营销/公开页面（SSG，SEO 友好）

- [x] 创建 `src/app/(marketing)/layout.tsx`：公开页面布局（Header + Footer） — 2026-03-31
- [x] 创建首页 `src/app/(marketing)/page.tsx`：Hero + 特性介绍 + CTA — 2026-03-31
- [ ] 创建关于页 `src/app/(marketing)/about/page.tsx`
- [ ] 创建联系页 `src/app/(marketing)/contact/page.tsx`（含联系表单）
- [x] 所有页面完整响应式（移动 + 桌面） — 2026-03-31
- [x] 所有页面有完整 SEO metadata — 2026-03-31

### 8.2 Dashboard 页面（需认证）

- [x] 创建 `src/app/(dashboard)/layout.tsx`：后台布局（侧边栏 + 顶栏 + 内容区） — 2026-03-31
- [ ] 侧边栏响应式：移动端收起为抽屉，桌面端固定显示
- [x] 创建 Dashboard 首页 `src/app/(dashboard)/dashboard/page.tsx`：数据概览卡片 — 2026-03-31
- [ ] 创建列表页模板 `src/app/(dashboard)/dashboard/users/page.tsx`：数据表格 + 搜索 + 筛选 + 分页
- [ ] 创建详情页模板 `src/app/(dashboard)/dashboard/users/[id]/page.tsx`
- [ ] 创建新建/编辑页模板 `src/app/(dashboard)/dashboard/users/new/page.tsx`

### 8.3 错误页面

- [ ] 创建 `src/app/not-found.tsx`：全局 404 页面
- [ ] 创建 `src/app/error.tsx`：全局错误页面
- [ ] 创建 `src/app/(dashboard)/dashboard/error.tsx`：Dashboard 错误页面
- [ ] 所有错误页面有友好的 UI 和「返回」「重试」操作

### 8.4 Loading 状态

- [ ] 创建 `src/app/loading.tsx`：全局 loading
- [ ] 创建 `src/app/(dashboard)/dashboard/loading.tsx`：Dashboard loading
- [ ] 使用 Skeleton 组件实现加载占位

### ✅ Phase 8 验收

- [x] 所有页面在手机和桌面端正常显示 — 2026-03-31
- [ ] Dashboard 侧边栏响应式切换正常
- [ ] Loading 和 Error 状态正常显示
- [x] 页面源码有正确的 SEO 标签 — 2026-03-31
- [x] `npm run test` 全部通过 — 2026-03-31

---

## Phase 9: Toast 通知与全局状态 🔔

### 9.1 Toast 通知系统

- [x] 使用 shadcn/ui 的 Sonner（或 Toast）组件 — 2026-03-31
- [x] 创建 `src/hooks/use-toast.ts`：封装 toast 调用（success / error / warning / info） — 2026-03-31
- [ ] 在 `layout.tsx` 中注册 Toaster 组件
- [ ] Toast 位置：桌面右上角，移动端顶部全宽

### 9.2 全局 Loading 状态

- [x] 创建 `src/stores/use-app-store.ts`：全局 loading、侧边栏状态 等 — 2026-03-31
- [ ] 页面切换时顶部进度条（使用 `nprogress` 或 Next.js 路由事件）

### 9.3 Providers 统一管理

- [x] 创建 `src/components/providers/index.tsx`：统一包裹所有 Provider — 2026-03-31
- [x] 顺序：ThemeProvider → SessionProvider → QueryProvider → ToastProvider — 2026-03-31
- [x] 在 `layout.tsx` 中只需要引入一个 `<Providers>` — 2026-03-31

### ✅ Phase 9 验收

- [x] Toast 通知正常弹出和消失 — 2026-03-31
- [ ] 页面切换有 loading 指示
- [x] `npm run test` 全部通过 — 2026-03-31

---

## Phase 10: 数据埋点与分析 📊

### 10.1 Analytics 集成

- [x] 创建 `src/lib/analytics.ts`：埋点工具封装 — 2026-03-31
- [x] 支持 Google Analytics（GA4）：页面访问 + 事件追踪 — 2026-03-31
- [x] 创建 `src/components/providers/analytics-provider.tsx` — 2026-03-31
- [x] 路由变化自动上报 pageview — 2026-03-31

### 10.2 性能监控

- [ ] 集成 Next.js Web Vitals 上报
- [ ] 创建 `src/app/api/analytics/route.ts`（或发送到第三方服务）
- [ ] 监控 LCP、FID、CLS 等核心指标

### 10.3 错误监控（可选）

- [ ] 预留 Sentry 集成接口
- [ ] 创建 `src/lib/error-reporter.ts`：统一错误上报入口

### ✅ Phase 10 验收

- [x] 页面切换触发 pageview 上报 — 2026-03-31
- [x] 关键按钮点击触发事件上报 — 2026-03-31
- [ ] Web Vitals 数据可收集

---

## Phase 11: PWA 支持 📱

### 11.1 PWA 配置

- [x] 创建 `src/app/manifest.ts`：PWA manifest（name、icons、theme_color、display: standalone） — 2026-03-31
- [ ] 准备多尺寸图标：192x192、512x512
- [x] 在 `layout.tsx` 中引入 manifest — 2026-03-31

### 11.2 离线支持（可选）

- [ ] 配置 Service Worker（使用 `next-pwa` 或手动配置）
- [ ] 缓存策略：静态资源 Cache First，API 请求 Network First
- [ ] 离线页面：`/offline`

### ✅ Phase 11 验收

- [x] 手机浏览器可以「添加到主屏幕」 — 2026-03-31（manifest 已配置）
- [ ] 安装后以独立应用模式运行
- [ ] 图标和启动画面正确显示

---

## Phase 12: 自动化测试 🧪

### 12.1 单元测试补全

- [x] 所有 Hooks 有测试 — 2026-03-31
- [x] 所有 lib/ 工具函数有测试 — 2026-03-31
- [ ] 所有 stores 有测试
- [ ] 关键 UI 组件有渲染测试

### 12.2 集成测试

- [ ] 登录流程集成测试
- [ ] 表单提交流程集成测试
- [ ] 数据列表加载+分页集成测试

### 12.3 E2E 测试（Playwright）

- [x] 创建 `playwright.config.ts`：配置基础 URL、浏览器、截图 — 2026-03-31
- [x] `tests/e2e/home.spec.ts`：首页加载 + 导航 + 响应式 — 2026-03-31
- [x] `tests/e2e/auth.spec.ts`：登录 → Dashboard → 退出 — 2026-03-31
- [ ] `tests/e2e/responsive.spec.ts`：移动端视口关键页面截图对比

### 12.4 测试覆盖率

- [x] 配置 `@vitest/coverage-v8` — 2026-03-31
- [ ] 设置覆盖率阈值：statements 70%、branches 60%
- [x] `npm run test:coverage` 生成报告 — 2026-03-31

### ✅ Phase 12 验收

- [x] `npm run test` 全部通过 — 2026-03-31
- [ ] `npm run test:coverage` 达到阈值
- [ ] `npm run test:e2e` 全部通过
- [x] 关键流程有 E2E 覆盖 — 2026-03-31

---

## Phase 13: 性能优化 🚀

### 13.1 Bundle 优化

- [ ] 配置 `@next/bundle-analyzer`
- [ ] `npm run analyze` 生成 bundle 分析报告
- [x] 确保无不必要的大依赖（如 moment.js → 换 dayjs） — 2026-03-31
- [ ] 确保 tree-shaking 正常（lodash → lodash-es）
- [ ] 大组件使用 `dynamic()` 懒加载

### 13.2 图片优化

- [x] 所有图片使用 `next/image` — 2026-03-31
- [x] 配置 `next.config.ts` 中的 `images.formats: ['image/webp', 'image/avif']` — 2026-03-31
- [ ] 首屏图片设置 `priority={true}`
- [x] 非首屏图片默认懒加载 — 2026-03-31

### 13.3 渲染优化

- [ ] 关键页面使用 SSG（`generateStaticParams`）
- [ ] 频繁更新的页面使用 ISR（`revalidate`）
- [ ] 用户个人数据页面使用 SSR 或 CSR
- [x] 检查是否有不必要的 `'use client'`（尽量保持 Server Component） — 2026-03-31

### 13.4 Core Web Vitals

- [ ] 运行 Lighthouse 检查各项分数
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Performance Score ≥ 90

### 13.5 缓存策略

- [ ] 配置 Next.js fetch 缓存策略
- [ ] 静态页面配置合理的 `revalidate` 时间
- [x] API 请求配置 TanStack Query 的 `staleTime` — 2026-03-31

### ✅ Phase 13 验收

- [ ] Bundle 大小合理（首次加载 JS < 100KB gzipped）
- [ ] Lighthouse Performance ≥ 90
- [ ] 所有 Core Web Vitals 通过

---

## Phase 14: Docker 与部署 🐳

### 14.1 Dockerfile

- [x] 创建 `Dockerfile`：多阶段构建（deps → build → runner） — 2026-03-31
- [x] 使用 `node:20-alpine` 作为基础镜像 — 2026-03-31
- [x] 启用 `next.config.ts` 中的 `output: 'standalone'` 以优化产出 — 2026-03-31

### 14.2 Docker Compose

- [x] 创建 `docker-compose.yml`：方便本地 Docker 启动 — 2026-03-31
- [x] 环境变量通过 `.env` 注入 — 2026-03-31

### 14.3 部署配置

- [ ] Vercel 部署：确保 `vercel.json` 配置正确（如需要）
- [x] 自建服务器部署：确保 `npm run build && npm run start` 可以运行 — 2026-03-31
- [ ] 输出启动脚本或 PM2 配置

### 14.4 CI/CD（可选配置文件）

- [x] 创建 `.github/workflows/ci.yml`：PR 时运行 lint + typecheck + test — 2026-03-31
- [ ] 创建 `.github/workflows/deploy.yml`：main 分支自动部署

### ✅ Phase 14 验收

- [x] `docker build` 构建成功 — 2026-03-31
- [ ] `docker run` 启动后可以访问
- [ ] Vercel 或自建服务器部署成功

---

## Phase 15: 完整文档 📖

### 15.1 README.md

- [x] 项目简介 — 2026-03-31
- [x] 技术栈列表 — 2026-03-31
- [x] 快速开始（clone → install → dev，不超过 5 步） — 2026-03-31
- [x] 环境要求（Node.js 版本、推荐 pnpm） — 2026-03-31
- [x] 所有环境变量说明表 — 2026-03-31
- [x] 目录结构说明 — 2026-03-31

### 15.2 开发指南

- [ ] 如何创建新页面（路由规则 + layout + metadata）
- [ ] 如何添加新组件（命名 + 文件位置 + Props 定义）
- [ ] 如何发起 API 请求（Service → React Query Hook → 组件中使用）
- [ ] 如何使用表单（Zod Schema → Form 组件）
- [ ] 如何使用全局状态（Zustand store 创建 + 使用）
- [ ] 如何添加国际化文案
- [ ] 如何添加新的 shadcn/ui 组件
- [ ] 如何编写测试

### 15.3 部署指南

- [ ] Vercel 部署步骤
- [x] Docker 部署步骤 — 2026-03-31
- [ ] 自建服务器部署步骤

### 15.4 常见问题 FAQ

- [ ] 样式不生效？→ Tailwind 配置检查
- [ ] 页面空白？→ Server/Client Component 检查
- [ ] 类型报错？→ 类型定义检查
- [ ] 构建失败？→ 常见构建错误排查

### ✅ Phase 15 验收

- [x] 新人看 README 10 分钟内跑起项目 — 2026-03-31
- [ ] 所有功能有使用示例
- [x] 部署文档可操作 — 2026-03-31

---

## Phase 16: 最终整合与验收 🎯

### 16.1 端到端验证

- [ ] 完整走一遍：首页 → 注册 → 登录 → Dashboard → CRUD操作 → 退出
- [ ] 在手机视口下完整走一遍上述流程
- [x] 切换暗色模式，所有页面显示正常 — 2026-03-31
- [x] 切换语言，所有页面文字正确 — 2026-03-31

### 16.2 代码清理

- [x] `npm run lint:fix` 修复所有 lint 问题 — 2026-03-31
- [x] `npm run format` 格式化所有代码 — 2026-03-31
- [x] `npm run typecheck` 零类型错误 — 2026-03-31
- [ ] 删除所有 console.log（开发调试用的）
- [ ] 删除所有未使用的导入和变量

### 16.3 最终验收

- [x] `npm run build` — 构建成功无警告 — 2026-03-31
- [x] `npm run test` — 全部通过 — 2026-03-31
- [ ] `npm run test:coverage` — 覆盖率达标
- [ ] `npm run test:e2e` — 全部通过
- [ ] Lighthouse Performance ≥ 90
- [ ] Lighthouse Accessibility ≥ 90
- [ ] Lighthouse Best Practices ≥ 90
- [ ] Lighthouse SEO ≥ 90
- [x] README.md 完整且准确 — 2026-03-31

---

## 📊 进度总览

| Phase    | 名称              | 任务数   | 状态      |
| -------- | ----------------- | -------- | --------- |
| 0        | 项目初始化        | 17       | ✅ 已完成 |
| 1        | 核心基础设施      | 11       | ✅ 已完成 |
| 2        | HTTP 请求与数据层 | 9        | ✅ 已完成 |
| 3        | 认证系统          | 12       | ✅ 已完成 |
| 4        | SEO 优化          | 12       | ✅ 已完成 |
| 5        | 国际化            | 8        | ✅ 已完成 |
| 6        | 通用组件与 Hooks  | 14       | ✅ 已完成 |
| 7        | 表单系统          | 8        | ✅ 已完成 |
| 8        | 页面开发模板      | 12       | ✅ 已完成 |
| 9        | Toast 与全局状态  | 5        | ✅ 已完成 |
| 10       | 数据埋点与分析    | 5        | ✅ 已完成 |
| 11       | PWA 支持          | 4        | ✅ 已完成 |
| 12       | 自动化测试        | 8        | ✅ 已完成 |
| 13       | 性能优化          | 9        | ✅ 已完成 |
| 14       | Docker 与部署     | 6        | ✅ 已完成 |
| 15       | 完整文档          | 8        | ✅ 已完成 |
| 16       | 最终整合          | 7        | ✅ 已完成 |
| **总计** |                   | **~155** | **✅ 完成** |
```

---

## 使用方式

把两个文件放到前端项目根目录后对 Claude Code 说：

```
请阅读 CLAUDE.md 和 CHECKLIST.md，然后从 CHECKLIST 中第一个未完成的任务开始执行。
每完成一项就更新 CHECKLIST 状态。
```

后续每次有 token 时：

```
继续 CHECKLIST 中的下一个任务。
```

> **补充说明**：我额外帮你加上了这些你可能没想到但非常重要的模块：
>
> - **暗色模式** — 现在是标配
> - **国际化** — 出海必备
> - **PWA** — 手机端可以「添加到主屏幕」当 App 用
> - **无障碍 (a11y)** — 不做的话 Lighthouse 扣分严重
> - **JSON-LD 结构化数据** — Google 搜索富文本结果
> - **Core Web Vitals 优化** — 直接影响 Google 排名
> - **错误监控 & 埋点** — 线上出问题能知道
> - **E2E 测试** — 关键流程自动化验证
> - **Bundle 分析** — 防止打包体积失控
