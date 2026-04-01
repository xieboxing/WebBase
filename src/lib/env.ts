import { z } from 'zod';

const envSchema = z.object({
  // 公开变量
  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
  NEXT_PUBLIC_API_BASE_URL: z.string().url().default('http://localhost:4000/api/v1'),
  NEXT_PUBLIC_SITE_NAME: z.string().min(1).default('WebBase'),
  NEXT_PUBLIC_GA_ID: z.string().optional(),
  // 私有变量
  NEXTAUTH_URL: z.string().url().default('http://localhost:3000'),
  NEXTAUTH_SECRET: z.string().min(1).default('development-secret'),
  API_SECRET_KEY: z.string().optional(),
  DATABASE_URL: z.string().optional(),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
  NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  API_SECRET_KEY: process.env.API_SECRET_KEY,
  DATABASE_URL: process.env.DATABASE_URL,
});