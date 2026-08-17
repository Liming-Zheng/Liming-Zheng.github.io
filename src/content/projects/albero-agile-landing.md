---
title: "ALBERO: Agile landing on branches"
subtitle: "A quadrotor perching framework combining an ultra-fast branch gripper with motion planning for environmental robotics operations."
date: "2024"
order: 3
venue: "IEEE Robotics and Automation Letters"
status: "Published in 2024"
homeSummary: "An ultra-fast gripper and motion-planning framework that enables a quadrotor to perch dynamically on steep, naturally oriented branches."
researchQuestion: "Can a conventional quadrotor perch dynamically on steep natural branches when it cannot hold an inclined contact pose long enough for a slow gripper to close?"
approach: "ALBERO combines an actively triggered bistable spring-steel gripper with trajectory planning for branch contact. I built grippers for two vehicle scales, characterized closure and load capacity, integrated the hardware with a quadrotor, and tested indoor, outdoor, and rainforest perching."
evidence:
  - "The large and small grippers completed closure in 67 ms and 42 ms, respectively."
  - "The design scaled from a 0.95 kg quadrotor to a 0.148 kg microdrone; indoor flight tests covered branch inclinations of 0°, 20°, and 40°."
  - "Outdoor tests demonstrated perching and relaunch on natural branches, and the system was deployed during the XPRIZE Rainforest semifinals in Singapore."
tags: ["Aerial robotics", "Agile perching", "Gripper design", "Motion planning"]
featured: true
image: "/images/research/albero-inclined-branch-perching.jpg"
video: "/media/albero-inclined-branch-perching.mp4"
videoPoster: "/images/research/albero-inclined-branch-perching.jpg"
videoCaption: "Agile perching on a steep natural branch"
role: "Lead author; gripper concept and mechanism, system integration, and experimental validation."
contributions:
  - "Designed an ultra-fast, actively resettable gripper that closes in 42 ms or 67 ms, depending on configuration."
  - "Integrated mechanical grasping with motion planning for dynamic quadrotor perching."
  - "Demonstrated field deployment on randomly oriented tree branches."
links:
  - label: "IEEE DOI"
    url: "https://doi.org/10.1109/LRA.2024.3349914"
  - label: "TU Delft Portal"
    url: "https://research.tudelft.nl/en/publications/albero-agile-landing-on-branches-for-environmental-robotics-opera"
  - label: "Project News"
    url: "https://mavlab.tudelft.nl/albero-agile-dynamic-perching-of-quadrotors-on-real-tree-branches/"
  - label: "Video"
    url: "https://www.youtube.com/watch?v=krxqD5sjWZY"
media:
  - title: "Flight video · Horizontal branch"
    src: "/media/supplementary/albero/angle-0.mp4"
    poster: "/images/supplementary/albero/angle-0.jpg"
    description: "Dynamic perching on a branch at 0° inclination."
  - title: "Flight video · 30° inclined branch"
    src: "/media/supplementary/albero/angle-30.mp4"
    poster: "/images/supplementary/albero/angle-30.jpg"
    description: "Dynamic approach, contact, and grasp on a 30° branch."
  - title: "Flight video · 42° inclined branch"
    src: "/media/supplementary/albero/angle-42.mp4"
    poster: "/images/supplementary/albero/angle-42.jpg"
    description: "Agile perching on the steepest branch configuration in this video set."
---

**Citation:** Liming Zheng and Salua Hamaza. "ALBERO: Agile Landing on Branches for Environmental Robotics Operations." *IEEE Robotics and Automation Letters*, 9(3), 2845-2852, 2024.

ALBERO is a hardware and planning framework for agile quadrotor perching on natural tree branches. It couples a rapidly triggered gripper with a trajectory that brings the vehicle to the branch at a feasible position, orientation, and contact velocity.

## The research challenge

Most branches are inclined rather than horizontal. A quadrotor cannot hover while matching a steep branch orientation, so the grasp must happen during a dynamic manoeuvre. Natural branches also vary in diameter, surface roughness, and shape. The mechanism therefore has to close quickly, tolerate geometric variation, support the vehicle after the motors stop, and reopen for take-off.

## Gripper design

The gripper stores elastic energy in preformed bistable spring-steel bands. Contact and an active trigger release this energy for rapid closure, while a geared reopening mechanism resets the gripper after perching. The number and length of the steel bands can be changed for different vehicle sizes. The gripper consumes no energy to remain closed on a branch.

## Planning and system integration

The motion planner builds on a minimum-control trajectory formulation for an inclined cylindrical target. It constrains the terminal position, orientation, velocity, thrust, angular rate, and flight altitude. The gripper trigger is synchronized shortly before the trajectory endpoint so that closure coincides with branch contact.

## Experimental validation

- High-speed video measured total closure times of 67 ms for the large gripper and 42 ms for the small gripper.
- Mechanical tests characterized payload, trigger force, reopening force, and grasping on branches from 54 mm to 103 mm in diameter.
- The design was integrated on 0.95 kg and 0.148 kg quadrotors.
- Indoor tests demonstrated dynamic perching on branches inclined at 0°, 20°, and 40°.
- Outdoor tests demonstrated grasping and relaunch on natural branches using onboard first-person-view feedback.
- The gripper was deployed in tropical rainforest tests during the 2023 XPRIZE Rainforest semifinals in Singapore.

## Why it matters

Perching lets an aerial robot stop its propellers, remain quiet, and extend the time available for sensing in a forest canopy. ALBERO shows how fast mechanical response and flight planning can be designed together for this physical interaction task.
