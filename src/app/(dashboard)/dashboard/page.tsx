import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/layout/container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | WebBase',
  description: '管理面板',
};

export default function DashboardPage(): React.ReactElement {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Container className="py-12">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
          <p className="text-muted-foreground">欢迎来到管理面板。您可以在这里管理您的账户和内容。</p>
        </Container>
      </main>
      <Footer />
    </>
  );
}