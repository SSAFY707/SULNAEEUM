import { Drink } from '@/types/DataTypes'
import React from 'react'

export const DrinkTableElement = (props: {drink : Drink}) => {
  const {drink} = props
  return (
    <div className={'flex border rounded'}>
      <div><img src={drink.drinkImage} /></div>
      <div className={'flex flex-col items-end'}>
        <div className={'text-[20px] font-pre'}>{drink.drinkName}</div>
        <div>{drink.drinkLevel}% | {drink.drinkAmount}</div>
      </div>
    </div>
  )
}
