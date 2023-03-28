import React, { useEffect } from "react";
import  UserDetailStoreList from "./userDetailStoreList"
import { UserPreferenceStore } from "@/types/DataTypes";

export default function userDetailStore(props: {
  userData: UserPreferenceStore[];
}) {
  const { userData } = props;
  useEffect(() => {
    // get 찜한 전통주 가게
  }, []);

  return (
    <>
      <div>
      <div className="flex">
          <div className=" ml-[160px] w-[330px]">
            <div>전통주명</div>
          </div>
          <div className="flex justify-around w-[200px]">
            <div>판매하는 전통주</div>
          </div>
        </div>
        <div className="scoll overflow-y-scroll w-[1180px] h-[650px]">
          <div>
          </div>
        {userData.map((v, i) => {
          return (
            <div>
              <UserDetailStoreList key={i} userData={v}></UserDetailStoreList>
            </div>
          );
        })}
        </div>
      </div>
    </>
  );
}
