import { Drink, DrinkDetailType } from '@/types/DataTypes'
import { IoCall } from 'react-icons/io5'
import { HiMap } from 'react-icons/hi'
import { FaRegBookmark, FaBookmark } from 'react-icons/fa'

import React from 'react'
// import JumakMap from './jumakMap'
import dynamic from 'next/dynamic'

const JumakMap = dynamic(()=> import('./jumakMap'), {ssr: false});

export default function DrinkJumak(props: {drink: DrinkDetailType}) {
    const {drink} = props
    const jumaks = [
        {name: '피곤해죽어식당', num: '010-1234-5678', address: '테헤란로23 멀티캠퍼스 14층'},
        {name: '쉬폰케익가게', num: '010-1111-2222', address: '테헤란로23 멀티캠퍼스 11층'},
        {name: '김식당', num: '010-0101-2929', address: '테헤란로21 바나프레소'},
        {name: '피곤해죽어식당', num: '010-1234-5678', address: '테헤란로23 멀티캠퍼스 14층'},
        {name: '쉬폰케익가게', num: '010-1111-2222', address: '테헤란로23 멀티캠퍼스 11층'},
        {name: '김식당', num: '010-0101-2929', address: '테헤란로21 바나프레소'}
    ]
  return (
    <div className={'w-7/12 h-[700px] mt-[200px]'}>
        <div className={'flex justify-between items-end'}>
            <div className={'text-[20px] pl-2 font-preR'}><span className={'font-mj text-[40px] mr-2'}>{drink.drinkName}</span>을(를) 판매하는 식당</div>
            <div className={'flex justify-center items-center mb-4 mr-4 rounded text-white h-3/4 p-2 bg-[#78C3DC] hover:bg-[#60A5BC] cursor-pointer'}>판매처 등록하기</div>
        </div>
        <hr className={'border-[#D3D3D3] border-1 mb-10'} />
        <div className={'flex w-full h-[600px]'}>
            <JumakMap latitude={255} longitude={42} />
            <div className={'w-1/2 ml-4 h-[500px] overflow-y-scroll pr-4 scroll'}>
                {jumaks.map((v, i)=>{
                    return (
                        <div key={i} className={'w-full h-[140px] bg-zinc-100/70 rounded-lg p-5 mb-4 text-[#393939] hover:bg-zinc-100 cursor-pointer'}>
                            <div className={'flex justify-between'}>
                                <div className={'font-preM text-[24px] mb-2'}>{v.name}</div>
                                <FaRegBookmark className={'text-[20px] text-[#655442] cursor-pointer'}/>
                            </div>
                            <div className={'flex items-center'}><IoCall className={'mr-2'} />{v.num}</div>
                            <div className={'flex items-center'}><HiMap className={'mr-2'} />{v.address}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
