import React from "react";
import { FaEllipsisH } from "react-icons/fa";
import { useAppContext } from "../../../Controllers/Context/AppContext";
const images = [
  require("../../../Assets/images/u1.png"),
  require("../../../Assets/images/u2.png"),
  require("../../../Assets/images/u3.png"),
  require("../../../Assets/images/u4.png"),
  require("../../../Assets/images/u5.png"),
];

const Card1 = ({ type, title, Icon, count }) => {
  const { loadingData, departments, tickets, staffs } = useAppContext();

  console.log(departments);
  const staffData = loadingData
    ? []
    : staffs?.data?.slice(0, 5)?.map((s) => s.first_name[0] + s?.last_name[0]);
  const deps = [
    { name: departments?.data[0]?.name[0], gradient: "orange" },
    { name: departments?.data[1]?.name[0], gradient: "green" },
    { name: departments?.data[2]?.name[0], gradient: "red" },
    { name: departments?.data[3]?.name[0], gradient: "purple" },
    // { name: departments?.data[4]?.name[0], gradient: "gray" },
  ];

  return (
    <div className="lg:col-span-3 col-span-6 overflow-hidden p-[20px] bg-[#0000ff0e] rounded-[24px] h-[150px] flex flex-col  border border-[#00000098] border-dashed">
      <span className="text-[14px] font-[700]">{title}</span>
      <div className="flex gap-5  items-baseline min-h-[27px]">
        <span className="text-[27px] font-bold min-h-[27px]">{count}</span>
        <Icon className=" text-[--base_color]" />
      </div>
      {!loadingData ? (
        <div className="flex relative">
          {type === "staff"
            ? staffData.map((i, n) => {
                const position = n * 30;
                let style = {
                  left: `${position}px`,
                  color: "#fff",
                  background: deps[n].gradient,
                };
                return (
                  <span
                    style={style}
                    className={`w-[40px] flex items-center justify-center h-[40px] p-[1px] absolute top-0  shadow-md bg-[#fff] rounded-full`}
                  >
                    {i}
                  </span>
                );
              })
            : deps.map((i, n) => {
                const position = n * 30;
                let style = { left: `${position}px`, background: i.gradient };
                return (
                  <span
                    style={style}
                    className={`w-[40px] text-white font-[700] h-[40px] flex justify-center items-center p-[1px] absolute top-0  shadow-md bg-[#fff] rounded-full`}
                  >
                    {i.name}
                  </span>
                );
              })}
          {staffData.lenght > 5 && (
            <span
              className={`w-[40px] flex items-center justify-center bg-[--base_color] z-[9999] h-[40px] p-[1px] absolute top-0 left-[150px]  shadow-lg rounded-full`}
            >
              <FaEllipsisH className="text-[#fff]" />
            </span>
          )}
        </div>
      ) : (
        <div class="animate-pulse flex  relative">
          {images.map((i, n) => {
            const position = n * 30;
            let style = { left: `${position}px` };

            return (
              <div
                style={style}
                class="rounded-full absolute border border-white bg-slate-400 min-h-[40px] w-[40px]"
              ></div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Card1;
