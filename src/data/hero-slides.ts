// Photos for the homepage hero slideshow, in the order they appear.
// `focus` is the CSS object-position that keeps the important part of the photo in view.
import type { ImageMetadata } from 'astro';

import forum from '../assets/images/home/community-forum.jpg';
import bsf from '../assets/images/bsf/bsf-tours-2.jpg';
import beach from '../assets/images/media/activity-20250608.jpg';
import trees from '../assets/images/home/tree-planting.jpg';
import members from '../assets/images/media/heri-members.jpg';
import outreach from '../assets/images/media/outreach-stand.webp';

export type HeroSlide = { image: ImageMetadata; alt: string; caption: string; focus?: string };

export const heroSlides: HeroSlide[] = [
  {
    image: forum,
    alt: 'A HERI facilitator leads a community education forum under a large shade tree in Diani',
    caption: 'Community education forum, Diani',
    focus: 'center 40%',
  },
  {
    image: bsf,
    alt: 'A HERI guide explains the Black Soldier Fly larvae beds to a group of visitors',
    caption: 'Guided learning at the BSF Farm',
    focus: 'center 40%',
  },
  {
    image: outreach,
    alt: 'A HERI team member in a yellow T-shirt shows visitors products at an outreach stand',
    caption: 'Sharing our work with visitors',
    focus: 'center 35%',
  },
  {
    image: beach,
    alt: 'School pupils take part in a HERI environmental event on the beach in Diani',
    caption: 'School pupils at a beach environmental event, Diani',
    focus: 'center 60%',
  },
  {
    image: trees,
    alt: 'A HERI eco-club member holds up a tree seedling ready for planting',
    caption: 'Tree planting with HERI eco-clubs',
    focus: 'center 30%',
  },
  {
    image: members,
    alt: 'HERI-Kenya members and staff gathered together in HERI T-shirts',
    caption: 'The HERI-Kenya community',
    focus: 'center 35%',
  },
];
