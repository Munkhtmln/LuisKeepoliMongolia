"use client";
import Header from "./_components/Header";
import Body from "./_components/Body";
import Body2 from "./_components/Body2";
import NewsSection from "./_components/News-Section";
import FeaturedArticle from "./_components/FeaturedArticle";
import ValuesSection from "./_components/ValuesSection";
import ServicesSection from "./_components/ServiceSection";
import BranchesSection from "./_components/Branches";
import PartnersSection from "./_components/Partners";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Body />
      <Body2 />
      <NewsSection />
      <FeaturedArticle />
      <ValuesSection />
      <ServicesSection />
      <BranchesSection />
      <PartnersSection />
      <Footer />
    </div>
  );
}
