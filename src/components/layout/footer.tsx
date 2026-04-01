import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { NAV_LINKS, SITE_NAME } from '@/lib/constants';
import { cn } from '@/lib/utils';

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps): React.ReactElement {
  return (
    <footer className={cn('border-t bg-background', className)}>
      <Container className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="font-semibold text-lg">
              {SITE_NAME}
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              A modern web application built with Next.js
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">导航</h3>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Copyright */}
          <div className="md:text-right">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}