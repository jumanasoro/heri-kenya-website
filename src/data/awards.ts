// Awards and recognition shown on the homepage.
// PLACEHOLDERS: replace each entry with a real award (name, who gave it, year, short note).
// Set `placeholder: false` (or remove the line) once an entry is real; placeholder entries show a
// "Details coming soon" label so nothing is presented as a real award by mistake.
export type Award = {
  title: string;
  awardedBy: string;
  year: string;
  note?: string;
  link?: string;
  placeholder?: boolean;
};

export const awards: Award[] = [
  { title: 'Award name', awardedBy: 'Awarding organisation', year: 'Year', placeholder: true },
  { title: 'Award name', awardedBy: 'Awarding organisation', year: 'Year', placeholder: true },
  { title: 'Award name', awardedBy: 'Awarding organisation', year: 'Year', placeholder: true },
];
