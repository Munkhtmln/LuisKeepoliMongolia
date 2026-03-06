"use client";
import Header from "./_components/Header";
import Body from "./_components/Body";
import NewsSection from "./_components/News-Section";
import ServicesSection from "./_components/ServiceSection";
import Footer from "./_components/Footer";
import Bracket from "./_components/Bracket";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Body />
      {/* <Body2 /> */}
      <NewsSection />
      {/* <FeaturedArticle /> */}
      <Bracket />
      <ServicesSection />
      {/* <BranchesSection /> */}
      {/* <PartnersSection /> */}
      <Footer />
    </div>
  );
}
