// People shown on the About page. Photos live in src/assets/images/team/.
import type { ImageMetadata } from 'astro';

import bryson from '../assets/images/team/bryson-ndenga.jpeg';
import desiree from '../assets/images/team/desiree-labeaud.jpg';
import francis from '../assets/images/team/francis-mutuku.jpg';
import randi from '../assets/images/team/randi-shafton.jpg';
import cosmas from '../assets/images/team/cosmas-munga.jpg';
import jeff from '../assets/images/team/jeff-chow.webp';
import charles from '../assets/images/team/charles-mbogo.jpg';
import violet from '../assets/images/team/violet-saena.jpg';
import bonnie from '../assets/images/team/bonnie-mbithi.jpg';
import juma from '../assets/images/team/juma-nasoro.jpg';
import betty from '../assets/images/team/betty-ngosi.jpeg';
import agnes from '../assets/images/team/agnes-kasyoka.jpg';
import said from '../assets/images/team/said-lipi.jpg';
import christine from '../assets/images/team/christine-lucas.jpg';
import beatrice from '../assets/images/team/beatrice-wandili.jpg';
import riziki from '../assets/images/team/riziki-jasso.jpeg';
import peter from '../assets/images/team/peter-siema.jpeg';

export type Person = {
  name: string;
  role: string;
  photo?: ImageMetadata;
  // CSS object-position for photos where the face isn't centred (e.g. tall portraits).
  focus?: string;
  bio?: string;
};

export const founders: Person[] = [
  {
    name: 'Prof. Desiree LaBeaud',
    role: 'Co-Founder & Executive Director · Stanford University',
    photo: desiree,
    bio: 'A pediatric infectious disease specialist and epidemiologist — one of the few pediatric arbovirologists in the world — researching how climate change affects arboviral diseases, especially among mothers and children.',
  },
  {
    name: 'Prof. Francis Mutuku',
    role: 'Co-Founder & Chairman · Technical University of Mombasa',
    photo: francis,
    bio: 'Associate Professor of Public Health with twenty years of experience studying the biology and ecology of malaria vectors.',
  },
  {
    name: 'Dr. Bryson Ndenga',
    role: 'Co-Founder · Kenya Medical Research Institute',
    photo: bryson,
    bio: 'Research officer at KEMRI’s Center for Global Health Research in Kisumu, with experience in the larval and adult ecology of mosquitoes in western Kenya.',
  },
];

export const advisers: Person[] = [
  { name: 'Randi Shafton', role: 'Board of Advisers', photo: randi },
  { name: 'Prof. Cosmas Munga', role: 'Board of Advisers', photo: cosmas },
  { name: 'Jeff Chow', role: 'Board of Advisers', photo: jeff },
  { name: 'Prof. Charles Mbogo', role: 'Board of Advisers', photo: charles },
  { name: 'Violet Saena', role: 'Board of Advisers', photo: violet },
  { name: 'Bonnie Mbithi', role: 'Board of Advisers', photo: bonnie },
];

export const staff: Person[] = [
  { name: 'Juma Nasoro', role: 'Program Manager', photo: juma },
  { name: 'Betty Ngosi', role: 'Communications Lead', photo: betty },
  { name: 'Agnes Kasyoka', role: 'BSF Farm Manager', photo: agnes, focus: 'center 15%' },
  { name: 'Christine Lucas', role: 'Administrator', photo: christine },
  { name: 'Beatrice Wandili', role: 'BSF Farm Operations', photo: beatrice, focus: 'center 15%' },
  { name: 'Said Lipi', role: 'Management Committee', photo: said },
  { name: 'Riziki Jasso', role: 'Management Committee', photo: riziki },
  { name: 'Peter Siema', role: 'Management Committee', photo: peter },
];
