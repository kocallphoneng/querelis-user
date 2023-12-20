import React from "react";
import Accordion from "../../UI/Utilities/Accordion";

const Faqs = () => {
  return (
    <div className="flex flex-col gap-10 items-center py-10 pb-20">
      <span className="text-[45px] text-[--base_color] font-[900] pop">
        Frequently asked questions
      </span>
      <div className="max-w-[800px] w-full flex flex-col gap-5">
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
      </div>
    </div>
  );
};

export default Faqs;
