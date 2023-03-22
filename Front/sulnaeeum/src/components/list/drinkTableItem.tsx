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
    <div className={'flex py-4 cursor-pointer w-11/12 h-[200px] border rounded-xl hover:w-full hover:h-[210px] hover:shadow-md'}>
      <div className={'w-2/5 flex justify-center items-center'}><img className={'h-[160px]'} src={item.drinkImage} /></div>
      <div className={'w-2/5 flex flex-col mt-10 items-end'}>
        <div className={'text-[26px] font-preR text-end'}>{item.drinkName}</div>
        <div>{item.drinkLevel}% | {item.drinkAmount}</div>
      </div>
      {item.like ? <FaBookmark onClick={like} className={'ml-10 mt-4 cursor-pointer text-[20px] text-[#655422]'} /> : <FaRegBookmark onClick={like} className={'ml-10 mt-4 cursor-pointer text-[20px] text-[#655422]'} />}
    </div>
  )
}
