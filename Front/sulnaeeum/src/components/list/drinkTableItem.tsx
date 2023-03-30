import { FaRegBookmark, FaBookmark } from 'react-icons/fa'
import React, { useState } from 'react'
import { ClearFalse, ClearTrue } from './clearBtn'
import { drinkLike } from '@/api/auth'
import { useRouter } from 'next/router'
import { DrinkListType } from '@/types/DrinkType'

export const DrinkTableElement = (props: {drink : DrinkListType}) => {
  const {drink} = props
  const [item, setItem] = useState<DrinkListType>(drink)
  const like = (event) => {
    // 이벤트 버블링을 막는 코드
    event.stopPropagation() 
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
      <div className={'w-full h-[46%] flex justify-center items-center mb-4'}><img className={'h-full'} src={item.drinkImage} /></div>
      <div className={'flex justify-center items-center text-center text-[22px] font-preR group-hover:font-preM'}>{item.drinkName}</div>
      <div className={'mb-4 text-center'}>{item.drinkLevel}% | {item.drinkAmount}</div>
      {item.like ? <ClearTrue /> : <ClearFalse />}
    </div>
  )
}
