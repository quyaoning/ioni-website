import type { ImageMetadata } from 'astro';
import plasmaViewport from '../assets/photos/plasma-viewport.jpg';
import plasmaPlume from '../assets/photos/plasma-plume.jpg';
import chamberGlow from '../assets/photos/chamber-glow.jpg';
import vacuumChamber from '../assets/photos/vacuum-chamber.jpg';
import labSetup from '../assets/photos/lab-setup.jpg';
import buildSession from '../assets/photos/build-session.jpg';
import eohDemo from '../assets/photos/eoh-demo.jpg';
import eohBooth from '../assets/photos/eoh-booth.jpg';
import eohAward from '../assets/photos/eoh-award.jpg';
import eohAwardTeam from '../assets/photos/eoh-award-team.jpg';
import posterSession from '../assets/photos/poster-session.jpg';
import team from '../assets/photos/team-2026.jpg';
import dcIso from '../assets/cad/discharge-chamber-v02-iso.png';
import dcFront from '../assets/cad/discharge-chamber-v02-front.png';
import dcSide from '../assets/cad/discharge-chamber-v01-side.png';

export type Shot = { src: ImageMetadata; alt: string; caption: string };
export type Album = { title: string; shots: Shot[] };

export const albums: Album[] = [
  {
    title: 'Plasma',
    shots: [
      { src: plasmaViewport, alt: 'Purple plasma seen through a vacuum chamber viewport', caption: 'Argon plasma through the chamber viewport' },
      { src: plasmaPlume, alt: 'Plasma plume glowing in a dark chamber', caption: 'IonSpark plume in vacuum' },
      { src: chamberGlow, alt: 'Vacuum chamber lit from inside during a test', caption: 'Chamber during a firing test' },
    ],
  },
  {
    title: 'In the lab',
    shots: [
      { src: vacuumChamber, alt: 'Stainless vacuum chamber on a lab bench with an argon cylinder', caption: 'Vacuum chamber and argon supply' },
      { src: labSetup, alt: 'Team member working on the vacuum setup', caption: 'Setting up for a test' },
      { src: buildSession, alt: 'Team members assembling hardware under the ION-I banner', caption: 'Build session' },
    ],
  },
  {
    title: 'Engineering Open House 2026',
    shots: [
      { src: eohDemo, alt: 'Presenting a projected plasma simulation beside the hardware', caption: 'Live demo with simulation on screen' },
      { src: eohBooth, alt: 'Research poster and the IonSpark setup at the booth', caption: 'The booth' },
      { src: eohAward, alt: 'Plaque reading Forging the Future Theme Award, 3rd Place, IonSpark, 2026', caption: '3rd place, Forging the Future theme award' },
      { src: eohAwardTeam, alt: 'Two team members holding the award plaque', caption: 'Accepting the award' },
      { src: posterSession, alt: 'Two team members beside a research poster', caption: 'Poster session' },
    ],
  },
  {
    title: 'CAD',
    shots: [
      { src: dcIso, alt: 'Discharge chamber CAD render, isometric view', caption: 'Discharge chamber v0.2' },
      { src: dcFront, alt: 'Discharge chamber CAD render, front view', caption: 'Discharge chamber v0.2, front' },
      { src: dcSide, alt: 'Discharge chamber CAD render, side view', caption: 'Discharge chamber v0.1, side' },
    ],
  },
  {
    title: 'Team',
    shots: [{ src: team, alt: 'ION-I members standing in front of the club logo', caption: 'ION-I, January 2026' }],
  },
];
