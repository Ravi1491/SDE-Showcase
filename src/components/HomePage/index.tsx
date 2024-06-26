import React from "react";
import NavSection from "../NavSection";
import TopSection from "../TopSection";
import QuoteSection from "../QuoteSection";
import ProjectSection from "../ProjectSection";

const HomePageComponents = () => {
  return (
    <div className="min-h-screen min-w-screen">
      <div className="flex flex-col w-[1024px] m-auto h-12 gap-16">
        <NavSection />
        <TopSection />
        <QuoteSection />
        <ProjectSection />
      </div>
    </div>
  );
};

export default HomePageComponents;
