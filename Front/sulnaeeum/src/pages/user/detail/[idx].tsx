import React, { useEffect, useState } from "react";
import Link from "next/link";
import UserDetailDrink from "@/components/profile/userDetailDrink";
import UserDetailStore from "@/components/profile/userDetailStore";
import { UserClear } from "@/types/DataTypes";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function Detail(props: { idx: number }) {
  const { idx } = props;
  const menuName = [
    "내가 클리어 한 전통주",
    "내가 찜 한 전통주",
    "내가 찜 한 전통주 가게",
  ];


  const userClear: UserClear[] = [
    {
      drinkId: 1,
      drinkName: "증말맛있어유주",
      drinkImage: "/images/jubti/drink/남산애 레드와인.png",
      drinkAmount: "500ml",
      drinkLevel: "3",
      drinkType: "탁주",
    },
    {
      drinkId: 2,
      drinkName: "전통주1",
      drinkImage: "/images/jubti/drink/도깨비술 11.png",
      drinkAmount: "500ml",
      drinkLevel: "3",
      drinkType: "탁주",
    },
    {
      drinkId: 3,
      drinkName: "전통주1",
      drinkImage: "/images/jubti/drink/도깨비술 11.png",
      drinkAmount: "500ml",
      drinkLevel: "3",
      drinkType: "탁주",
    },
    {
      drinkId: 4,
      drinkName: "전통주1",
      drinkImage: "/images/jubti/drink/도깨비술 11.png",
      drinkAmount: "500ml",
      drinkLevel: "3",
      drinkType: "탁주",
    },
    {
      drinkId: 5,
      drinkName: "전통주1",
      drinkImage: "/images/jubti/drink/도깨비술 11.png",
      drinkAmount: "500ml",
      drinkLevel: "3",
      drinkType: "탁주",
    },
    {
      drinkId: 6,
      drinkName: "전통주1",
      drinkImage: "/images/jubti/drink/도깨비술 11.png",
      drinkAmount: "500ml",
      drinkLevel: "3",
      drinkType: "탁주",
    },
    {
      drinkId: 7,
      drinkName: "전통주1",
      drinkImage: "/images/jubti/drink/도깨비술 11.png",
      drinkAmount: "500ml",
      drinkLevel: "3",
      drinkType: "탁주",
    },
    {
      drinkId: 1,
      drinkName: "전통주1",
      drinkImage: "/images/jubti/drink/도깨비술 11.png",
      drinkAmount: "500ml",
      drinkLevel: "3",
      drinkType: "탁주",
    },
  ];

  const userPreferenceDrink: any = [
    {
      drinkId: 1,
      drinkName: "이거맛있겠드랑주",
      drinkImage: "/images/jubti/drink/도깨비술 11.png",
      drinkAmount: "500ml",
      drinkLevel: "3",
      drinkType: "탁주",
    },
    {
      drinkId: 2,
      drinkName: "전통주1",
      drinkImage: "/images/jubti/drink/도깨비술 11.png",
      drinkAmount: "500ml",
      drinkLevel: "3",
      drinkType: "탁주",
    },
    {
      drinkId: 3,
      drinkName: "전통주1",
      drinkImage: "/images/jubti/drink/도깨비술 11.png",
      drinkAmount: "500ml",
      drinkLevel: "3",
      drinkType: "탁주",
    },
    {
      drinkId: 4,
      drinkName: "전통주1",
      drinkImage: "/images/jubti/drink/도깨비술 11.png",
      drinkAmount: "500ml",
      drinkLevel: "3",
      drinkType: "탁주",
    },
    {
      drinkId: 5,
      drinkName: "전통주1",
      drinkImage: "/images/jubti/drink/도깨비술 11.png",
      drinkAmount: "500ml",
      drinkLevel: "3",
      drinkType: "탁주",
    },
    {
      drinkId: 6,
      drinkName: "전통주1",
      drinkImage: "/images/jubti/drink/도깨비술 11.png",
      drinkAmount: "500ml",
      drinkLevel: "3",
      drinkType: "탁주",
    },
  ];

  const userPreferenceStore  = [
    {
      storeId: 1,
      storeName: "맛조아전통주집",
      storeImage: "/images/jubti/drink/도깨비술 11.png",
      storeAddress: "서울 강남구 언주로 508 서울상록빌딩",
      storeDrink : ["전통주1","전통주2","전통주3"],
      storeDrinkImage: ["/images/jubti/drink/단홍.png",
      "/images/jubti/drink/뱅꼬레 더감.png",
      "/images/jubti/drink/도깨비술 11.png",],
      storeDrinkType:["과실주","약주/청주","탁주"]
    },
    {
      storeId: 2,
      storeName: "맛조아전통주집",
      storeImage: "/images/jubti/drink/도깨비술 11.png",
      storeAddress: "서울 강남구 언주로 508 서울상록빌딩",
      storeDrink : ["전통주1","전통주2","전통주3"],
      storeDrinkImage: ["/images/jubti/drink/단홍.png",
        "/images/jubti/drink/뱅꼬레 더감.png",
        "/images/jubti/drink/도깨비술 11.png",],
        storeDrinkType:["과실주","약주/청주","탁주"]
      
    },
    {
      storeId: 3,
      storeName: "맛조아전통주집",
      storeImage: "/images/jubti/drink/도깨비술 11.png",
      storeAddress: "서울 강남구 언주로 508 서울상록빌딩",
      storeDrink : ["전통주1","전통주2","전통주3"],
      storeDrinkImage: ["/images/jubti/drink/단홍.png",
        "/images/jubti/drink/뱅꼬레 더감.png",
        "/images/jubti/drink/도깨비술 11.png",],
        storeDrinkType:["과실주","약주/청주","탁주"]
      
    },
    {
      storeId: 4,
      storeName: "맛조아전통주집",
      storeImage: "/images/jubti/drink/도깨비술 11.png",
      storeAddress: "서울 강남구 언주로 508 서울상록빌딩",
      storeDrink : ["전통주1","전통주2","전통주3"],
      storeDrinkImage: ["/images/jubti/drink/단홍.png",
        "/images/jubti/drink/뱅꼬레 더감.png",
        "/images/jubti/drink/도깨비술 11.png",],
        storeDrinkType:["과실주","약주/청주","탁주"]
      
    },
    {
      storeId: 5,
      storeName: "맛조아전통주집",
      storeImage: "/images/jubti/drink/도깨비술 11.png",
      storeAddress: "서울 강남구 언주로 508 서울상록빌딩",
      storeDrink : ["전통주1","전통주2","전통주3"],
      storeDrinkImage: ["/images/jubti/drink/단홍.png",
        "/images/jubti/drink/뱅꼬레 더감.png",
        "/images/jubti/drink/도깨비술 11.png",],
        storeDrinkType:["과실주","약주/청주","탁주"]
      
    },
    {
      storeId: 6,
      storeName: "맛조아전통주집",
      storeImage: "/images/jubti/drink/도깨비술 11.png",
      storeAddress: "서울 강남구 언주로 508 서울상록빌딩",
      storeDrink : ["전통주1","전통주2","전통주3"],
      storeDrinkImage: ["/images/jubti/drink/단홍.png",
        "/images/jubti/drink/뱅꼬레 더감.png",
        "/images/jubti/drink/도깨비술 11.png",],
        storeDrinkType:["과실주","약주/청주","탁주"]
      
    },
  ];

  return (
    <div className="w-screen h-screen bg-gray-100 flex justify-center">
      <div className="w-[1200px] h-[750px] mt-[120px] rounded-lg  ">
        <div className="flex ">
          <div className="flex items-center pr-[20px] opacity-70">
            <Link href="/user/profile">
              <AiOutlineArrowLeft size={30}></AiOutlineArrowLeft>
            </Link>
          </div>
          <div className="w-[300px] h-[50px]  text-[30px] font-preM flex items-center">
            {idx == 0 ? menuName[idx] : idx == 1 ? menuName[idx] : menuName[idx]}
          </div>
        </div>
        {
          // idx==0,
          idx == 0 ? (
            <UserDetailDrink userData={userClear} idx={idx}></UserDetailDrink>
          ) : idx == 1 ? (
            <UserDetailDrink
              userData={userPreferenceDrink}
              idx={idx}
            ></UserDetailDrink>
          ) : (
            <UserDetailStore userData={userPreferenceStore}></UserDetailStore>
          )
        }
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  // 쿼리에 있는 키값을 변수에 저장?
  const idx = context.query.idx;
  // props에 저장해서 사용하기
  return {
    props: {
      idx: idx,
    },
  };
}
