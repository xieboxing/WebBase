# WebBase

A modern web application built with Next.js 15, TypeScript, Tailwind CSS 4, and shadcn/ui.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** strict mode
- **Tailwind CSS 4** for styling
- **shadcn/ui** component library
- **Dark mode** support
- **Internationalization** (i18n) with next-intl
- **Authentication** with NextAuth.js
- **State management** with Zustand
- **Data fetching** with TanStack Query
- **Form handling** with React Hook Form + Zod
- **SEO optimized** with dynamic sitemap and meta tags
- **PWA ready** with manifest

## 📦 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 |
| Language | TypeScript 5.x |
| Styling | Tailwind CSS 4 |
| UI Components | shadcn/ui |
| State Management | Zustand |
| Data Fetching | TanStack Query |
| Forms | React Hook Form + Zod |
| Authentication | NextAuth.js |
| i18n | next-intl |
| Testing | Vitest + Playwright |

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/webbase.git
cd webbase

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format with Prettier
npm run typecheck    # Run TypeScript check
npm run check        # Run all checks

# Testing
npm run test         # Run unit tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage
npm run test:e2e     # Run E2E tests
```

## 📁 Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
│   ├── ui/          # shadcn/ui components
│   ├── layout/      # Layout components
│   ├── shared/      # Shared components
│   └── features/    # Feature-specific components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── services/        # API services
├── stores/          # Zustand stores
├── types/           # TypeScript types
└── i18n/            # Internationalization
```

## 🌍 Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_APP_URL` | Application URL |
| `NEXT_PUBLIC_API_BASE_URL` | API base URL |
| `NEXTAUTH_SECRET` | NextAuth secret key |
| `NEXTAUTH_URL` | NextAuth URL |

## 🐳 Docker Deployment

```bash
# Build image
docker build -t webbase .

# Run container
docker run -p 3000:3000 webbase

# Or use docker-compose
docker-compose up -d
```

## 📚 Documentation

- [Component Library](./src/components/README.md)
- [API Documentation](./docs/api.md)
- [Deployment Guide](./docs/deployment.md)

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.