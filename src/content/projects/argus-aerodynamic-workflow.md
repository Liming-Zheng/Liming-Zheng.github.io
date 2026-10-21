---
title: "ARGUS: Aerodynamic Workflow for Morphing Wings"
subtitle: "Open research software for reproducible geometry generation, aerodynamic analysis, and constrained optimization of adaptive wings."
date: "April–October 2026"
order: 4
venue: "ARGUS · TU Delft"
status: "Planned submission to SoftwareX"
homeSummary: "A reusable OpenVSP/VSPAERO workflow for comparing morphing-wing concepts, optimizing spanwise commands, and transferring aerodynamic evidence to structural and actuator models."
researchQuestion: "How can morphing-wing concepts be compared reproducibly under matched lift and bending constraints, while preserving the evidence needed for multidisciplinary design?"
approach: "Liming developed a Python workflow connecting explicit OpenVSP geometry, VSPAERO analysis, fixed-lift trim, surrogate-assisted optimization, and auditable result archives. A solver-neutral interface supports future structural and actuator coupling."
evidence:
  - "The audited cruise comparison covers 102 geometries, 204 independently trimmed flight-state evaluations, and 816 native solver result files."
  - "At late cruise, selected trailing-edge camber and twist designs predict 4.302% and 4.313% lower wing induced drag than the rigid baseline under the study's illustrative bending limit."
  - "The software and documentation are publicly available, with versioned interfaces for extending the workflow."
tags: ["Research software", "Morphing wings", "Aerodynamic optimization", "OpenVSP / VSPAERO"]
featured: true
image: "/images/research/argus/morphing-wing-concept.jpg"
videoCaption: "Conceptual illustration of a morphing wing; not a photograph of an ARGUS demonstrator."
role: "Lead developer and aerodynamic optimization researcher; planned first author of the associated SoftwareX submission."
contributions:
  - "Developed the geometry-generation, aerodynamic-analysis, and constrained-optimization workflow."
  - "Compared rigid, conventional hinged, continuous trailing-edge camber, and distributed twist concepts at matched operating conditions."
  - "Audited induced-drag metrics, geometry interpolation, units, and result provenance to establish traceable comparisons."
  - "Delivered documented software, selected geometries, tests, and interfaces for future multidisciplinary coupling."
links:
  - label: "GitHub · Code & workflow"
    url: "https://github.com/Liming-Zheng/ARGUS_Aerodynamic_Workflow"
---

## From morphing concepts to reproducible evidence

Aircraft wings must operate across changing flight conditions. ARGUS investigates adaptive morphing surfaces for more sustainable aviation. During a short-term postdoctoral project at TU Delft from April to October 2026, Liming developed a reusable aerodynamic design workflow to investigate how the outer wing should adapt during cruise.

The software compares four concepts on a common NASA/OpenVSP reference wing: a rigid baseline, conventional two-segment hinged control surfaces, continuous trailing-edge camber morphing, and distributed twist morphing. Each candidate is trimmed to the required lift before its induced drag and spanwise loads are compared.

## A reusable software framework

The Python workflow connects explicit `.vsp3` geometry generation, OpenVSP/VSPAERO evaluation, fixed-lift trim, surrogate-assisted candidate search, and strict solver reruns. Saved native outputs and geometry provenance keep each selected result traceable. Surrogate predictions propose new candidates; final reported results come from solver evaluations.

![ARGUS interface connecting design variables, OpenVSP geometry, VSPAERO, structural and actuator models, and optimization](/images/research/argus/workflow.png)

*The versioned interface supports future structural and actuator coupling. The aerodynamic study does not yet constitute a fully validated coupled aeroelastic design.*

Typed evaluation records and versioned JSON contracts separate geometry generation, aerodynamic evaluation, structural assessment, and optimization. This allows subsequent researchers to connect a structural model or replace the search algorithm while retaining the aerodynamic analysis pipeline. The Python orchestration interface is tested on Windows, Ubuntu, and macOS; OpenVSP/VSPAERO requires a separate installation and baseline verification.

## Selected aerodynamic findings

The current cruise audit covers **102 geometries, 204 independently trimmed flight-state evaluations, and 816 native VSPAERO output files**. Final induced-drag comparisons use the native wake/Trefftz-plane coefficient, **CDiw**.

| Concept | Early-cruise induced-drag reduction | Late-cruise induced-drag reduction |
| --- | ---: | ---: |
| Conventional hinged | 0.064% | 2.121% |
| Continuous trailing-edge camber | 1.424% | 4.302% |
| Distributed twist | 1.031% | 4.313% |

*Relative to the rigid wing at the same operating point, at Mach 0.78, with independently trimmed lift and a shared illustrative half-wing root-bending limit.*

Trailing-edge camber provides the best early-cruise result in the current database. The two continuous concepts are effectively tied at late cruise; their small difference does not establish a robust hardware winner. Scheduled adaptation also matters: the late-optimized continuous shapes exceed the early-cruise bending screen when retained unchanged.

These are **low-order, wing-only induced-drag predictions**, not measured reductions in total aircraft drag or fuel consumption. Transonic shocks, viscous and profile drag, aeroelasticity, mechanism mass, and actuator energy require further assessment. The bending limit is a study assumption rather than a certified structural allowable.

## Open source and planned publication

The [ARGUS Aerodynamic Workflow repository](https://github.com/Liming-Zheng/ARGUS_Aerodynamic_Workflow) provides the code, documentation, audited summaries, selected geometries, tests, and extension interfaces. Original software and documentation are released under the **BSD 3-Clause License**. Third-party software, NASA-derived material, collaborator-owned data, geometry, and institutional branding retain their original terms.

An associated software paper is planned for submission to **SoftwareX**, with **Liming Zheng as planned first author**. This is a publication plan; the manuscript is not listed here as submitted, accepted, or published.

## Project context and acknowledgements

This work was developed at Delft University of Technology within **ARGUS — Adaptive and Responsive Morphing Surfaces for Green Aviation Using Shape Memory Alloys**, under **Work Package 1: Modelling and Simulation**, specifically **Task 1.3: CFD Simulation-Based Design of Aerodynamic Forms for Demonstrator**.

Led by the University of Twente, ARGUS brings together TU Delft, the Fraunhofer Innovation Platform for Advanced Manufacturing at the University of Twente (FIP-AM@UT), Nederlands Lucht- en Ruimtevaartlaboratorium (NLR), and the Materials innovation institute (M2i).

This research (project number **LITO&O24-03725850**) is part of the Netherlands National Growth Fund program **Luchtvaart in Transitie**, which is partly financed by the Dutch Research Council **NWO**. It is also part of the Partnership Program of **M2i**, project number **N24014**.
