// Shared site content. Edit text here and it updates everywhere it is used.
import type { ImageMetadata } from 'astro';

import stanford from '../assets/images/partners/Stanford.png';
import nema from '../assets/images/partners/NEMA-1.jpg';
import kwale from '../assets/images/partners/Kwale-County.jpg';
import dtw from '../assets/images/partners/DTW.png';
import samba from '../assets/images/partners/Samba-Sports.png';
import dybc from '../assets/images/partners/DYBC.jpg';
import gyfc from '../assets/images/partners/GYFC.png';

export const site = {
  name: 'HERI-Kenya',
  fullName: 'Health + Environmental Research Institute – Kenya',
  tagline: 'Science-driven action for healthier communities and resilient environments.',
  description:
    'HERI-Kenya is a non-profit in Diani, Kenya, bridging research, community action and policy to improve health, protect the environment and turn waste into opportunity.',
  founded: 2021,
  location: 'Diani, Kwale County, Kenya',
  mission: 'To inspire collective action toward healthier communities and resilient environments.',
  vision: 'An environmentally conscious community thriving in health and sustainable living.',
};

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: 'Our Work', href: '/projects/' },
  { label: 'BSF Farm', href: '/projects/heri-black-soldier-fly-farm/' },
  { label: 'Learn', href: '/learn/' },
  { label: 'Research', href: '/research/' },
  { label: 'About', href: '/about-us/' },
  { label: 'News', href: '/news/' },
  { label: 'Get Involved', href: '/contact-us/' },
];

// Donate buttons go straight to HERI's Social Good Fund campaign (opened in a new tab).
export const donateHref = 'https://give.socialgoodfund.org/52imR8?ref=ab_5sjm4pVIUtX5sjm4pVIUtX';
// The Support Us page lists every way to give, including M-Pesa and bank transfer.
export const supportHref = '/support/';
// Spread onto links that leave the site: <a href={donateHref} {...externalLink}>.
export const externalLink = { target: '_blank', rel: 'noopener' } as const;

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: '15,000', label: 'Trees planted' },
  { value: '6,000', label: 'Community members reached' },
  { value: '10 tonnes', label: 'Organic waste processed' },
  { value: '150', label: 'Community service providers trained' },
  { value: '200+', label: 'Publications by our research leads' },
  { value: '35+', label: 'Internships' },
  { value: '100', label: 'Short-term jobs created' },
  { value: '10', label: 'Events & conferences' },
];

export type Audience = {
  key: string;
  title: string;
  intro: string;
  points: string[];
  cta: NavItem;
};

export const audiences: Audience[] = [
  {
    key: 'donors',
    title: 'For donors',
    intro: 'Fund proven, measurable work on Kenya’s coast.',
    points: [
      'Scale our Black Soldier Fly waste solution',
      'Train community health and environment champions',
      'Every gift tracked against real outcomes',
    ],
    cta: { label: 'Support our work', href: donateHref },
  },
  {
    key: 'partners',
    title: 'For partners',
    intro: 'Hotels, businesses, researchers and government working together.',
    points: [
      'Tailored CSR packages',
      'Research collaborations and field studies',
      'Organic waste collection for hotels',
    ],
    cta: { label: 'Partner with us', href: '/partnerships-csr/' },
  },
  {
    key: 'communities',
    title: 'For communities',
    intro: 'Practical skills for healthier homes and a cleaner Diani.',
    points: [
      'Online courses with certificates',
      'Community forums and school eco-clubs',
      'Visit the BSF farm and learning centre',
    ],
    cta: { label: 'Start learning', href: '/learn/' },
  },
];

export type Testimonial = { quote: string; name: string; role: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      'Before attending the HERI community forum, I didn’t fully understand how our daily activities affect our environment and health. Today, I feel more empowered to take care of my family and my community.',
    name: 'Aisha Khamis',
    role: 'Community member',
  },
  {
    quote:
      'Partnering with HERI has allowed us to reach more people with sustainable solutions. Their grassroots approach connects science and community action in a way that is practical.',
    name: 'Mwinyi Chiboga',
    role: 'Chair, Gombato Youth for Change',
  },
  {
    quote:
      'Working with HERI has strengthened our shared mission to make Diani cleaner and greener. Together, we’ve planted trees, engaged youth, and inspired the community to take ownership of our environment.',
    name: 'Khalifa Mwarangi',
    role: 'Chair, Diani Beach Youth Cleaning',
  },
];

export type Partner = { name: string; logo: ImageMetadata };

export const partners: Partner[] = [
  { name: 'Stanford University', logo: stanford },
  { name: 'National Environment Management Authority (NEMA)', logo: nema },
  { name: 'County Government of Kwale', logo: kwale },
  { name: 'Diani Turtle Watch', logo: dtw },
  { name: 'Samba Sports', logo: samba },
  { name: 'Diani Beach Youth Cleaning', logo: dybc },
  { name: 'Gombato Youth for Change', logo: gyfc },
];

export const contact = {
  email: 'info@heri-kenya.org',
  phone: '+254 792 416 168',
  address: 'Diani, Kwale County, Kenya',
};
