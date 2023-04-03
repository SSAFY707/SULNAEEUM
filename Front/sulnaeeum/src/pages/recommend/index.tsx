import React, { useState } from 'react'
import { AiOutlineGift } from 'react-icons/ai'
import { ReconmendDrinkList } from '@/components/recommend/recommendDrink'
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
        <Modal h='auto' w='auto' modalOpen={modalOpen} open={open} >
          <GiftModal modalOpen={modalOpen}/>
        </Modal>
      </div>
      <div className={'bg-[url("/images/pattern1.png")] bg-no-repeat bg-[right_-17rem_bottom_20rem]'}>
      <div className="flex flex-col items-center w-screen h-auto">
        <div className={'flex justify-between w-3/4 mt-[140px] h-[90px]'}>
          <div className={'ml-8'}>
            <div className={'font-preM'}>Traditional Liquor Ranking</div>
            <div className={'text-[35px] font-preB'}>나만의 전통주 추천</div>
            <div>사용자의 정보를 분석하여 나만의 전통주를 추천해드립니다.</div>
          </div>
        </div>

        <div className={"flex flex-col items-center w-3/4 h-auto mb-20"}>
          <div className={"w-full pt-14 flex justify-center"}>
              <ReconmendDrinkList></ReconmendDrinkList>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-screen h-[700px] mt-[70px] mb-20">
        <div className={'flex justify-between w-8/12  items-center mt-40 h-[200px]'}>
   
          <div className={"flex flex-col w-full pt-[150px]"}>
            <div className={'text-[35px] font-preB'}>맞춤형 선물 서비스</div>
            <div className={'text-[22px] mt-4'}>선물 받는 분의 정보를 입력하면<br></br><span className={'font-preR'}>맞춤형 전통주 선물 리스트</span>를 알려드려요.</div>
            <div className={'flex w-full'}>
              <div onClick={modalOpen} className={"flex justify-center items-center w-[220px] rounded mt-[50px] py-2 text-[22px] font-preR hover:font-preM cursor-pointer bg-zinc-200 hover:bg-zinc-300"}>
                <AiOutlineGift className={'mr-4'}/>전통주 선물하기
              </div>
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
      </div>
    </>
  )
}
