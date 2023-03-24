import { Drink, DrinkDetailType } from '@/types/DataTypes'
import React from 'react'
// import JumakMap from './jumakMap'
import dynamic from 'next/dynamic'

const JumakMap = dynamic(()=> import('./jumakMap'), {ssr: false});

export default function DrinkJumak(props: {drink: DrinkDetailType}) {
    const {drink} = props
  return (
    <div className={'w-7/12 h-[700px] mt-[200px]'}>
        <div className={'flex justify-between items-end'}>
            <div className={'text-[20px] pl-2 font-preR'}><span className={'font-mj text-[40px] mr-2'}>{drink.drinkName}</span>을(를) 판매하는 식당</div>
            <div className={'flex justify-center items-center mb-4 mr-4 rounded text-white h-3/4 p-2 bg-[#78C3DC] hover:bg-[#60A5BC] cursor-pointer'}>판매처 등록하기</div>
        </div>
        <hr className={'border-[#D3D3D3] border-1'} />
        <div>
            <div>
                <JumakMap latitude={255} longitude={42} />
            </div>
        </div>
    </div>
  )
}
