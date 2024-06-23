import Logo from "@/assets/icons/logo";
import React from "react";

const NavSection = () => {
  return (
    <div className="flex justify-between pt-6">
      <div className="flex">
        <Logo />
        <span>Ravi</span>
      </div>
      <div className="flex gap-8">
        <div>
          <span>#</span>
          <span>home</span>
        </div>
        <div>
          <span>#</span>
          <span>about-me</span>
        </div>
        <div>
          <span>#</span>
          <span>contacts</span>
        </div>
      </div>
    </div>
  );
};

export default NavSection;
