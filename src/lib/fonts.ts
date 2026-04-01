import { Geist } from 'next/font/google';
import { Noto_Sans_SC } from 'next/font/google';

// 英文字体
export const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// 中文字体
export const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  variable: '--font-chinese',
  display: 'swap',
});