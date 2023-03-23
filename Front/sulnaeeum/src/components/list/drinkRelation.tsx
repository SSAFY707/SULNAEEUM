import React from 'react'

export default function DrinkRelation() {
  return (
    <div className={'flex w-7/12'}>
        <div className={'flex w-1/2 flex-col items-center mx-10'}>
            <div className={'font-preM text-[20px] mb-2'}>맛 그래프</div>
            <img className={'w-full'} src="/images/pattern2.png" />
        </div>
        <div className={'flex w-1/2 flex-col items-center mx-10'}>
            <div className={'font-preM text-[20px] mb-2'}>추천 안주 목록</div>
            <img className={'w-full'} src="/images/pattern2.png" />
        </div>
        <div></div>
    </div>
  )
}
