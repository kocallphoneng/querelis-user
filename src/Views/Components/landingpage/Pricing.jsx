import React from "react";
import PriceCard from "../../UI/Cards/PriceCard";

const Pricing = () => {
  return (
    <div className="w-full py-[60px] flex flex-col items-center gap-10">
      <span className="text-[45px] pop font-[900] text-[--base_color] text-center">
        Our Plans
      </span>
      <div className="flex gap-10 justify-center">
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </div>
    </div>
  );
};

export default Pricing;
