'use client';

import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { ThemeToggle } from '@/components/shared/theme-toggle';
import { LanguageSwitcher } from '@/components/shared/language-switcher';
import { MobileNav } from '@/components/layout/mobile-nav';
import { NAV_LINKS, SITE_NAME } from '@/lib/constants';
import { cn } from '@/lib/utils';

export interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps): React.ReactElement {
  return (
    <header className={cn('sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur', className)}>
      <Container className="flex h-14 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-semibold text-lg">
          {SITE_NAME}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}