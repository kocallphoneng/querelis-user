import React, { useState } from "react";
import { useAppContext } from "../../../Controllers/Context/AppContext";

const TicketNavCard = ({ Icon, active, title, navigate, children }) => {
  const { setModal } = useAppContext();
  const [showChildren, setShowChildren] = useState(false);
  return (
    <div>
      <span className="flex items-center justify-between">
        <span
          onClick={() => {
            setModal(false);
            setShowChildren(!showChildren);
            navigate();
          }}
          className={`flex items-center text-[#fff] rounded-[20px] h-[46px] text-[14px] font-[500] transition-all duration-200 ease-in-out px-[35px] cursor-pointer gap-3 `}
        >
          <Icon className={`${"text-[20px] text-[#fff]"}`} />
          {title}
        </span>
      </span>
      {showChildren && <div className="ml-5">{children}</div>}
    </div>
  );
};

export default TicketNavCard;
