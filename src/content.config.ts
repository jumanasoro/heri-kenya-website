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

// One Markdown file per story in src/content/news/. The file name is the URL:
// heri-wins-award.md -> /news/heri-wins-award/
const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      summary: z.string(),
      category: z.enum(['News', 'Event', 'Award', 'Update']),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      // Drafts are kept out of the website until set to false.
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects, news };
