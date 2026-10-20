// Ways to give. Leave a value as null until it is confirmed — the Support page then shows
// "details coming soon" for that method instead of publishing anything wrong.

export type GivingMethod = {
  id: string;
  name: string;
  bestFor: string;
  // Label/value pairs shown to donors, e.g. { label: 'Paybill', value: '123456' }.
  details: { label: string; value: string }[] | null;
  // External donation page (PayPal, Social Good Fund, etc.).
  link: { label: string; href: string } | null;
  note?: string;
};

export const givingMethods: GivingMethod[] = [
  {
    id: 'mpesa',
    name: 'M-Pesa',
    bestFor: 'Donors in Kenya',
    details: null, // TODO: Paybill or Till number and account name
    link: null,
  },
  {
    id: 'bank',
    name: 'Bank transfer',
    bestFor: 'Larger gifts, foundations and businesses',
    details: null, // TODO: bank, account name, account number, branch, SWIFT code
    link: null,
  },
  {
    id: 'paypal',
    name: 'PayPal or card',
    bestFor: 'International donors paying by card or PayPal',
    details: null,
    link: null, // TODO: PayPal donate link
  },
  {
    id: 'sgf',
    name: 'Social Good Fund',
    bestFor: 'Donors in the United States, and anyone giving by card in US dollars',
    details: null,
    link: { label: 'Give via Social Good Fund', href: 'https://give.socialgoodfund.org/52imR8' },
    note: 'Social Good Fund is a US non-profit. Ask them about tax receipts for your gift.',
  },
];

export const giftImpact = [
  {
    title: 'Process more waste',
    text: 'Expand the BSF Farm so more of Diani’s food waste becomes feed and fertiliser instead of pollution.',
  },
  {
    title: 'Train community champions',
    text: 'Equip youth, women and community service providers with skills in waste management and environmental health.',
  },
  {
    title: 'Grow eco-clubs',
    text: 'Bring hands-on environmental learning and mentors to more schools on the coast.',
  },
  {
    title: 'Generate evidence',
    text: 'Fund the research that shows what works, so it can be scaled and inform policy.',
  },
];
