import { Drink } from '@/types/DataTypes'
import React from 'react'

export const drinkExplain = (props: {drink : Drink}) => {
    const {drink} = props
  return (
    <div className={'w-full'}>
        <div className={'flex justify-between'}>
            <div>{drink.name}</div>
            <div></div>
        </div>
        <hr />
    </div>
  )
}
