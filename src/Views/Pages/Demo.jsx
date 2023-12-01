import axios from "axios";
import React from "react";
import { useState } from "react";
import { IoMdCall } from "react-icons/io";
import { ClipLoader } from "react-spinners";

const Field1 = () => {
  return (
    <input
      type="text"
      className="border-b-2 bg-transparent text-center w-fit outline-none font-[700]"
    />
  );
};
const Field2 = ({ func, cancel, data }) => {
  const [input, setInput] = useState("");
  const url = `http://146.190.120.240:8091/api/v2/ussd?msisdn=07051119073&sessionid=987654324567897&mno=glo&msg=${input}`;
  return (
    <div className="flex flex-col font-[700] text-[14px] w-full mx-5 p-5 bg-white ">
      <div className="flex flex-col">
        {data.map((text, n) => (
          <span key={n}>{text}</span>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border-b-2 border-b-[blue] bg-transparent  outline-none font-[700]"
      />
      <hr />
      <div className="flex justify-end gap-3">
        <span onClick={cancel}>Cancel</span>
        <span onClick={() => func(url)} className=" text-blue-700">
          Send
        </span>
      </div>
    </div>
  );
};

const Keyboard = () => {
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];

  return (
    <div className="grid grid-cols-12 gap-3 absolute bottom-[50px] px-[20px] left-0 right-0">
      {keys.map((k, n) => (
        <span
          key={n}
          className="col-span-4 bg-[#fff] flex justify-center items-center"
        >
          {k}
        </span>
      ))}
    </div>
  );
};

const Demo = () => {
  const url =
    "http://146.190.120.240:8091/api/v2/ussd?msisdn=07051119073&sessionid=987654324567897&mno=glo&msg=1";
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState([]);
  const [stage, setStage] = useState("stage1");
  const [data, setData] = useState([]);
  const next1 = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      console.log(res);
      setStage("stage2");
      const arr = res.data.text.split("\n");
      setData(arr);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  const next2 = async (base) => {
    setLoading(true);
    try {
      const res = await axios.get(base);
      //   console.log(res);
      const arr = res.data.text.split("\n");
      setData(arr);
      //   setStage(stage);
      setLoading(false);
    } catch (err) {
      //   setLoading(false);
    }
  };

  const cancel = () => {
    setStage("stage1");
  };
  const [items, setItems] = useState(["A", "B", "C"]);

  const shuffle = (letter) => {
    if (!letter) {
      return items;
    } else {
      let filter = items.filter((f) => f !== letter);
      const newArr = filter.push(letter);
      return filter;
    }
  };

  return (
    <div className="h-screen relative w-full flex justify-center items-center  ">
      {stage === "stage1" && <Field1 />}
      {stage === "stage2" && (
        <Field2 func={next2} cancel={cancel} data={data} />
      )}

      <Keyboard />
      <span
        onClick={next1}
        className="absolute bottom-[10px] w-[40px] h-[40px] m-auto bg-green-500 flex justify-center items-center rounded-full"
      >
        <IoMdCall />
      </span>
      {loading && (
        <div className="fixed bg-[#0000001c]">
          {<ClipLoader size={24} color={"#110C0C"} loading />}
        </div>
      )}
    </div>
  );
};

export default Demo;
{
  /* <div className="h-screen relative w-full flex justify-center items-center  ">
      {stage === "stage1" && <Field1 />}
      {stage === "stage2" && (
        <Field2 func={next2} cancel={cancel} data={data} />
      )}

      <Keyboard />
      <span
        onClick={next1}
        className="absolute bottom-[10px] w-[40px] h-[40px] m-auto bg-green-500 flex justify-center items-center rounded-full"
      >
        <IoMdCall />
      </span>
      {loading && (
        <div className="fixed bg-[#0000001c]">
          {<ClipLoader size={24} color={"#110C0C"} loading />}
        </div>
      )}
    </div> */
}
