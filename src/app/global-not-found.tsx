import Link from 'next/link';

export default function GlobalNotFound(): React.ReactElement {
  return (
    <html lang="zh-CN">
      <body className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-muted-foreground mt-2">页面未找到</p>
        <Link
          href="/"
          className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          返回首页
        </Link>
      </body>
    </html>
  );
}