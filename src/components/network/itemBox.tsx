import closeImg from "@/assets/img/netword/close.png";

interface PhotoItem {
  data: NetWordPhotoData;
  isShow: boolean;
  close: () => void;
}
const ItemBox = (props: PhotoItem) => {
  let data = props.data;
  return (
    <div
      className={[
        "fixed",
        "w-[100vw]",
        "h-[100vh]",
        "top-0",
        "left-0",
        "z-50",
        "animate__animated",
        props.isShow ? "animate__zoomIn " : "animate__zoomOut",
      ].join(" ")}
    >
      <div
        className={[
          "fixed",
          "top-[50%]",
          "left-[50%]",
          "-translate-x-[50%]",
          "-translate-y-[50%]",
          "sxl:px-0",
          "sxl:w-[80rem]",
          "w-[100%]",
          "px-[5.625rem]",
        ].join(" ")}
      >
        <div
          className={[
            "bg-blueBg",
            "px-[5.625rem]",
            "py-[5.625rem]",
            "lg:flex",
            "sxl:w-[80rem]",
            "z-40",
            "w-[100%]",
            "relative",
          ].join(" ")}
        >
          <div>
            <div className="w-[17.5rem] h-[18.75rem] mx-auto">
              <img src={data.img} />
            </div>
            <div className="text-xl-32 lg:w-[17.5rem] text-center font-georgia  mt-4">
              {data.name}
            </div>
            <div className="w-[9.375rem] h-[3.75rem] m-auto">
              <img src={data.logo2} alt="" />
            </div>
            <p className="text-sm text-center small_cap">{data.founder}</p>
          </div>
          <div className="lg:ml-[5.625rem]">
            <div className="text-xl font-bold lg:text-left text-center">
              {data.title}
            </div>
            {data.content.map((item) => {
              return (
                <p key={item} className="text-sm mt-4">
                  {item}
                </p>
              );
            })}
          </div>
          <div
            className=" absolute top-[2.8125rem] right-[5.625rem] w-[2.8125rem] h-[2.8125rem] cursor-pointer"
            onClick={() => {
              props.close();
            }}
          >
            <img src={closeImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemBox;
