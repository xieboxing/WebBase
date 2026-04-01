import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';

export interface PageMetaOptions {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  image?: string;
  noIndex?: boolean;
}

/**
 * 生成页面 Metadata
 */
export function generatePageMeta(options: PageMetaOptions): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const url = options.path ? `${baseUrl}${options.path}` : baseUrl;
  const imageUrl = options.image || `${baseUrl}/og-image.png`;

  return {
    title: options.title,
    description: options.description,
    keywords: options.keywords,
    openGraph: {
      title: options.title,
      description: options.description,
      url,
      images: [{ url: imageUrl, width: 1200, height: 630 }],
      type: 'website',
      siteName: SITE_NAME,
    },
    twitter: {
      card: 'summary_large_image',
      title: options.title,
      description: options.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
    robots: options.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

/**
 * 生成文章页面 Metadata
 */
export function generateArticleMeta(options: {
  title: string;
  description: string;
  path: string;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
  image?: string;
}): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const url = `${baseUrl}${options.path}`;
  const imageUrl = options.image || `${baseUrl}/og-image.png`;

  return {
    title: options.title,
    description: options.description,
    openGraph: {
      title: options.title,
      description: options.description,
      url,
      type: 'article',
      publishedTime: options.publishedTime,
      modifiedTime: options.modifiedTime,
      authors: options.authors,
      tags: options.tags,
      images: [{ url: imageUrl, width: 1200, height: 630 }],
      siteName: SITE_NAME,
    },
    twitter: {
      card: 'summary_large_image',
      title: options.title,
      description: options.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
  };
}