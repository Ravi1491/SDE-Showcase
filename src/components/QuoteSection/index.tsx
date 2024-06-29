import Quote from "@/assets/icons/Quote";

const QuoteSection = () => {
  return (
    <div className="flex flex-col h-32 justify-center items-center">
      <div className="relative flex w-fit p-6 px-8 border-2 border-gray-medium-5">
        <div className="absolute top-0 left-10 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="absolute top-2 left-3 w-10 h-10 bg-background rounded-full border-gray-medium-5 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
          <Quote className="relative z-10" />
        </div>
        <span className="font-semibold text-xl z-20">
          With great power comes great electricity bill
        </span>
        <div className="absolute bottom-0 right-10 transform translate-x-1/2 translate-y-1/2 z-10">
          <div className="absolute bottom-2 right-3 w-10 h-10 bg-background rounded-full border-gray-medium-5 transform translate-x-1/2 translate-y-1/2 z-0"></div>
          <Quote className="relative z-10" />
        </div>
      </div>
      <div className="w-full flex items-end justify-end">
        <div className="flex mr-52 border-l-2 border-r-2 border-b-2 py-4 px-4 border-gray-medium-5">
          <span>- Dr. Who</span>
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;
