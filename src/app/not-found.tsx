import Link from 'next/link';

export default function NotFound(): React.ReactElement {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
      <h2 className="text-2xl font-semibold mt-4">页面未找到</h2>
      <p className="text-muted-foreground mt-2 text-center max-w-md">
        抱歉，您访问的页面不存在或已被移除。
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        返回首页
      </Link>
    </div>
  );
}