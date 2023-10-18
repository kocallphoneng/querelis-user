import React from "react";

const patners = [
  require("../../../Assets/images/mtn.png"),
  require("../../../Assets/images/callphone.png"),
  require("../../../Assets/images/glo.png"),
  require("../../../Assets/images/aedc.png"),
  require("../../../Assets/images/eedc.png"),
  require("../../../Assets/images/airtel.png"),
];

const OurPartners = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-[500px] bg-[--hue]">
      <div className="max-w-[1200px] flex flex-col  gap-5">
        <span className="text-[44px] text-[--base_color] font-[700] pop">
          Over 1,000+ customers trust Querelis
        </span>
        <span className="text-[#434e64] max-w-[600px] text-[18px] font-[700px] pop">
          Businesses across industries and around the world have built better
          customer relationships with Querelis.
        </span>
        <div className="flex justify-center items-center gap-10 mt-10">
          {patners.map((p, n) => (
            <img key={n} className="w-[150px]" src={p} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
