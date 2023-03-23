import { DrinkDetailType } from '@/types/DataTypes'
import React from 'react'

export const drinkExplain = (props: {drink : DrinkDetailType}) => {
    const {drink} = props
  return (
    <div className={'w-full'}>
        <div className={'flex justify-between'}>
            <div>{drink.drinkName}</div>
            <div></div>
        </div>
        <hr />
    </div>
  )
}
