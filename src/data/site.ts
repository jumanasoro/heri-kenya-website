// Shared site content. Edit text here and it updates everywhere it is used.
import type { ImageMetadata } from 'astro';

import bsfTours from '../assets/images/bsf/bsf-tours-1.jpg';
import treePlanting from '../assets/images/home/tree-planting.jpg';
import communityForum from '../assets/images/home/community-forum.jpg';
import ecoTourVisitors from '../assets/images/home/eco-tour-visitors.jpg';
import hotelPartners from '../assets/images/home/hotel-partners-organic-waste.jpg';
import research from '../assets/images/home/research.png';

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
  { label: 'Get Involved', href: '/contact-us/' },
];

export const donateHref = '/support/';

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: '15,000', label: 'Trees planted' },
  { value: '5,000', label: 'Community members reached' },
  { value: '10 t', label: 'Organic waste processed' },
  { value: '150', label: 'Community service providers trained' },
  { value: '200+', label: 'Research publications' },
  { value: '35+', label: 'Internships' },
  { value: '100', label: 'Period jobs created' },
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
    cta: { label: 'Support our work', href: '/support/' },
  },
  {
    key: 'partners',
    title: 'For partners',
    intro: 'Hotels, businesses, researchers and government working together.',
    points: [
      'Tailored CSR packages for Diani businesses',
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
      'Free online courses and certificates',
      'Community forums and school eco-clubs',
      'Visit the BSF farm and learning centre',
    ],
    cta: { label: 'Start learning', href: '/learn/' },
  },
];

export type Project = {
  title: string;
  slug: string;
  summary: string;
  image?: ImageMetadata;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Black Soldier Fly Farm',
    slug: 'heri-black-soldier-fly-farm',
    summary:
      'Turning organic waste from an environmental health risk into compost and protein-rich animal feed — a live demonstration and training site in Diani.',
    image: bsfTours,
    featured: true,
  },
  {
    title: 'Research',
    slug: 'research',
    summary:
      'Assessments, surveys and applied studies that make every intervention relevant, ethical and effective.',
    image: research,
    featured: true,
  },
  {
    title: 'Community Education Forums',
    slug: 'heri-community-forums',
    summary:
      'Spaces for dialogue and action where community experience shapes shared solutions to health and environmental issues.',
    image: communityForum,
    featured: true,
  },
  {
    title: 'School Eco-Clubs',
    slug: 'heri-school-eco-clubs',
    summary:
      'Students turning environmental knowledge into everyday action through tree planting, waste management and climate education.',
    image: treePlanting,
    featured: true,
  },
  {
    title: 'Diani Sustainability Collective',
    slug: 'diani-sustainability-collective',
    summary:
      'Hotels, businesses, conservation groups and communities aligning on shared local challenges for greater impact.',
    image: hotelPartners,
    featured: true,
  },
  {
    title: 'Sustainability Champions & Ambassadors',
    slug: 'heri-sustainability-champions-ambassadors',
    summary:
      'A global network raising awareness, influencing policy and mobilising resources for HERI’s mission.',
    image: ecoTourVisitors,
    featured: true,
  },
  {
    title: 'Gender Leadership for Our World (GLOW)',
    slug: 'gender-leadership-for-our-world-glow',
    summary:
      'Mentorship and opportunities for women leaders driving change in health and environment across Kenya.',
  },
  {
    title: 'HERI Eco-Action',
    slug: 'heri-eco-action',
    summary: 'Tree planting and coastal clean-ups that restore habitats and unite people in collective climate action.',
  },
  {
    title: 'Sea Change – Plastic Planet',
    slug: 'heri-hub-capacity-building',
    summary: 'Tackling plastic pollution on the Kenyan coast through education, clean-ups and better waste systems.',
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
  { name: 'DTW', logo: dtw },
  { name: 'Samba Sports', logo: samba },
  { name: 'Diani Beach Youth Cleaning', logo: dybc },
  { name: 'Gombato Youth for Change', logo: gyfc },
];

export const contact = {
  email: 'info@heri-kenya.org',
  phone: '+254 792 416 168',
  address: 'Diani, Kwale County, Kenya',
};
