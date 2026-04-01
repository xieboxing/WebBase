'use client';

import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react';
import type { ReactNode } from 'react';

interface SessionProviderProps {
  children: ReactNode;
}

export function SessionProvider({ children }: SessionProviderProps): React.ReactElement {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
}