import { earlierWork } from "./earlier-work";

const fieldWork = [
  {
    slug: "argus-morphing-wing",
    sortOrder: 2026.10,
    category: "Postdoctoral research · Research software",
    period: "April–October 2026",
    title: "ARGUS: Morphing-wing aerodynamic optimization",
    context: "TU Delft · ARGUS WP1, Task 1.3 · Short-term postdoctoral project",
    images: [
      {
        src: "/images/research/argus/morphing-wing-concept.jpg",
        alt: "Conceptual illustration of an adaptive morphing aircraft wing",
        caption: "Conceptual morphing-wing illustration; not a photograph of an ARGUS demonstrator."
      },
      {
        src: "/images/research/argus/workflow.png",
        alt: "ARGUS software interface for aerodynamic optimization and future structural coupling",
        caption: "A reusable interface connects geometry, aerodynamic evaluation, and future structural and actuator models."
      }
    ],
    summary: "A short-term postdoctoral project developing reproducible research software for morphing-wing aerodynamic analysis and constrained optimization within ARGUS.",
    role: "Liming led development of the OpenVSP/VSPAERO geometry, analysis, and optimization workflow, audited the aerodynamic evidence, and delivered documented software and multidisciplinary extension interfaces. He is the planned first author of an associated SoftwareX submission.",
    highlights: [
      "Public research software with original code and documentation under the BSD 3-Clause License",
      "Four-concept comparison under matched lift and illustrative bending constraints",
      "Audited cruise evidence: 102 geometries and 204 trimmed state evaluations",
      "Low-order late-cruise wing induced-drag reductions of approximately 4.3% for the selected continuous concepts",
      "Planned submission to SoftwareX"
    ],
    links: [
      { label: "Research story", url: "/projects/argus-aerodynamic-workflow/" },
      { label: "GitHub · Code & workflow", url: "https://github.com/Liming-Zheng/ARGUS_Aerodynamic_Workflow" }
    ]
  },
  {
    slug: "imav-2024",
    sortOrder: 2024.2,
    category: "Team competition",
    period: "2024",
    title: "First place at the IMAV 2024 indoor competition",
    context: "International Micro Air Vehicle Conference and Competition",
    images: [
      {
        src: "/images/experience/imav-2024/award-ceremony.webp",
        alt: "Liming Zheng and Team Tucan receiving the IMAV 2024 indoor competition award",
        caption: "Team Tucan receiving first place in the IMAV 2024 indoor competition."
      },
      {
        src: "/images/experience/imav-2024/overnight-test.webp",
        alt: "Liming Zheng and Anton after completing a successful late-night drone test",
        caption: "Liming and Anton after completing a successful test at around 3 a.m. before the competition."
      },
      {
        src: "/images/experience/imav-2024/bristol-team.webp",
        alt: "Anton, Martijn, and Liming Zheng at Bristol Robotics Laboratory",
        caption: "Anton, Martijn, and Liming, from left to right, at Bristol Robotics Laboratory."
      },
      {
        src: "/images/experience/imav-2024/trophy.webp",
        alt: "IMAV 2024 Indoor Competition winner trophy",
        caption: "The IMAV 2024 Indoor Competition winner's trophy."
      },
      {
        src: "/images/experience/imav-2024/certificate.webp",
        alt: "First-place certificate for Team Tucan at IMAV 2024",
        caption: "The first-place certificate awarded to Team Tucan."
      }
    ],
    summary:
      "A TU Delft team project to develop and operate an autonomous drone for a wildlife-themed indoor mission involving navigation, precision landing, object interaction, and visual identification.",
    role:
      "Liming contributed to the development, testing, and competition operation of the autonomous aerial system as part of the TU Delft team.",
    highlights: [
      "First place in the IMAV 2024 indoor competition",
      "Autonomous navigation through gates and confined spaces",
      "Precision landing, object grasping, and projected-animal identification",
      "Rapid integration and testing within a multidisciplinary team"
    ],
    links: [
      {
        label: "TU Delft report",
        url: "https://www.tudelft.nl/ai/biomorphic-intelligence-lab/news-1/messages/winning-imav2024-drone-competition/"
      }
    ]
  },
  {
    slug: "xprize-rainforest",
    sortOrder: 2024.1,
    category: "Field robotics",
    period: "2023–2024",
    title: "XPRIZE Rainforest with ETHBiodivX",
    context: "TU Delft and ETHBiodivX · Brazil",
    images: [
      {
        src: "/images/highlights/xprize-rainforest-liming.png",
        alt: "Liming Zheng testing a branch-perching drone with the ETHBiodivX team in the rainforest"
      },
      {
        src: "/images/experience/xprize-rainforest/parameter-tuning.webp",
        alt: "Liming Zheng tuning the perching drone in a Singapore rainforest",
        caption: "Liming tuning the perching drone during rainforest field tests in Singapore."
      },
      {
        src: "/images/experience/xprize-rainforest/team-three.webp",
        alt: "Liming Zheng, Andrew, and Seamus in the rainforest",
        caption: "Liming, Andrew, and Seamus, from left to right, during field testing."
      },
      {
        src: "/images/experience/xprize-rainforest/successful-perch.webp",
        alt: "Liming Zheng beside the drone after a successful branch perch",
        caption: "A successful branch perch during rainforest testing."
      },
      {
        src: "/images/experience/xprize-rainforest/preflight-team.webp",
        alt: "Salua Hamaza, Andrew, Liming Zheng, and Seamus preparing for XPRIZE field tests",
        caption: "Pre-field-test preparation with Salua, Andrew, Liming, and Seamus, from left to right."
      },
      {
        src: "/images/experience/xprize-rainforest/ethbiodivx-team.webp",
        alt: "The ETHBiodivX team at the XPRIZE Rainforest competition",
        caption: "The ETHBiodivX team during the XPRIZE Rainforest campaign."
      }
    ],
    summary:
      "A field-robotics effort using aerial systems to help survey rainforest biodiversity. TU Delft contributed a branch-perching and bioacoustics drone platform to the ETHBiodivX team.",
    role:
      "Liming contributed to the development and field testing of TU Delft's branch-perching and bioacoustics drone platform within ETHBiodivX.",
    highlights: [
      "Field deployment in a tropical rainforest environment",
      "Branch perching for persistent bioacoustic monitoring",
      "Integration of aerial robotics into a larger biodiversity-survey workflow",
      "ETHBiodivX received the 2024 XPRIZE Rainforest Bonus Prize"
    ],
    links: [
      {
        label: "2023 field project",
        url: "https://www.tudelft.nl/en/2023/lr/flying-robots-survey-biodiversity-and-climate-inside-tropical-rainforests"
      },
      {
        label: "2024 prize report",
        url: "https://www.tudelft.nl/en/2024/tu-delft/tu-delft-jointly-wins-in-xprize-rainforest-competition-in-brazil"
      }
    ]
  }
];

export const experiences = [...fieldWork, ...earlierWork]
  .map((experience) => ({ ...experience, links: "links" in experience ? experience.links : [] }))
  .sort((a, b) => b.sortOrder - a.sortOrder);
