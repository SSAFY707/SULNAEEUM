import { useAppSelector } from '@/hooks'
import { drinkDetail } from '@/store/drinkSlice'
import { DrinkTasteType } from '@/types/DataTypes'
import React, { useState } from 'react'
import DrinkChart from './RadarChart'
import { RxInfoCircled } from 'react-icons/rx'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { useRouter } from 'next/dist/client/router'

export default function DrinkRelation() {
  const [tip, setTip] = useState<boolean>(false)

  const drink = useAppSelector(drinkDetail)
  const detail = drink['drinkDetailDto']
  const similar = drink['similarDrinkDto']
  const drinkTaste: DrinkTasteType = {
    tasteRefresh: detail.tasteRefresh,
    tasteBody: detail.tasteBody,
    tasteFlavor: detail.tasteFlavor,
    tasteSweet: detail.tasteSweet,
    tasteSour: detail.tasteSour,
    tasteThroat: detail.tasteThroat
  }
  const router = useRouter()
  const similarDrink = (drinkId: number) => {
    router.push(`/list/${drinkId}`)
  }

  return (
    <div className={'flex w-7/12 justify-between'}>
      <div className={'flex w-[30%] flex-col items-center'}>
        <div className={'font-preM text-[20px] mb-2'}>추천 안주</div>
        <img className={'w-full'} src="/images/pattern2.png" />
        {detail.dishName.length != 0 ?
          <div className={'mt-8 text-[18px]'}>◻ {detail.dishName}</div>
          :
          <div className={'mt-8 text-[18px]'}>추천하는 안주가 없습니다.</div>
        }
      </div>
      <div className={'flex w-[30%] flex-col items-center'}>
        <div className={'flex items-center mb-2'}>
          <div className={'flex items-center font-preM text-[20px] mr-2'}>맛 그래프
            <RxInfoCircled className={'peer text-[20px] ml-2 text-zinc-400 cursor-pointer'} />
            <div className={`absolute top-[500px] text-[16px] left-[850px] opacity-0 peer-hover:opacity-100 transition-opacity font-preEL bg-zinc-900/80 text-white py-1 px-4`}>회원 리뷰 기반의 보정된 데이터를 제공합니다.</div>
          </div>
        </div>
        <img className={'w-full'} src="/images/pattern2.png" />
        <div className={'flex flex-col items-center w-full h-[300px] mt-8'}>
          <DrinkChart drink={drinkTaste} />
        </div>
      </div>
      <div className={'flex w-[30%] flex-col items-center'}>
        <div className={'font-preM text-[20px] mb-2'}>비슷한 술</div>
        <img className={'w-full'} src="/images/pattern2.png" />
        <div className={'flex flex-col items-center mt-8'}>
          <img className={'h-[180px]'} src={similar.drinkImage} />
          <div className={'font-preR text-[20px] mt-4'}>{similar.drinkName}</div>
          <div>{similar.drinkLevel}% | {similar.drinkAmount}</div>
          <div onClick={() => { similarDrink(similar.drinkId) }} className={"flex justify-center items-center rounded-full mt-3 px-4 py-2 text-[14px] cursor-pointer bg-zinc-100 hover:bg-zinc-200"}><HiMagnifyingGlass className={'mr-2'} />자세히 보러가기</div>
        </div>
      </div>
    </div>
  )
}
