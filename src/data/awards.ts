// Awards and recognition shown on the homepage, newest first within each kind.
// Certificate images are in src/assets/images/awards/ (handwritten signatures blurred).
import type { ImageMetadata } from 'astro';

import africaCircular from '../assets/images/awards/africa-circular-excellence-2026.jpg';
import bahariYetu from '../assets/images/awards/bahari-yetu-festival-2026.jpg';
import seaTurtle from '../assets/images/awards/diani-sea-turtle-festival-2026.jpg';
import zeroPlastic from '../assets/images/awards/diani-zero-plastic-festival-2026.jpg';

export type Award = {
  kind: 'award' | 'participation';
  title: string;
  event: string;
  awardedBy: string;
  date: string;
  place: string;
  image: ImageMetadata;
  imageAlt: string;
};

export const awards: Award[] = [
  {
    kind: 'award',
    title: 'Awareness & Advocacy Excellence Award',
    event: '2nd Africa Circular Excellence Awards, 6th Africa International E-Waste Conference',
    awardedBy: 'WEEE Centre',
    date: '16 October 2026',
    place: 'Diani',
    image: africaCircular,
    imageAlt:
      'Certificate of Excellence from WEEE Centre presented to HERI-Kenya for the Awareness & Advocacy Excellence Award at the 2nd Africa Circular Excellence Awards',
  },
  {
    kind: 'participation',
    title: 'Bahari Yetu Festival',
    event: 'Our Ocean, Our Responsibility: every step counts against plastic pollution',
    awardedBy: 'COASTED, with WeWorld, Barnfonden and CRAWN Trust',
    date: '26 September 2026',
    place: 'Regatta Beach, Galu',
    image: bahariYetu,
    imageAlt:
      'Certificate of Participation presented to HERI-Kenya for taking part in the Bahari Yetu Festival and its commitment to protecting the ocean and environment',
  },
  {
    kind: 'participation',
    title: 'Diani Sea Turtle Festival',
    event: '2026 Diani Sea Turtle Festival',
    awardedBy: 'Olive Ridley Project-Kenya',
    date: '2026',
    place: 'Diani Beach',
    image: seaTurtle,
    imageAlt: 'Certificate thanking HERI-Kenya for being part of the 2026 Diani Sea Turtle Festival',
  },
  {
    kind: 'participation',
    title: 'Diani Beach Zero Plastic Pollution Festival',
    event: '3rd annual festival',
    awardedBy: 'SambaSports Youth Trust, with KMFRI and the County Government of Kwale',
    date: '6–8 June 2026',
    place: 'Kongo Beach, Diani',
    image: zeroPlastic,
    imageAlt:
      'Certificate of Participation presented to HERI-Kenya for the 3rd Diani Beach Zero Plastic Pollution Festival 2026',
  },
];
