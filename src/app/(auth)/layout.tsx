import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/40 p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-lg border shadow-sm p-8">
          <div className="text-center mb-6">
            <Link href="/" className="text-2xl font-bold">
              WebBase
            </Link>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}