import { defineDocs, defineConfig } from 'fumadocs-mdx/config';
import { rehypeCode } from 'fumadocs-core/mdx-plugins';

export const docs = defineDocs({
  dir: 'content/docs',
});

export default defineConfig({
  mdxOptions: {
    rehypePlugins: [
      [rehypeCode, {
        // Optional: Configure themes
        themes: {
          light: 'github-light',
          dark: 'github-dark',
        },
        // Optional: Configure languages (defaults include common ones)
        langs: ['javascript', 'typescript', 'jsx', 'tsx', 'json', 'bash', 'shell', 'python', 'perl', 'ini', 'yaml', 'markdown'],
        // Optional: Enable inline code highlighting
        inline: 'tailing-curly-colon',
      }],
    ],
  },
});
