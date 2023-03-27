import React, { useEffect } from "react";
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
        {userData.map((v, i) => {
          return (
            // <div key={i}>
            //   {v.map((val, idx) => {
            //     return <div key={idx}>{val.storeId}</div>;
            //   })}
            // </div>
          );
        })}
      </div>
    </>
  );
}
