export interface NewsSection {
  headingKey: string;
  paragraphKeys: string[];
}

export interface NewsItem {
  slug: string;
  image: string;
  titleKey: string;
  descriptionKey: string;
  pageTitleKey: string;
  introKey: string;
  sections: NewsSection[];
}

export const newsItems: NewsItem[] = [
  {
    slug: "Medee-medeelel",
    image: "/surgalt.jpg",
    titleKey: "userPage.course.title",
    descriptionKey: "userPage.course.description",
    pageTitleKey: "userPage.course.pageTitle",
    introKey: "userPage.course.intro",
    sections: [],
  },
  {
    slug: "itgemjlel",
    image: "/unnamed.jpg",
    titleKey: "userPage.believement.title",
    descriptionKey: "userPage.believement.description",
    pageTitleKey: "userPage.believement.pageTitle",
    introKey: "userPage.believement.intro",
    sections: [],
  },
  {
    slug: "Nuursnii-shinjilgeenii-tuhai",
    image: "/shagnal.jpg",
    titleKey: "userPage.achievement.title",
    descriptionKey: "userPage.achievement.description",
    pageTitleKey: "userPage.achievement.pageTitle",
    introKey: "userPage.achievement.intro",
    sections: [],
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug);
}
