import React, { useState } from 'react'
import { AiOutlineGift } from 'react-icons/ai'
import  { CgClose } from 'react-icons/cg';
import { ReconmendDrinkList } from '@/components/recommend/recommendDrink'
import Image from "next/image";
import { Modal } from '@/components/common/modal';
import {GiftModal} from '@/components/recommend/giftModal'

export default function index() {
  const [open, setOpen] = useState(false)
  const modalOpen = () => {
    setOpen(!open)
  }
  return (
    <>
    <div>
      <Modal h='70%' w='70%' modalOpen={modalOpen} open={open} >
        <GiftModal modalOpen={modalOpen}/>
      </Modal>
    </div>
      <div className="flex flex-col items-center w-screen h-auto">
        <div className={'flex justify-between w-10/12 mt-[140px] h-[90px]'}>
          <div className={'ml-8'}>
            <div className={'font-[600]'}>Traditional Liquor Ranking</div>
            <div className={'text-[35px] font-preB'}>나만의 전통주 추천</div>
            <div>사용자의 정보를 분석하여 나만의 전통주를 추천해드립니다.</div>
          </div>
        </div>

        <div className={"flex flex-col items-center w-10/12 h-auto mb-20"}>
          <div className={"w-full pt-14 flex justify-center"}>
              <ReconmendDrinkList></ReconmendDrinkList>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-screen h-[700px] mt-[70px] mb-20">
        <div className={'flex justify-between w-8/12  items-center mt-40 h-[200px]'}>
   
          <div className={"flex flex-col w-full pt-[150px]"}>
            <div className={'text-[2.3vw] font-preB'}>맞춤형 선물 서비스</div>
            <div className={'text-[28px] mt-10'}>선물 받는 분의 정보를 입력하면<br></br>맞춤형 전통주 선물 리스트를 알려드려요.</div>
              <div onClick={modalOpen} className={"flex justify-center items-center rounded-[25px] w-[60%] mt-[50px] py-2 text-[1.5vw] cursor-pointer bg-zinc-200 hover:bg-zinc-300 text-[#000000]"}>
              <AiOutlineGift className={'mr-2'}/>전통주 선물하기
              </div>
            
          </div>
          <div className="w-[650px] h-[390px] mr-[40%]">
              <img
                className={"absolute z-10 ml-[200px] drop-shadow-[3px_10px_10px_rgba(0,0,0,0.12)]"}
                src="/images/recommend/gift/gift2.png"
                alt=""
                width={360}
                height={190}
              ></img>
              <img
                className={"absolute z-0 mt-[35px] drop-shadow-[3px_10px_10px_rgba(0,0,0,0.12)] blur-[0.7px]"}
                src="/images/recommend/gift/gift1.png"
                alt=""
                width={310}
                height={200}
              ></img>
              <img
                className={"absolute z-0  mt-[35px] ml-[450px] drop-shadow-[3px_10px_10px_rgba(0,0,0,0.12)] blur-[0.7px]"}
                src="/images/recommend/gift/gift4.png"
                alt=""
                width={310}
                height={200}
              ></img>
            </div>
    
        </div>
      </div>
    </>
  )
}
