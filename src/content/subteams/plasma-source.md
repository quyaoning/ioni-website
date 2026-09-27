---
title: Plasma Source
stage: IonSpark · hollow cathode
summary: Building a heaterless, insertless hollow cathode — the electron source that ignites the whole thruster.
order: 1
status: Testing & characterization
cover: ../../assets/photos/plasma-plume.jpg
coverAlt: Purple argon plasma plume glowing inside the vacuum chamber
---

## Goal

Build a functioning **heaterless, insertless hollow cathode**, and with it the team's understanding of the electron source for ION-I's first ion thruster. The same work lays the groundwork for future neutralizers and electron sources.

An electron source is key twice over in electric propulsion: it ionizes the propellant in a DC ion thruster, and it neutralizes the ion beam in both gridded ion thrusters and Hall-effect thrusters.

## How IonSpark works

The design is adapted from Gott & Xu's microplasma heaterless cathode (IEPC-2017-183):

- A **tungsten pin** sits inside a quartz tube and is driven by a high-voltage supply, emitting electrons by field emission.
- **Argon** flows through the tube as the working gas. Those first electrons ionize it; after ignition, stepwise ionization takes over as the main source of electrons.
- A **grounded steel collar** around the tube accelerates electrons and shapes the plasma plume.
- A **brass ion collector** at the end of the tube, held at a low voltage, collects argon ions while electrons continue on toward the anode.
- Pulsed DC or AC drive prevents charge build-up and arcing. Gott's reference operating point is about **30 W at 3 kV for 150 mA** after ignition.

The whole setup runs inside a vacuum chamber, so argon is the only source of ions and the plasma can be measured before it dissipates, with a Faraday cage around the chamber to keep outside EMI out of the measurements.

### Why these materials

| Part | Material | Reason |
|---|---|---|
| Emitter pin | Tungsten | Refractory, very high melting point (at the cost of a high work function) |
| Tube | Quartz | Inert, high melting point |
| Collar, ion collector | Steel, brass | Good conductors, inexpensive |
| Working gas | Argon | Stable and easily ionized |

## Current work

- **Emitter material study.** Tungsten, copper, and aluminum pins were compared by the electron current each produced, measured with a Faraday cup and ammeter. Tungsten came out slightly ahead of copper, and both clearly beat aluminum, as work function predicts. Presented as a research poster in spring 2026.
- **Experiment backlog** for a working cathode: electrode geometry, pin-to-collector distance, gas flow rate and cathode degradation, alternative gases, inner foil, tube material, tungsten filament variation, and voltage vs. pressure.
- **Simulation.** Field-emission models (Fowler–Nordheim, Murphy–Good) and a stepwise-ionization solver for argon, the basis of this year's ion-kinetics paper.
