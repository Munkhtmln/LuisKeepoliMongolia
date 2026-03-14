export interface ServiceSection {
  headingKey: string;
  paragraphKeys: string[];
}

export interface ServiceItem {
  slug: string;
  image: string;
  titleKey: string;
  descriptionKey: string;
  pageTitleKey: string;
  introKey: string;
  sections: ServiceSection[];
}

export const services: ServiceItem[] = [
  {
    slug: "tehnikiin-hyanaltyn-alba",
    image: "/nvvrs-deej.png",
    titleKey: "services.items.inspection.title",
    descriptionKey: "services.items.inspection.description",
    pageTitleKey: "services.items.inspection.pageTitle",
    introKey: "services.items.inspection.intro",
    sections: [],
  },
  {
    slug: "Nuursnii-sorilt-shinzhilgeenii-laboratoriin",
    image: "/lab.png",
    titleKey: "services.items.laboratory.title",
    descriptionKey: "services.items.laboratory.description",
    pageTitleKey: "services.items.laboratory.pageTitle",
    introKey: "services.items.laboratory.intro",
    sections: [],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}
