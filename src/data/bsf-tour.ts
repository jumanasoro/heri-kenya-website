// Stops on the BSF Farm virtual tour, in walking order.
// To upgrade a stop to 360° later, add its panorama photo to the stop (planned `pano` field)
// and the tour page will offer a "look around" view for it.
import type { ImageMetadata } from 'astro';

import shelter from '../assets/images/bsf/bsf-tour-3.jpg';
import hotelWaste from '../assets/images/home/hotel-partners-organic-waste.jpg';
import larvaeBed from '../assets/images/bsf/bsf-tours-2.jpg';
import larvaeTrays from '../assets/images/bsf/bsf-tours-1.jpg';
import frassBed from '../assets/images/bsf/bsf-tour-7.jpg';
import team from '../assets/images/bsf/bsf-tour-6.jpg';

export type TourStop = {
  id: string;
  label: string; // short name for the stop list
  title: string;
  image?: ImageMetadata;
  imageAlt?: string;
  // Small source photos are shown at a modest size so they don't look blurry.
  imageSmall?: boolean;
  lifecycle?: boolean; // show the life-cycle diagram instead of a photo
  paragraphs: string[];
  facts: string[];
};

export const tourStops: TourStop[] = [
  {
    id: 'welcome',
    label: 'Welcome',
    title: 'Welcome to the HERI BSF Farm',
    image: shelter,
    imageAlt: 'The shaded learning shelter where tours begin at the HERI BSF Farm',
    imageSmall: true,
    paragraphs: [
      'You are in Diani, one of Kenya’s busiest tourism and hospitality hubs. All those hotels, restaurants, markets and homes produce a lot of food waste — and most of it has nowhere good to go.',
      'This farm is HERI’s answer: a working demonstration site, training hub and community resource centre where organic waste is turned into useful products. Tours start here, at the learning shelter.',
    ],
    facts: ['Live demonstration site', 'Training hub for youth and women', 'Open to visitors on weekdays and Saturdays'],
  },
  {
    id: 'waste',
    label: 'Where waste comes from',
    title: 'Stop 1 · Where the waste comes from',
    image: hotelWaste,
    imageAlt: 'Hotel kitchen staff hold an "Organic waste only" sign for the HERI BSF Farm',
    paragraphs: [
      'Partner hotels and businesses separate their food waste in the kitchen, using HERI “Organic waste only” bins. Clean, sorted waste is the single most important ingredient for the larvae.',
      'Without this, the same waste would rot at dumpsites — attracting flies and rats, polluting water and releasing greenhouse gases.',
    ],
    facts: [
      'Organic waste is the largest share of solid waste in growing towns',
      'Sorting at source keeps plastics and glass out',
      'Hygiene and safe handling are taught at every step',
    ],
  },
  {
    id: 'lifecycle',
    label: 'Meet the fly',
    title: 'Stop 2 · Meet the Black Soldier Fly',
    lifecycle: true,
    paragraphs: [
      'The Black Soldier Fly (Hermetia illucens) is not a pest. Adult flies do not eat, bite or sting — they live for about a week, simply to mate and lay eggs.',
      'All the work happens in the larval stage. The larvae are hungry eaters of organic waste, and they grow fast. When they are ready to become flies they stop eating and crawl away to pupate, completing the cycle.',
    ],
    facts: ['Adults do not feed and are not known to spread disease', 'Larvae feed for about two weeks', 'One full cycle takes roughly six weeks'],
  },
  {
    id: 'beds',
    label: 'Larvae beds',
    title: 'Stop 3 · The larvae beds',
    image: larvaeBed,
    imageAlt: 'A HERI guide explains the larvae beds to a group of visitors under the farm shade',
    paragraphs: [
      'Sorted waste goes into these lined beds, where thousands of larvae get to work. They break the waste down quickly, cutting its volume within days.',
      'Our team monitors the beds every day — moisture, temperature and how much waste is added — and records the data for our research.',
    ],
    facts: ['Waste is reduced within days, not months', 'Low emissions compared with dumping', 'Real-time data feeds HERI research'],
  },
  {
    id: 'harvest',
    label: 'Harvest',
    title: 'Stop 4 · Harvesting the larvae',
    image: larvaeTrays,
    imageAlt: 'Visitors examine trays of larvae and frass, separated for harvesting',
    paragraphs: [
      'When the larvae are fully grown they are separated from what is left of the waste. Harvested larvae are packed with protein and fat.',
      'They become feed for poultry, fish and pigs — a local alternative to costly imported feeds like fishmeal and soya.',
    ],
    facts: ['Protein-rich animal and aquaculture feed', 'Cuts feed costs for local farmers', 'Creates income opportunities'],
  },
  {
    id: 'frass',
    label: 'Frass compost',
    title: 'Stop 5 · Frass: organic fertiliser',
    image: frassBed,
    imageAlt: 'A visitor rakes through a bed of dark, crumbly frass compost',
    paragraphs: [
      'What the larvae leave behind is called frass — a dark, crumbly organic fertiliser. After curing, it is used to improve soil health in farms, gardens and landscaping.',
      'Nothing is wasted: the food that would have polluted Diani returns to the soil.',
    ],
    facts: ['Improves soil structure and fertility', 'Used in agriculture and landscaping', 'Closes the nutrient loop'],
  },
  {
    id: 'people',
    label: 'The people',
    title: 'Stop 6 · The people behind the farm',
    image: team,
    imageAlt: 'The HERI BSF Farm team with visitors in front of the larvae trays',
    imageSmall: true,
    paragraphs: [
      'The farm runs on people: our farm team, youth and women trainees, students, researchers and visitors from around the world.',
      'Here they learn skills they can take home — from setting up a small BSF unit to running a waste business. The model is designed to be copied in other towns and institutions.',
    ],
    facts: ['Community and institutional trainings', 'Youth and women capacity building', 'Applied research and field studies'],
  },
];

export const lifecycleStages = [
  { name: 'Eggs', time: 'about 4 days' },
  { name: 'Larvae', time: 'about 2 weeks of eating waste' },
  { name: 'Prepupae', time: 'stop eating and crawl out' },
  { name: 'Pupae', time: 'about 2 weeks' },
  { name: 'Adult flies', time: 'about 1 week — mate and lay eggs' },
];
