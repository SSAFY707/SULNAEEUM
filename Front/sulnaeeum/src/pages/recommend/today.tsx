import React from "react";
import TodayModal from "@/components/recommend/todayModal";
export default function today() {
  const todayType = ["오늘의 건배사", "오늘의 전통주", "오늘의 안주"];
  const image = [
    "/images/recommend/건배사2.png",
    "/images/recommend/전통주.png",
    "/images/recommend/안주.png",
  ];
  
  const todayText = [
    ["#청바지, 청춘은 바로 지금!", "#진달래, 진하고 달콤한 내일을 위하여!", "#통통통, 의사소통! 운수대통! 만사형통!"],
    ["#남산에 레드와인", "#배꽃 필 무렵", "#서울의 밤", "#얼떨결에", "#제주 낭만", "#호산춘", "#아이싱 자몽","#볼빨간 미자"],
    ["#삼겹살","#족발","#두부김치","#감자탕","#어묵탕","#번데기탕","#김치찌개",'#회',"#후라이드","#피자","#골뱅이무침"]
  ]


  return (
    <div className="flex justify-center ">
      <div className="absolute top-[120px] text-[18px] font-preL text-[#494949]">
        random recommendation service
      </div>
      <div className="absolute top-[145px] text-[55px] font-preEB text-[#655443]">
        랜덤 추천 서비스{" "}
      </div>
      <div className="absolute top-[230px] text-[#7F7F7F] text-[16px]">
        {" "}

        랜덤으로 지정해주는 추천 서비스를 통해 건배사, 전통주, 안주 고르는 시간을 줄여보세요!{" "}
      </div>
      <div className="absolute top-[320px] w-[2000px] h-[480px] items-center bg-[#E8D9CD] rounded-sm flex justify-evenly">
        <div className="absolute  w-[1500px] h-[480px] items-center bg-[#E8D9CD] rounded-sm flex justify-evenly">
        {todayType.map((v, i) => {
          return (
            <TodayModal todayType={v} todayText={todayText[i]} image={image[i]} key={i}></TodayModal>
          );
        })}
          </div>
      </div>
    </div>
  );
}
