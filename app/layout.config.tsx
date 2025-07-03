import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import ThemeAwareLogo from '@/components/ThemeAwareLogo';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <ThemeAwareLogo width={140} height={24} />
      </>
    )
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
    {
      text: 'API',
      url: 'https://off.apidocumentation.com/version-2/reference',
      external: true,
    },
    {
      text: 'Website',
      url: 'https://world.openfoodfacts.org/',
      external: true,
    },
  ],
};