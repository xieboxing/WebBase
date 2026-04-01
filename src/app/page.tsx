import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/layout/container';
import { JsonLd, createOrganizationJsonLd, createWebSiteJsonLd } from '@/components/shared/json-ld';
import { SITE_NAME, SITE_DESCRIPTION, APP_URL } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
};

export default function Home(): React.ReactElement {
  const organizationJsonLd = createOrganizationJsonLd({
    name: SITE_NAME,
    url: APP_URL,
    description: SITE_DESCRIPTION,
  });

  const websiteJsonLd = createWebSiteJsonLd({
    name: SITE_NAME,
    url: APP_URL,
    description: SITE_DESCRIPTION,
  });

  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={websiteJsonLd} />
      <Header />
      <main className="flex-1">
        <Container className="py-12">
          <section className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Welcome to WebBase
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A modern web application built with Next.js, TypeScript, and Tailwind CSS.
              This project provides a solid foundation for building production-ready web apps.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <a
                href="/about"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Learn More
              </a>
              <a
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                Contact Us
              </a>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}