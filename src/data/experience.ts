import { earlierWork } from "./earlier-work";

const fieldWork = [
  {
    slug: "imav-2024",
    sortOrder: 2024.2,
    category: "Team competition",
    period: "2024",
    title: "First place at the IMAV 2024 indoor competition",
    context: "International Micro Air Vehicle Conference and Competition",
    images: [
      {
        src: "/images/highlights/imav-2024-award.png",
        alt: "Liming Zheng and the TU Delft team receiving the IMAV 2024 indoor competition award"
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
