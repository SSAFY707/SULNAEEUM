import React from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2'
// import { ReconmendDrinkList } from '@/components/recommend/ReconmendDrinkList'

export default function index() {
  return (
    <>
      <div className="flex flex-col items-center w-screen h-auto">
        <div className={'flex justify-between w-10/12 mt-28 h-[90px] bg-sky-100'}>
          <div className={'ml-8 bg-sky-200'}>
            <div className={'font-[600]'}>Traditional Liquor Ranking</div>
            <div className={'text-[32px] font-preB'}>나만의 전통주 추천</div>
            <div>사용자의 정보를 분석하여 나만의 전통주를 추천해드립니다.</div>
          </div>
        </div>

        <div className={"flex flex-col items-center w-10/12 h-auto mb-20"}>
          <div className={"w-full pt-14 flex justify-center"}>

              <div className={"flex w-[345px] h-[510px] rounded-xl mx-7 bg-white drop-shadow-[3px_4px_7px_rgba(0,0,0,0.25)] hover:drop-shadow-[3px_5px_7px_rgba(0,0,0,0.4)]"}>
                <div className={"flex flex-col items-center justify-center w-full"}>
                  <img className={"h-[270px] relative"} src="/images/jubti/drink/단홍.png" alt="" />
                  <div className='flex w-full pl-8 pt-5'>
                    <div className={"flex flex-col"}>
                      <div className={"font-preR text-[30px]"}>단홍</div>
                      <div>5% | 330ml</div>
                      <div>벌꿀, 즙</div>
                    </div>
                  </div>
                  <div className='flex w-full justify-end pr-8 pt-3'>
                    <div className={"flex justify-center items-center rounded-full mt-3 px-4 py-2 text-[15px] cursor-pointer bg-zinc-200 hover:bg-zinc-300"}><HiMagnifyingGlass className={'mr-2'} />자세히 보러가기</div>
                  </div> 
                </div>
              </div>
              {/* <ReconmendDrinkList></ReconmendDrinkList> */}
          </div>
        </div>
      </div>
    </>
  )
}
