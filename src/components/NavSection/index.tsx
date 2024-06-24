import Logo from "@/assets/icons/Logo";
import React from "react";

const NavSection = () => {
  return (
    <div className="flex justify-between pt-10">
      <div className="flex gap-2 items-center">
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
          <span>projects</span>
        </div>
      </div>
    </div>
  );
};

export default NavSection;
