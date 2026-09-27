export type Work = {
  title: string;
  kind: 'Poster' | 'Talk' | 'Presentation' | 'Paper' | 'Reference';
  venue: string;
  date: string;
  authors?: string;
  summary: string;
  status?: 'In progress';
};

export const works: Work[] = [
  {
    title: 'Ion kinetics (stepwise ionization) simulation',
    kind: 'Paper',
    venue: 'Targeting EOH & Undergraduate Research Symposium 2027',
    date: '2026–27',
    authors: 'ION-I Scientific Visualization',
    summary:
      'A team paper on simulating electron-impact excitation and stepwise ionization of argon in the IonSpark hollow cathode, building on the Python stepwise-ionization solver and field-emission models.',
    status: 'In progress',
  },
  {
    title: 'Material Effects on Electron Emission in a Hollow Cathode',
    kind: 'Poster',
    venue: 'Research poster, Engineering Open House',
    date: 'Spring 2026',
    authors:
      'A. Arunachalam, S. Rojas Barragán, T. Kanagy, A. Arutchev, U. Paul, C. Kim, J. Choi, R. Luo, Y. Qu, H. Darlage, Y. Soydan, J. Gonzalez',
    summary:
      'Compared tungsten, copper, and aluminum emitter pins by measured electron current (Faraday cup, 3.5–4.0 Torr). Tungsten averaged −6.39 mA and copper −6.37 mA, both well above aluminum at −3.89 mA, consistent with their work functions.',
  },
  {
    title: 'Numeric Considerations in Plasma Generation Simulations',
    kind: 'Talk',
    venue: 'SIAM seminar',
    date: 'Apr 17, 2026',
    authors: 'Aditya Arunachalam',
    summary:
      'Finite-difference field solvers, gridding, numerical heating in PIC-MCC simulations, and time-scale separation, framed around ongoing PIC-MCC simulations of stepwise ionization.',
  },
  {
    title: 'Visualization on Plasma Simulation',
    kind: 'Presentation',
    venue: 'ION-I Scientific Visualization',
    date: 'Spring 2026',
    authors: 'ION-I Scientific Visualization',
    summary:
      'Particle-state visualization of free electrons, neutral, metastable, and ionized argon, with trajectory reconstruction and a browser-based interactive viewer architecture.',
  },
  {
    title: 'Microplasma heaterless hollow cathode',
    kind: 'Reference',
    venue: 'IEPC-2017-183; R. Gott, M.S. thesis, 2018',
    date: '2017–18',
    authors: 'R. Gott & K. Xu',
    summary: 'The reference design IonSpark is adapted from, including its operating point and failure modes (arcing, degradation).',
  },
];
