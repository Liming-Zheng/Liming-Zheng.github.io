---
title: "A squirrel-inspired drone with whole-body morphing"
subtitle: "A gliding-mammal-inspired drone for studying stability, agility, and maneuverability through coordinated limb, tail, and membrane morphing."
date: "2026"
order: 1
venue: "Nature Communications"
status: "Published in 2026"
homeSummary: "A soft-membrane drone that coordinates its limbs and tail to reshape the entire airframe, tuning stability, agility, and manoeuvrability."
researchQuestion: "Can a soft-membrane aircraft use coordinated whole-body shape change to move between stable and agile flight, rather than accepting the fixed characteristics of a conventional airframe?"
approach: "SquirrelDrone combines actively controlled forelimbs, hindlimbs, and tail with passive ribs and a compliant membrane. I characterized the changing surface geometry and aerodynamic forces in the wind tunnel, tested open-loop roll and pitch responses, and validated the system in powered flight."
evidence:
  - "At 12 m/s, aerodynamic loading raised the passive ribs by about 10% to 13% of the local chord."
  - "Below 24° angle of attack, passive rib deformation increased the lift coefficient by more than 0.1 compared with fixed ribs and maintained longitudinal static stability across the tested range."
  - "Coordinated limb and tail actuation changed wing twist, dihedral, lift, drag, and control moments, supporting open-loop dynamics tests, pull-up manoeuvres, and outdoor flight."
tags: ["Bio-inspired robotics", "Morphing aircraft", "UAV", "Flight dynamics"]
featured: true
image: "/images/research/squirreldrone-whole-body-morphing.jpg"
video: "/media/squirreldrone-whole-body-morphing.mp4"
videoPoster: "/images/research/squirreldrone-whole-body-morphing.jpg"
videoCaption: "Coordinated limb and tail actuation reshapes the whole airframe"
role: "Lead author; prototype building, aerodynamic design, experiments, data processing, visualisation, and manuscript development."
contributions:
  - "Introduced a gliding-mammal-inspired robot with coordinated limb, tail, and soft-membrane morphing."
  - "Connected passive and active shape change to lift, stability, agility, and manoeuvrability through wind-tunnel tests."
  - "Validated morphology-based control through open-loop dynamics, pull-up manoeuvres, and outdoor flight experiments."
links:
  - label: "Nature Communications"
    url: "https://www.nature.com/articles/s41467-026-72822-w"
  - label: "DOI"
    url: "https://doi.org/10.1038/s41467-026-72822-w"
media:
  - title: "Supplementary Movie 1 · Outdoor flight tests"
    src: "/media/supplementary/squirreldrone/movie-1.mp4"
    poster: "/images/supplementary/squirreldrone/movie-1.jpg"
    description: "Stable flight and manoeuvrability under outdoor conditions."
  - title: "Supplementary Movie 2 · Passive membrane morphing"
    src: "/media/supplementary/squirreldrone/movie-2.mp4"
    poster: "/images/supplementary/squirreldrone/movie-2.jpg"
    description: "Wind-tunnel measurements of wing-camber evolution across wind speeds and angles of attack."
  - title: "Supplementary Movie 3 · Dihedral and twist morphing"
    src: "/media/supplementary/squirreldrone/movie-3.mp4"
    poster: "/images/supplementary/squirreldrone/movie-3.jpg"
    description: "Controlled limb actuation produces dihedral and twist changes across the soft wing."
  - title: "Supplementary Movie 4 · Launch flight"
    src: "/media/supplementary/squirreldrone/movie-4.mp4"
    poster: "/images/supplementary/squirreldrone/movie-4.jpg"
    description: "Launch and transition into powered flight."
  - title: "Supplementary Movie 5 · Aggressive flight"
    src: "/media/supplementary/squirreldrone/movie-5.mp4"
    poster: "/images/supplementary/squirreldrone/movie-5.jpg"
    description: "Aggressive flight after launch, demonstrating dynamic control and manoeuvrability."
  - title: "Supplementary Movie 6 · Whole-body morphing mechanism"
    src: "/media/supplementary/squirreldrone/movie-6.mp4"
    poster: "/images/supplementary/squirreldrone/movie-6.jpg"
    description: "Close-up views of coordinated limb, tail, rib, and membrane deformation."
---

**Citation:** Liming Zheng, Alexander van Zuijlen, and Salua Hamaza. "A squirrel-inspired drone with enhanced stability, agility and maneuverability via whole-body morphing." *Nature Communications*, 2026.

This project investigates how gliding mammals, especially flying squirrels, coordinate their limbs, tail, and compliant flight membrane. I translated these biological features into a powered aerial robot whose complete aerodynamic shape can change during flight.

## The research challenge

Conventional aircraft inherit a fixed balance between stability and manoeuvrability from their geometry. Gliding mammals can alter that balance continuously because their limbs tension and reshape a soft membrane. The central challenge was to build an aircraft that preserves this coupling between actuation, structural deformation, and aerodynamic response.

## Robot and morphing architecture

SquirrelDrone uses five actuators to control its forelimbs, hindlimbs, and tail. Six passive ribs support a skin-like membrane, while twin front-mounted propellers provide powered flight. Limb motion changes camber, twist, dihedral, and effective angle of attack across the body. Aerodynamic pressure also deforms the passive ribs, so the final flight shape emerges from both actuation and airflow.

## Experimental programme

I combined membrane-shape reconstruction, wind-tunnel force and moment measurements, and dynamic tests. Reflective markers recorded how the soft surface changed under aerodynamic loading. Balance measurements quantified lift, drag, and stability derivatives across limb and tail configurations. Tethered open-loop tests then measured roll and pitch responses, followed by pull-up manoeuvres and outdoor flights.

## Main findings

- At 12 m/s, the passive ribs moved upward by about 10% to 13% of the local chord.
- Passive deformation increased the lift coefficient by more than 0.1 below 24° angle of attack compared with fixed ribs.
- The passive configuration remained longitudinally statically stable across the tested range, while the fixed-rib configuration was unstable below 10°.
- Differential forelimb and hindlimb actuation produced the strongest roll response, while the hindlimbs and tail supplied strong pitch authority because of their position behind the center of gravity.
- Whole-body morphing changed both aerodynamic forces and moments, enabling the vehicle to trade stability for agility and manoeuvrability in flight.

## Why it matters

The work shows that a compliant body does not have to be treated as an uncertain disturbance. Its deformation can improve lift and stability, while active whole-body morphing provides control authority. This gives future morphing aircraft a physical mechanism for adapting their flight characteristics in real time.
