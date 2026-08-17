---
title: "Head-body coupling for pitch stability and aerodynamic braking"
subtitle: "A colugo-inspired morphing platform that coordinates its head, body, and posterior surfaces to restore pitch stability and execute terminal braking for perching."
date: "2026"
order: 2
venue: "Proceedings of the National Academy of Sciences"
status: "Under review"
homeSummary: "A colugo-inspired glider that couples head and body morphing to restore pitch stability, increase aerodynamic braking, and prepare for perching."
researchQuestion: "How can a gliding robot shed energy rapidly for perching while retaining pitch stability as its angle of attack rises and the flow begins to separate?"
approach: "LemurGlider coordinates head motion with deformation of the anterior membrane and controls the posterior surface independently. I combined steady and prescribed pitch-up wind-tunnel experiments with aerodynamic modelling, flow measurements, and free-flight braking tests."
evidence:
  - "Head scheduling shifted maximum lift from 27° to 42° angle of attack and changed the pitching response from destabilizing to restoring."
  - "Posterior actuation set zero-pitch-moment equilibria from 0° to 50° angle of attack. Faster pitch-up increased maximum lift by 41% and raised the drag coefficient at maximum lift from 0.63 to 1.29."
  - "In free flight, the robot reduced translational mechanical energy by 77% within 0.43 s during terminal braking."
tags: ["Under review", "Bio-inspired aerodynamics", "Morphing aircraft", "Perching"]
featured: true
image: "/images/research/lemurglider-terminal-braking.jpg"
video: "/media/lemurglider-stability-and-braking.mp4"
videoPoster: "/images/research/lemurglider-stability-and-braking.jpg"
videoCaption: "Pitch-disturbance recovery and free-flight terminal braking · Movies S5 and S7"
role: "Co-conceived the study; designed and built LemurGlider; performed the wind-tunnel and free-flight experiments; analyzed the data; and drafted the manuscript."
contributions:
  - "Showed that scheduled head motion reshapes the anterior membrane and changes the pitching response from destabilizing to restoring."
  - "Used posterior actuation to set zero-pitch-moment equilibria across angles from 0 to 50 degrees."
  - "Demonstrated terminal braking in free flight, reducing translational mechanical energy by 77% within 0.43 s."
links: []
media:
  - title: "Movie S1 · Head articulation and anterior-membrane morphing"
    src: "/media/supplementary/lemurglider/movie-s1.mp4"
    poster: "/images/supplementary/lemurglider/movie-s1.jpg"
    description: "Head pitch reshapes the neck membrane at the anterior edge of the continuous lifting surface."
  - title: "Movie S2 · PIV at static angle of attack"
    src: "/media/supplementary/lemurglider/movie-s2.mp4"
    poster: "/images/supplementary/lemurglider/movie-s2.jpg"
    description: "Particle image velocimetry acquisition for fixed-angle measurements at three head configurations."
  - title: "Movie S3 · Real-time flow visualization"
    src: "/media/supplementary/lemurglider/movie-s3.mp4"
    poster: "/images/supplementary/lemurglider/movie-s3.jpg"
    description: "PIV visualization shows how head deflection moves the separated region downstream."
  - title: "Movie S4 · Closed-loop pitch-equilibrium tracking"
    src: "/media/supplementary/lemurglider/movie-s4.mp4"
    poster: "/images/supplementary/lemurglider/movie-s4.jpg"
    description: "Scheduled head and posterior-membrane actuation track commanded equilibria from 0° to 50°."
  - title: "Movie S5 · Recovery from a pitch disturbance"
    src: "/media/supplementary/lemurglider/movie-s5.mp4"
    poster: "/images/supplementary/lemurglider/movie-s5.jpg"
    description: "The model returns toward a 40° equilibrium after an impulse increases its angle of attack to about 55°."
  - title: "Movie S6 · Dynamic perching PIV"
    src: "/media/supplementary/lemurglider/movie-s6.mp4"
    poster: "/images/supplementary/lemurglider/movie-s6.jpg"
    description: "PIV acquisition during prescribed pitch-up manoeuvres from 15° to 80° angle of attack."
  - title: "Movie S7 · Free-flight terminal braking"
    src: "/media/supplementary/lemurglider/movie-s7.mp4"
    poster: "/images/supplementary/lemurglider/movie-s7.jpg"
    description: "Slow-motion flights toward terminal target distances of 3.2 m and 4.2 m."
---

**Manuscript:** Liming Zheng et al. "Head-body coupling inspired by gliding mammals restores pitch stability and enables aerodynamic braking for perching." Under review, 2026.

LemurGlider studies the transition from steady gliding to the rapid pitch-up required before perching. The robot separates the problem into three coordinated functions: the head regulates anterior flow and pitch stability, the posterior surface sets pitch equilibrium, and whole-body rotation generates lift and drag for braking.

## The research challenge

Perching over a short distance creates an aerodynamic conflict. The vehicle must increase lift and drag to lose energy, but a steep pitch-up also drives the flow toward separation and can remove the restoring pitch response needed for control. A fixed geometry cannot satisfy the same stability requirement throughout both gliding and braking.

## Morphing strategy

The platform draws inspiration from the head and anterior membrane of colugos and other gliding mammals. The head follows the local freestream during pitch-up, reshaping the anterior membrane and moving flow separation downstream. A separate posterior actuator changes the pitching moment without removing the stabilizing contribution of the head-body coupling.

## Experimental programme

I designed and built LemurGlider, then tested it under steady angles of attack and prescribed pitch-up motions in the wind tunnel. Force and moment measurements were paired with aerodynamic modelling and flow diagnostics. Free-flight experiments tested whether the measured mechanisms could produce terminal braking toward targets at different heights.

## Main findings

- Head scheduling moved the maximum-lift angle from 27° to 42° and changed the effective pitching response from destabilizing to restoring.
- Posterior actuation created zero-pitch-moment equilibria from 0° to 50° angle of attack across attached and separated flow.
- Faster pitch-up increased maximum lift by 41% and raised the drag coefficient at maximum lift from 0.63 to 1.29.
- During free-flight terminal braking, translational mechanical energy fell by 77% within 0.43 s.

## Why it matters

The project shows how different body regions can take complementary aerodynamic roles during a demanding manoeuvre. Morphology changes the stability, equilibrium, and braking response in sequence, allowing the airframe to adapt as the flight condition changes.

> This manuscript is currently under review. The website presents the research summary and video but does not distribute the manuscript PDF.
