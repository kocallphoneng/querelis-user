import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = ({color, size}) => {
  return (
    <Oval
      height={size[1]}
      width={size[0]}
      color={color}
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#00cf0050"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export default Loader;
