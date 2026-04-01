export const SITE_NAME = 'WebBase';
export const SITE_DESCRIPTION = 'A modern web application built with Next.js';

export const NAV_LINKS = [
  { href: '/', label: '首页' },
  { href: '/about', label: '关于' },
  { href: '/contact', label: '联系' },
];

export const SOCIAL_LINKS = [
  { href: 'https://github.com', label: 'GitHub', icon: 'github' },
];

export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';