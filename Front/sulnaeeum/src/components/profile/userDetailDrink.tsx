import React, { useEffect, useState } from "react";
import UserDetailDrinkList from "./userDetailDrinkList";
import { UserClear, UserPreferenceDrink } from "@/types/DataTypes";

export default function userDetailDrink(props: {
  userData: UserClear[];
  idx: number;
}) {
  const { idx, userData } = props;

  return (
    //0번 1번일 경우
    <>
      <div className="">
        <div className="flex">
          <div className=" ml-[200px] w-[530px] bg-blue-400">
            <div>전통주명</div>
          </div>
          <div className="flex justify-around w-[400px] bg-green-200">
            <div>용량</div>
            <div>도수</div>
            <div>종류</div>
          </div>
        </div>
        <div className="scoll overflow-y-scroll w-[1180px] h-[650px]">
          {userData.map((v, i) => {
            return (
              <UserDetailDrinkList key={i} userData={v}></UserDetailDrinkList>
            );
          })}
        </div>
      </div>
    </>
  );
}
// export async function getServerSideProps(context: any) {
//   // 쿼리에 있는 키값을 변수에 저장?
//   const idx = context.query.idx;
//   // props에 저장해서 사용하기
//   return {
//     props: {
//       idx: idx,
//     },
//   };
// }
