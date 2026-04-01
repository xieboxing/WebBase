'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { localeNames, type Locale } from '@/i18n/config';

export interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps): React.ReactElement {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    // 移除当前 locale 前缀
    const pathWithoutLocale = pathname.replace(/^\/(zh|en)/, '') || '/';
    // 构建新的路径
    const newPath = newLocale === 'zh-CN' ? pathWithoutLocale : `/en${pathWithoutLocale}`;
    router.push(newPath);
  };

  const otherLocale: Locale = locale === 'zh-CN' ? 'en-US' : 'zh-CN';

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => switchLocale(otherLocale)}
      className={className}
      aria-label={`Switch to ${localeNames[otherLocale]}`}
    >
      {localeNames[otherLocale]}
    </Button>
  );
}