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
    slug: "nariivchilsan",
    image: "/graduation.png",
    titleKey: "graduation.heroTitle",
    descriptionKey: "graduation.description",
    pageTitleKey: "userPage.certification1.pageTitle",
    introKey: "userPage.certification1.intro",
    sections: [],
  },

  {
    slug: "Gerchilgee-gardan-awah",
    image: "/gerchilgee-gardah2.jpeg",
    titleKey: "userPage.certification2.title",
    descriptionKey: "userPage.certification2.description",
    pageTitleKey: "userPage.certification2.pageTitle",
    introKey: "userPage.certification2.intro",
    sections: [],
  },
  {
    slug: "Gerchilgee-gardah",
    image: "/gerchilgee-gardah1.jpeg",
    titleKey: "userPage.certification1.title",
    descriptionKey: "userPage.certification1.description",
    pageTitleKey: "userPage.certification1.pageTitle",
    introKey: "userPage.certification1.intro",
    sections: [],
  },
  {
    slug: "erdes-baylag",
    image: "/erdes-baylag.png",
    titleKey: "grad.heroTitle",
    descriptionKey: "grad.description",
    pageTitleKey: "userPage.certification1.pageTitle",
    introKey: "userPage.certification1.intro",
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
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug);
}
