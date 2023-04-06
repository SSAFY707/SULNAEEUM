import React from "react";
import { BsSearch } from "react-icons/bs";
import { UserClear } from "@/types/DataTypes";
import { useRouter } from 'next/router';

export default function userDetailDrinkList(props: { userData: UserClear, idx: number }) {
  const { userData, idx } = props;
  const router = useRouter()

  return (
    <div className="mt-[5px] mb-[13px] w-[1140px] h-[100px] bg-white rounded-lg shadow-md flex items-center">
      <div className="h-[79px] w-[450px] flex items-center pl-[40px] ">
        <div className="flex items-center text-[25px] font-preB text-gray-400 w-[80px] ">
          {idx}
        </div>
        <div className={"flex w-[50px] h-[50px] rounded-full shadow-md overflow-hidden"}>
          <img className={"flex w-full h-full object-scale-down"} src={userData.drinkImage} alt="" width={32} height={5}></img>
        </div>
        <div className="items-center flex ml-6 text-[18px] ">
          <div className="font-preR text-[#393939]">{userData.drinkName}</div>
        </div>
      </div>
      <div className="h-[90px] w-[220px] flex items-center">
        <button onClick={()=>router.push(`/list/${userData.drinkId}`)} className={"flex justify-center items-center rounded-full text-[14px] py-2 px-4 bg-zinc-200 hover:bg-zinc-300"}><BsSearch className={"text-[12px] mr-2"} /> 자세히 알아보기</button>        
      </div>
      <div className="h-[90px] flex justify-around items-center text-[18px]">
        <div className="flex justify-center text-center font-preR w-[150px]">{userData.drinkAmount}</div>
        <div className="flex justify-center text-center font-preR w-[150px]">{`${userData.drinkLevel}%`}</div>
        <div className="flex justify-center text-center font-preR w-[150px]">{userData.drinkType}</div>
      </div>
    </div>
  );
}
