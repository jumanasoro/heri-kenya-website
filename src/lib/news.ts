// News stories: Markdown files in src/content/news, plus any posts published in WordPress.
import { getCollection, type CollectionEntry } from 'astro:content';
import type { ImageMetadata } from 'astro';
import { getPosts } from './wordpress';

export type NewsItem = {
  title: string;
  date: Date;
  summary: string;
  category: CollectionEntry<'news'>['data']['category'];
  href: string;
  external: boolean;
  cover?: ImageMetadata;
  coverAlt?: string;
};

export const newsHref = (id: string) => `/news/${id}/`;

export async function getNewsEntries() {
  return (await getCollection('news', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );
}

export async function getAllNews(): Promise<NewsItem[]> {
  const local: NewsItem[] = (await getNewsEntries()).map((e) => ({
    title: e.data.title,
    date: e.data.date,
    summary: e.data.summary,
    category: e.data.category,
    href: newsHref(e.id),
    external: false,
    cover: e.data.cover,
    coverAlt: e.data.coverAlt,
  }));
  const wp: NewsItem[] = (await getPosts(12)).map((p) => ({
    title: p.title,
    date: new Date(p.date),
    summary: p.excerpt,
    category: 'News',
    href: p.link,
    external: true,
  }));
  return [...local, ...wp].sort((a, b) => b.date.getTime() - a.date.getTime());
}

export const formatDate = (d: Date) =>
  new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
