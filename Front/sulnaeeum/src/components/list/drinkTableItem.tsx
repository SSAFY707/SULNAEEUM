import { Drink } from '@/types/DataTypes'
import { FaRegBookmark, FaBookmark } from 'react-icons/fa'
import React, { useState } from 'react'

export const DrinkTableElement = (props: {drink : Drink}) => {
  const {drink} = props
  const [item, setItem] = useState<Drink>(drink)
  const like = () => {
    const copy = {...item}
    copy.like = !copy.like
    setItem(copy)
  }

  return (
    <div className={'flex cursor-pointer w-full h-[200px] border rounded-xl'}>
      <div className={'w-1/2 flex justify-center items-center'}><img className={'h-[180px]'} src={item.drinkImage} /></div>
      <div className={'w-1/3 flex flex-col mt-10 items-end'}>
        <div className={'text-[26px] font-preR text-end'}>{item.drinkName}</div>
        <div>{item.drinkLevel}% | {item.drinkAmount}</div>
      </div>
      {item.like ? <FaBookmark onClick={like} className={'ml-8 mt-4 cursor-pointer text-[20px] text-[#655422]'} /> : <FaRegBookmark onClick={like} className={'ml-8 mt-4 cursor-pointer text-[20px] text-[#655422]'} />}
    </div>
  )
}
