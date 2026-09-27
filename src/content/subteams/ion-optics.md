---
title: Ion Optics
stage: Ion extraction & acceleration
summary: Designing the two-grid system that pulls ions out of the plasma and accelerates them into a beam.
order: 3
status: Design reviews · Fall 2026
cover: ../../assets/photos/chamber-glow.jpg
coverAlt: Vacuum chamber lit from inside by plasma during a test
---

## Goal

Design an ion-optics grid set that produces thrust efficiently while resisting erosion from heat and ion impingement, so the thruster runs as efficiently as possible.

## How the grids work

The ion optics are the part of an ion thruster that draws ions out of the discharge chamber and accelerates them:

- The **screen grid** pulls ions from the plasma and shapes the beam.
- The **accelerator grid** sits just downstream. The potential difference between the two grids creates the electric field that accelerates ions out of the thruster, and its negative bias keeps outside electrons from streaming back in.
- Without a way to neutralize the beam, a spacecraft firing only positive ions would charge up negatively and pull its own exhaust back, so a neutralizer is part of the full system picture.

## System outline

- **Screen grid**: extracts ions and shapes the beam
- **Accelerator grid**: accelerates and focuses ions
- **Mounting structure**: holds the grids in place
- **Alignment and spacing hardware**: keeps the grids coaxial to tight tolerance, avoiding grid impingement and erosion
- **Thermal management**: conducts and radiates heat away from the grids
- **Electrical feedthroughs**: carry grid voltages into the vacuum chamber

## Simulation

The team models grid geometry electrostatically in **FEMM 4.2**, testing each iteration in simulation before anything is machined. Screen and accel grid CAD models are in progress, and design reviews continue through fall 2026.
