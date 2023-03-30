import React from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2'

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

        <div className={"flex flex-col items-center w-10/12 h-auto mb-20 bg-zinc-100"}>
          <div className={"w-full px-10 pt-14 flex justify-center bg-sky-400"}>
              <div className={"flex w-[280px] h-[360px] rounded-xl mx-4 bg-white"}>
                <div className={"flex flex-col items-center justify-center w-full"}>
                  <img className={"h-[150px] relative"} src="/images/jubti/drink/단홍.png" alt="" />
                  <div className={"font-preR text-[24px]"}>단홍</div>
                  <div>5% | 330ml</div>
                  <div className='flex w-full justify-end pr-2'>
                    <div className={"flex justify-center items-center rounded-full mt-3 px-4 py-2 text-[14px] cursor-pointer bg-zinc-200 hover:bg-zinc-300"}><HiMagnifyingGlass className={'mr-2'} />자세히 보러가기</div>
                  </div> 
                </div>
              </div>
            <div className={"flex w-[350px] h-[360px] rounded mx-4 bg-sky-300"}></div>
            <div className={"flex w-[350px] h-[360px] rounded mx-4 bg-sky-300"}></div>
            <div className={"flex w-[350px] h-[360px] rounded mx-4 bg-sky-300"}></div>
            
            
          </div>
        </div>
      </div>
    </>
  )
}
