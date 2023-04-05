import React from 'react'
import Image from "next/image";
import { UserPreferenceStore } from "@/types/DataTypes";

export default function userDetailStoreList(props: {userData:UserPreferenceStore, idx: number}) {
    const { userData, idx } = props;
  return (
    <div className="mt-[5px] mb-[13px] w-[1140px] h-[100px] bg-white rounded-lg shadow-md flex items-center">
       <div className="h-[79px] w-[480px] flex pl-[40px] ">
            <div className="items-center font-preB text-gray-400 flex text-[25px] w-[80px]">
                {idx}
            </div>
            <div className="flex flex-col justify-center">
                <div className=" text-[20px] font-preM text-[#393939]">{userData.storeName}</div>
                <div className=" text-[16px] font-preR text-[#7F7F7F]">{userData.storeAddress}</div>
            </div>
        </div>
          <div className='flex'>
              {userData.storeDrink.map((v, i) => { 
                  return (
                      <div className='flex w-[220px] mx-2'>
                        <div className={'flex w-[50px] h-[50px] rounded-full shadow-md overflow-hidden'}>
                          <img className="w-full h-full object-scale-down" src={userData.storeDrinkImage[i]} alt="" width={40} height={30} ></img>
                        </div>
                        <div className='flex flex-col justify-center ml-[10px]'>
                            <div className="text-[18px]">{v}</div>
                            <div className="font-preM text-[14px] text-[#393939]"># {userData.storeDrinkType[i]}</div>
                        </div>
                      </div>
                        )
                })}
           </div>
    </div> 
    
  )
}
