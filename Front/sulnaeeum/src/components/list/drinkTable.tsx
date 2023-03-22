import { Drink } from '@/types/DataTypes'
import {DrinkTableElement} from './drinkTableItem'
import React, { useEffect, useState } from 'react'
import { getDrinkList, getDrinkListForUser } from '@/api/auth'

export const drinkList = (props: {sortType : string}) => {
  const {sortType} = props
  const [list, setList] = useState<Drink[]>([])

  const getList = async () => {
    if(sessionStorage.getItem('isLogin')){
      setList(await getDrinkListForUser(sortType))
    }else{
      setList(await getDrinkList(sortType))
    }
  }
 
  useEffect(()=>{
    getList()
  },[sortType])

  return (
    <>
      <div>
        {list.map((item, index)=>{
          return <DrinkTableElement key={index} drink={item} />
        })}
      </div>
    </>
  )
}
