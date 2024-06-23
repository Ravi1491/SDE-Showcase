import Quote from "@/assets/icons/Quote";
import React from "react";

const QuoteSection = () => {
  return (
    <div className="flex h-24 justify-center items-center">
      <div className="relative flex w-fit p-6 border-2 border-gray">
        <div className="absolute top-0 left-10 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="absolute top-2 left-3 w-10 h-10 bg-background rounded-full border-gray transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
          <Quote className="relative z-10" />
        </div>
        <span className="font-semibold text-xl z-20">
          With great power comes great electricity bill
        </span>
        <div className="absolute bottom-0 right-10 transform translate-x-1/2 translate-y-1/2 z-10">
          <div className="absolute bottom-2 right-3 w-10 h-10 bg-background rounded-full border-gray transform translate-x-1/2 translate-y-1/2 z-0"></div>
          <Quote className="relative z-10" />
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;
