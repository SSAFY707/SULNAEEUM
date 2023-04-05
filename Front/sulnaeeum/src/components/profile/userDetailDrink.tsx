import React, { useEffect, useState } from "react";
import UserDetailDrinkList from "./userDetailDrinkList";
import { UserClear } from "@/types/DataTypes";
import { getMyClearDrink, getMyLikeDrink } from "@/api/auth/mypage";

export default function userDetailDrink(props: { idx: number }) {
  const { idx } = props;

  const [userData, setUserData] = useState<UserClear[]>([])
  const dataSetting = async () => {
    if (idx == 0){
      setUserData(await getMyClearDrink())
    } else {
      setUserData(await getMyLikeDrink())
    }
  }

  useEffect(()=>{
    dataSetting()
  }, [])

  return (
    //0번 1번일 경우
    <>
      <div className="">
        <div className="flex">
          <div className=" ml-[200px] w-[530px] ">
            <div>전통주명</div>
          </div>
          <div className="flex justify-around w-[400px]">
            <div>용량</div>
            <div>도수</div>
            <div>종류</div>
          </div>
        </div>
        <div className="scoll overflow-y-scroll scroll w-[1180px] h-[650px]">
          {userData?.length != 0 && userData.map((v, i) => {
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
