import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per project in src/content/projects/. The file name is the URL:
// heri-school-eco-clubs.md -> /projects/heri-school-eco-clubs/
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      order: z.number(),
      category: z.enum(['Circular economy', 'Education', 'Community', 'Partnerships', 'Leadership', 'Awareness']),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      highlights: z.array(z.object({ title: z.string(), text: z.string() })).optional(),
      // How partners and donors can get involved, shown as a call-to-action panel.
      getInvolved: z.array(z.string()).optional(),
      status: z.enum(['active', 'completed']).default('active'),
    }),
});

export const collections = { projects };
