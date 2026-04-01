import { Home, User, Settings, FileText } from 'lucide-react';

export const SIDEBAR_LINKS = [
  { href: '/dashboard', label: '概览', icon: Home },
  { href: '/dashboard/users', label: '用户管理', icon: User },
  { href: '/dashboard/posts', label: '内容管理', icon: FileText },
  { href: '/dashboard/settings', label: '设置', icon: Settings },
];