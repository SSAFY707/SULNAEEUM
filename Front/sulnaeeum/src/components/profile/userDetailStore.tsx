import React, { useEffect, useState } from "react";
import UserDetailStoreList from "./userDetailStoreList";
import { UserPreferenceStore } from "@/types/DataTypes";
import { getMyLikeStore } from "@/api/auth/mypage";

export default function userDetailStore() {
  // const { userData } = props;
  const [store, setStore] = useState<UserPreferenceStore[]>([])

  const setting = async () => {
    setStore(await getMyLikeStore())
  }

  useEffect(() => {
    // get 찜한 전통주 가게
    setting()
  }, []);

  return (
    <>
      <div>
        <div className="flex mb-2">
          <div className=" ml-[160px] w-[250px]">
            <div>전통주명</div>
          </div>
          <div className="flex justify-around w-[200px]">
            <div>판매하는 전통주</div>
          </div>
        </div>
        <div className="scoll overflow-y-scroll scroll w-[1180px] h-[650px]">
          <div></div>
          {store.length !== 0 && store.map((v, i) => {
            return (
              <div key={i}>
                <UserDetailStoreList key={v.storeId} idx={i+1} userData={v}></UserDetailStoreList>
              </div>
            );
          })}
          {store.length == 0 && 
            <div className={"ml-6 mt-6 text-[20px]"}>
              찜한 전통주 식당이 없습니다.
            </div>
          }
        </div>
      </div>
    </>
  );
}
