import { useParams } from "react-router-dom";
import { newList } from "./data";
import "./detail.css";
import { useEffect } from "react";
const Detail = () => {
  const param = useParams();
  const id: number = Number(param.id);
  let index = newList.findIndex((item) => item.id === id);
  let data = newList[index];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main">
      <div className=" mb-[120px] mt-[9.375rem]  max-w-[56.25rem]">
        <div className="text-black bg-blueLigh px-8 py-[0.1rem] inline-block uppercase rounded-[1rem] small_cap">
          {data.type}
        </div>
        <div
          className="text-3xl font-georgia-b my-[2.8125rem] detail"
          dangerouslySetInnerHTML={{ __html: data.title }}
        ></div>
        <div className="text-xl font-georgia text-[#666]">{data.date}</div>
        <div className="mt-[7.5rem] text-xl">{data.desc}</div>
        <div
          dangerouslySetInnerHTML={{ __html: data.detail }}
          className="art_detail"
        ></div>
      </div>
    </div>
  );
};

export default Detail;
