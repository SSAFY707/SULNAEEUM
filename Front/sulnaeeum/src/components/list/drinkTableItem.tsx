import { Drink } from '@/types/DataTypes'
import { RxMagnifyingGlass } from 'react-icons/rx'
import { FaRegBookmark, FaBookmark } from 'react-icons/fa'
import React, { useState } from 'react'
import { ClearBtn, ClearFalse, ClearTrue } from './clearBtn'
import { drinkLike } from '@/api/auth'
import { useRouter } from 'next/router'

export const DrinkTableElement = (props: {drink : Drink}) => {
  const {drink} = props
  const [item, setItem] = useState<Drink>(drink)
  const like = () => {
    const copy = {...item}
    copy.like = !copy.like
    setItem(copy)
    drinkLike(drink.drinkId)
  }
  const router = useRouter()
  const move = () => {
    router.push(`/list/${drink.drinkId}`)
  }

  return (
    <div onClick={move} className={'group flex flex-col items-center bg-white p-4 cursor-pointer w-[95%] h-[350px] border rounded-xl hover:w-full hover:h-[360px] shadow-sm hover:shadow-lg'}>
      <div className={'w-full flex justify-end'}>
        {item.like ? <FaBookmark onClick={like} className={'cursor-pointer text-[20px] text-[#655422]'} /> : <FaRegBookmark onClick={like} className={'cursor-pointer text-[20px] text-[#655422]'} />}
      </div>
      <div className={'w-full h-1/2 flex justify-center items-center mb-4'}><img className={'h-full'} src={item.drinkImage} /></div>
      <div className={'flex items-center text-[24px] font-preR group-hover:font-preM'}>{item.drinkName}<RxMagnifyingGlass className={'ml-2 text-[#B3B3B3] group-hover:text-[#665442]'} /></div>
      <div className={'mb-4'}>{item.drinkLevel}% | {item.drinkAmount}</div>
      {item.like ? <ClearTrue /> : <ClearFalse />}
    </div>
  )
}
