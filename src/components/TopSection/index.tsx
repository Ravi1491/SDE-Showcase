import Image from "next/image";
import React from "react";

import homeTopStoryProfile from "@/assets/illustrations/HomeTopStoryProfie.svg";
import ProfileBackgroundGrid from "@/assets/icons/ProfileBackgroundGrid";
import ProfileDots from "@/assets/icons/ProfileDots";

const TopSection = () => {
  return (
    <div className="flex w-full items-center">
      <div className="flex flex-col gap-8 py-8 w-7/12">
        <div className="font-semibold w-11/12 text-3xl">
          Ravi is a <span className="text-primary">software developer</span> and
          <span className="text-primary"> back-end developer</span>
        </div>
        <div className="text-gray w-[463px]">
          He crafts responsive websites where technologies meet creativity
        </div>
        <div>
          <button className="border border-primary text-white py-2 px-4">
            Contact me!!
          </button>
        </div>
      </div>
      <div className="flex flex-col relative">
        <div className="border-b border-primary relative">
          <div className="absolute inset-10 z-0">
            <ProfileBackgroundGrid height="195px" />
          </div>
          <div className="relative z-10">
            <Image src={homeTopStoryProfile} alt="Profile Image" />
            <div className="absolute z-20 bottom-20 right-20 transform translate-x-1/2 translate-y-1/2">
              <ProfileDots />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="text-gray border p-1 flex gap-2 justify-center items-center">
            <div className="w-4 h-4 border border-primary"></div>
            <span>Open for new opportunities</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
