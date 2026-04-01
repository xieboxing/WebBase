import { Header } from '@/components/layout/header';
import { Container } from '@/components/layout/container';

export default function DashboardLayout({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Container className="py-6">{children}</Container>
      </main>
    </div>
  );
}