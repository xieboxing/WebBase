import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'WebBase';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          color: '#ffffff',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <span
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            WebBase
          </span>
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#a1a1aa',
          }}
        >
          A modern web application built with Next.js
        </div>
      </div>
    ),
  );
}