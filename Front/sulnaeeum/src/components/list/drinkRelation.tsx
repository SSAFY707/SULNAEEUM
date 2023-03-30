import { DrinkTasteType } from '@/types/DataTypes'
import React from 'react'
import DrinkChart from './RadarChart'

export default function DrinkRelation() {
  const drinkTaste : DrinkTasteType = {
    tasteRefresh : 2,
    tasteBody : 3,
    tasteFlavor : 2,
    tasteSweet : 5,
    tasteSour : 2,
    tasteThroat : 1
  }

  return (
    <div className={'flex w-7/12'}>
        <div className={'flex w-1/2 flex-col items-center mx-10'}>
            <div className={'font-preM text-[20px] mb-2'}>맛 그래프</div>
            <img className={'w-full'} src="/images/pattern2.png" />
            <div className={'w-full h-[300px] mt-8'}>
              <DrinkChart drink={drinkTaste} />
            </div>
        </div>
        <div className={'flex w-1/2 flex-col items-center mx-10'}>
            <div className={'font-preM text-[20px] mb-2'}>추천 안주 목록</div>
            <img className={'w-full'} src="/images/pattern2.png" />
        </div>
        <div></div>
    </div>
  )
}
