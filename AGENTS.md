# AGENTS.md - Development Guide

## Build/Lint/Test Commands
- `npm run build` - Build the Next.js application and check for TypeScript errors
- `npm run dev` - Start development server on localhost:3000
- `npm run start` - Start production server
- `npm run postinstall` - Process MDX files with fumadocs-mdx (auto-runs after install)
- `npx tsc --noEmit` - Type check without building (no dedicated lint/test scripts available)

## Code Style Guidelines
- **TypeScript**: Strict mode enabled, explicit interface types, use `type` for unions/intersections
- **Imports**: External libraries first, then internal modules; use `@/*` path aliases for project files
- **Formatting**: Single quotes for strings, semicolons, trailing commas, 2-space indentation
- **Components**: PascalCase names, camelCase props, default exports for components
- **Files**: PascalCase for components (e.g., `ThemeAwareLogo.tsx`), kebab-case for other files
- **Client Components**: Always add `"use client"` directive when using React hooks or browser APIs
- **Error Handling**: Handle hydration mismatches with mounted state, loading states for async operations
- **Styling**: Use Tailwind CSS classes, template literals for conditional classes
- **Props**: Define explicit TypeScript interfaces for all component props with optional chaining

## Key Technologies
- **Framework**: Next.js 15 with App Router, React 19, TypeScript 5.8
- **Documentation**: Fumadocs for MDX processing and UI components
- **Styling**: Tailwind CSS 4.0 with PostCSS
- **Fonts**: Next.js font optimization with Inter

## Project Structure
- `app/` - Next.js App Router pages, layouts, and API routes
- `components/` - Reusable React components (client/server)
- `content/docs/` - MDX documentation organized by project sections
- `lib/` - Utility functions and source configurations