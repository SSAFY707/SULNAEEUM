import React from "react";
import Image from "next/image";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { UserClear } from "@/types/DataTypes";

export default function userDetailDrinkList(props: { userData: UserClear }) {
  const { userData } = props;

  return (
    <div className="mt-[5px] mb-[13px] w-[1140px] h-[100px] bg-white rounded-lg shadow-sm flex items-center">
      <div className="h-[79px] w-[340px]  flex pl-[40px] ">
        <div className="text-center items-center flex text-[25px] pr-[90px]">
          {userData.drinkId}
        </div>
        <img src={userData.drinkImage} alt="" width={32} height={5}></img>
        <div className="items-center flex pl-[23px] text-[21px] ">
          <div className="font-preM w-[300px] text-[#393939]">{userData.drinkName}</div>
        </div>
      </div>
      <div className="h-[90px] w-[380px]  flex justify-center items-center">
        <Button leftIcon={<BsSearch />} colorScheme='gray' size="sm">
          자세히 알아보기
        </Button>
        
      </div>
      <div className="h-[90px] w-[410px]  flex justify-around items-center text-[20px]">
        <div className="font-preR">{userData.drinkAmount}</div>
        <div className="font-preR">{`${userData.drinkLevel}%`}</div>
        <div className="font-preR">{userData.drinkType}</div>
      </div>
    </div>
  );
}
