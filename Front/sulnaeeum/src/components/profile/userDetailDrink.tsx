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
  }, [idx])

  return (
    //0번 1번일 경우
    <>
      <div className="">
        <div className="flex mb-2">
          <div className=" ml-[200px] text-gray-500 w-[470px] ">
            <div className={"font-preR"}>전통주명</div>
          </div>
          <div className="flex justify-around text-gray-500 w-[450px]">
            <div className={"font-preR"}>용량</div>
            <div className={"font-preR"}>도수</div>
            <div className={"font-preR"}>종류</div>
          </div>
        </div>
        <div className="scoll overflow-y-scroll scroll w-[1180px] h-[650px]">
          {userData?.length != 0 && userData.map((v, i) => {
            return (
              <UserDetailDrinkList key={v.drinkId} userData={v} idx={i+1}></UserDetailDrinkList>
            );
          })}
          {userData.length == 0 &&
            <div className={"ml-6 mt-6 text-[20px]"}>
            { idx == 0 ?
              '클리어한 전통주가 없습니다'
              :
              '찜한 전통주가 없습니다.'
            }
          </div>
          }
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
