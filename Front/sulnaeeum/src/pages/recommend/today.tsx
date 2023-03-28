import React from "react";
import TodayModal from "@/components/recommend/todayModal";
export default function today() {
  const todayType = ["오늘의 건배사", "오늘의 전통주", "오늘의 안주"];
  const image = [
    "/images/recommend/건배사.png",
    "/images/recommend/전통주.png",
    "/images/recommend/안주.png",
  ];

  return (
    <div className="flex justify-center ">
      <div className="absolute top-[120px] text-[18px] font-preL text-[#494949]">
        today's series
      </div>
      <div className="absolute top-[145px] text-[55px] font-preEB text-[#655443]">
        오늘의 시리즈{" "}
      </div>
      <div className="absolute top-[230px] text-[#7F7F7F] text-[16px]">
        {" "}
        매일 랜덤으로 지정되는 오늘의 시리즈를 통해 건배사, 전통주, 안주를 추천
        받아보세요.{" "}
      </div>
      <div className="absolute top-[400px] w-[1200px] h-[350px] bg-indigo-200 flex justify-between">
        {todayType.map((v, i) => {
          return (
            <TodayModal todayType={v} image={image[i]} key={i}></TodayModal>
          );
        })}
      </div>
    </div>
  );
}
