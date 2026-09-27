export type Milestone = {
  date: string;
  title: string;
  team: string;
  done?: boolean;
};

// Planned dates from the Fall 2026 club outlook and subteam design reviews.
export const milestones: Milestone[] = [
  { date: 'Sep 17, 2026', title: 'Discharge Chamber · System Requirements Review', team: 'Discharge Chamber', done: true },
  { date: 'Oct 17, 2026', title: 'Discharge Chamber · Preliminary Design Review', team: 'Discharge Chamber' },
  { date: 'Fall 2026', title: 'Ion Optics · Preliminary → Critical Design Review', team: 'Ion Optics' },
  { date: 'Nov 19, 2026', title: 'Discharge Chamber · Critical Design Review', team: 'Discharge Chamber' },
  { date: 'Jan 2027', title: 'Discharge Chamber build, test, and verification begins', team: 'Discharge Chamber' },
  { date: 'Spring 2027', title: 'IEPC 2027 abstract', team: 'Club-wide' },
  { date: 'Apr 9–10, 2027', title: 'Engineering Open House', team: 'Club-wide' },
  { date: 'Apr 28–29, 2027', title: 'Undergraduate Research Symposium · ion-kinetics paper', team: 'Scientific Visualization' },
];
