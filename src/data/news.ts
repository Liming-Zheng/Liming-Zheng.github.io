type NewsItem = {
  date: string;
  emoji: string;
  text: string;
  photos?: { src: string; alt: string; width: number; height: number }[];
};

export const news: NewsItem[] = [
  {
    date: "2026-11-13",
    emoji: "🎓",
    text: "Successfully defended my dissertation and earned a Ph.D. in Aerospace Engineering from TU Delft. Thank you to everyone who celebrated with me! 🥳",
    photos: [
      {
        src: "/images/news/phd-graduation/group.jpg",
        alt: "Friends and colleagues waving for a group photo at the PhD celebration",
        width: 1500,
        height: 1000
      },
      {
        src: "/images/news/phd-graduation/celebration.jpg",
        alt: "Friends helping Liming put on a decorated graduation hat",
        width: 675,
        height: 900
      }
    ]
  },
  {
    date: "2026-10-09",
    emoji: "🎤",
    text: "Gave a talk at the invitation of Prof. Tianqi Yue (Southern University of Science and Technology, SUSTech)."
  },
  {
    date: "2026-09-27",
    emoji: "💬",
    text: "Gave a talk at the invitation of Prof. Dario."
  }
];
