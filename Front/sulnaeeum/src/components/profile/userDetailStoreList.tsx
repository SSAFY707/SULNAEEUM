import React from 'react'
import Image from "next/image";
import { UserPreferenceStore } from "@/types/DataTypes";

export default function userDetailStoreList(props: {userData:UserPreferenceStore}) {
    const { userData } = props;
  return (
    <div className="mt-[5px] mb-[13px] w-[1140px] h-[100px]  bg-white rounded-lg shadow-sm flex items-center">
       <div className="h-[79px] w-[480px] flex pl-[40px] ">
            <div className="text-center items-center flex text-[25px] pr-[67px]">
                {userData.storeId}
            </div>
            <div className="flex pl-[23px] flex-col justify-center">
                <div className=" text-[21px]  font-preM text-[#393939]">{userData.storeName}</div>
                <div className=" text-[16px] font-preR text-[#7F7F7F]">{userData.storeAddress}</div>
            </div>
        </div>
          <div className='flex justify-around w-[600px]'>
              {userData.storeDrink.map((v, i) => { 
                  return (
                      <div className='flex'>
                              <Image className="w-[30px] h-[73px] " src={userData.storeDrinkImage[i]} alt="" width={40} height={30} ></Image>
                        <div className='flex flex-col justify-center ml-[10px]'>
                            <div className="text-[20px]">{v}</div>
                            <div className="font-preM text-[#393939]">{userData.storeDrinkType[i]}</div>
                        </div>
                      </div>
                        )
                })}
           </div>
    </div> 
    
  )
}
