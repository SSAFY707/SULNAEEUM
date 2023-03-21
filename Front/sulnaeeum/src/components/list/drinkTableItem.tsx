import { Drink } from '@/types/DataTypes'
import React from 'react'

export const DrinkTableElement = (props: {drink : Drink}) => {
  const {drink} = props
  return (
    <div className={'flex cursor-pointer before:content-["???"] before:text-zinc-100 w-full h-[200px] border rounded-xl'}>
      <div className={'w-1/2 flex justify-center items-center'}><img className={'h-[180px]'} src={drink.drinkImage} /></div>
      <div className={'flex flex-col mt-10 items-end'}>
        <div className={'text-[20px] font-pre'}>{drink.drinkName}</div>
        <div>{drink.drinkLevel}% | {drink.drinkAmount}</div>
      </div>
    </div>
  )
}
