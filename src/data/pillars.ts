// HERI-Kenya's four core pillars: the homepage cards and the pillar pages (/pillars/<slug>/).
// DRAFT TEXT: `summary`, `intro` and `focus` are placeholders — replace them with HERI's own wording.
import type { ImageMetadata } from 'astro';

import bsfBeds from '../assets/images/bsf/bsf-tours-2.jpg';
import beachEvent from '../assets/images/media/activity-20250608.jpg';
import members from '../assets/images/media/heri-members.jpg';
import lab from '../assets/images/home/research.png';

export type Pillar = {
  slug: string;
  title: string;
  image: ImageMetadata;
  imageAlt: string;
  summary: string; // one sentence for the homepage card
  intro: string; // opening paragraph on the pillar page
  focus: string[]; // "What this pillar covers"
  projects: string[]; // project file names in src/content/projects/
  related?: { label: string; href: string; text: string }[];
  // When set, the card links here instead of a pillar page (Research has its own page).
  href?: string;
};

export const pillars: Pillar[] = [
  {
    slug: 'circular-economy',
    title: 'Circular Economy',
    image: bsfBeds,
    imageAlt: 'A HERI guide explains the Black Soldier Fly larvae beds to visitors',
    summary: 'Turning organic waste into compost and protein-rich animal feed through our Black Soldier Fly Farm.',
    intro:
      'Organic waste is the largest share of solid waste in Kenya’s growing towns. We treat it as a resource: our Black Soldier Fly Farm turns food waste from hotels, markets and homes into animal feed and organic fertiliser, and we help businesses and communities adopt the same model.',
    focus: [
      'Black Soldier Fly farming and organic waste treatment',
      'Waste separation at source with hotels and businesses',
      'Compost (frass) and insect protein value chains',
      'Green livelihoods for youth and women',
    ],
    projects: ['heri-black-soldier-fly-farm', 'diani-sustainability-collective'],
    related: [
      {
        label: 'Take the virtual farm tour',
        href: '/projects/heri-black-soldier-fly-farm/tour/',
        text: 'Follow waste from the kitchen to feed and fertiliser.',
      },
      { label: 'Book an eco-tour', href: '/learning-eco-tours/', text: 'See the farm in person in Diani.' },
    ],
  },
  {
    slug: 'capacity-development-awareness',
    title: 'Capacity Development & Awareness',
    image: beachEvent,
    imageAlt: 'School pupils take part in a HERI environmental event on the beach in Diani',
    summary: 'Training, school eco-clubs and community forums that build skills and knowledge for healthier living.',
    intro:
      'Lasting change starts with knowledge people can use. Through school eco-clubs, community forums, clean-ups and training, we help children, families and local practitioners understand health and environmental risks — and act on them.',
    focus: [
      'School eco-clubs with mentors from health and environment fields',
      'Community education and awareness forums',
      'Training for community service providers',
      'Tree planting, clean-ups and public awareness campaigns',
    ],
    projects: ['heri-school-eco-clubs', 'heri-community-forums', 'heri-eco-action', 'heri-hub-capacity-building'],
    related: [
      { label: 'HERI Learning', href: '/learn/', text: 'Online courses with certificates — launching soon.' },
      { label: 'Learning & eco-tours', href: '/learning-eco-tours/', text: 'Hands-on learning at the BSF Farm.' },
    ],
  },
  {
    slug: 'women-community-empowerment',
    title: 'Women & Community Empowerment',
    image: members,
    imageAlt: 'HERI-Kenya members, many of them women, gathered together in HERI T-shirts',
    summary: 'Creating leadership, livelihoods and a stronger voice for women, youth and local communities.',
    intro:
      'Communities are partners in our work, not just participants. We open leadership and livelihood opportunities for women and youth, support grassroots groups, and connect local action to people and resources around the world.',
    focus: [
      'Mentorship and leadership for women (GLOW)',
      'Support for youth and women-led grassroots groups',
      'Green livelihood opportunities',
      'A global network of HERI ambassadors and champions',
    ],
    projects: [
      'gender-leadership-for-our-world-glow',
      'heri-sustainability-champions-ambassadors',
      'diani-sustainability-collective',
    ],
    related: [{ label: 'Get involved', href: '/contact-us/', text: 'Join as a member, volunteer, ambassador or intern.' }],
  },
  {
    slug: 'research',
    title: 'Research',
    image: lab,
    imageAlt: 'Researchers handle samples together in a laboratory',
    summary: 'Evidence on environmental health, disease and waste that guides every intervention and informs policy.',
    intro: '',
    focus: [],
    projects: [],
    href: '/research/',
  },
];

export const pillarHref = (p: Pillar) => p.href ?? `/pillars/${p.slug}/`;
