// Reads content from HERI's WordPress (the headless CMS) at build time.
// WP_URL can point at the CMS once it moves (e.g. https://learn.heri-kenya.org).
const WP_URL = (import.meta.env.WP_URL ?? 'https://heri-kenya.org').replace(/\/$/, '');

export type WpPost = {
  id: number;
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  link: string;
};

// WordPress's default sample post; never show it.
const IGNORED_SLUGS = new Set(['hello-world']);

const decode = (html: string) =>
  html
    .replace(/<[^>]+>/g, '')
    .replace(/&#8217;|&#8216;/g, '’')
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&amp;|&#038;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/\[&hellip;\]|&hellip;/g, '…')
    .trim();

export async function getPosts(limit = 6): Promise<WpPost[]> {
  try {
    const res = await fetch(
      `${WP_URL}/wp-json/wp/v2/posts?per_page=${limit + IGNORED_SLUGS.size}&_fields=id,slug,date,title,excerpt,link`,
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const posts: { id: number; slug: string; date: string; title: { rendered: string }; excerpt: { rendered: string }; link: string }[] =
      await res.json();
    return posts
      .filter((p) => !IGNORED_SLUGS.has(p.slug))
      .slice(0, limit)
      .map((p) => ({
        id: p.id,
        slug: p.slug,
        date: p.date,
        title: decode(p.title.rendered),
        excerpt: decode(p.excerpt.rendered),
        link: p.link,
      }));
  } catch (err) {
    // A WordPress outage should never break the website build.
    console.warn(`[wordpress] Could not load posts from ${WP_URL}: ${(err as Error).message}`);
    return [];
  }
}
