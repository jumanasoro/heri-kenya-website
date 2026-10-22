// The HERI@5 fundraising gala. Leave a field as null until it is confirmed:
// the website then shows "To be announced" instead of guessing.
import type { ImageMetadata } from 'astro';
import galaImage from '../assets/images/home/conference-2022.jpeg';

export type Gala = {
  title: string;
  tagline: string;
  date: string; // ISO date, used for the countdown
  dateLabel: string;
  time: string | null;
  venue: string | null;
  dressCode: string | null;
  tickets: string | null; // e.g. 'KES 5,000 per seat · KES 50,000 per table of 10'
  ticketLink: string | null; // external ticketing page, if any
  intro: string;
  supports: string[];
  programme: { time: string; item: string }[] | null;
  image: ImageMetadata;
  imageAlt: string;
  // The site-wide banner and homepage feature hide automatically after this date.
  showUntil: string;
};

export const gala: Gala = {
  title: 'HERI@5 Annual Fundraising Gala',
  tagline: 'Celebrating five years of healthier environments and communities',
  date: '2026-12-12',
  dateLabel: 'Saturday, 12 December 2026',
  time: null, // TODO: start time
  venue: null, // TODO: venue name and town
  dressCode: null,
  tickets: null, // TODO: ticket prices
  ticketLink: null,
  intro:
    'Join HERI-Kenya, our partners and supporters for an evening celebrating five years of science-driven community impact on Kenya’s coast — and help us raise the funds to scale our work for the next five.',
  supports: [
    'Expanding the Black Soldier Fly Farm’s waste processing capacity',
    'Building a sustainability training and research hub',
    'Growing green livelihood programmes for youth and women',
    'Strengthening HERI’s capacity to reach more communities',
  ],
  programme: null, // TODO: evening programme
  image: galaImage,
  imageAlt: 'HERI-Kenya members, partners and guests gathered at a past HERI event',
  showUntil: '2026-12-13',
};

export const galaHref = '/gala/';
