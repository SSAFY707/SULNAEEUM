import {DrinkTableElement} from './drinkTableItem'
import React, { useEffect, useState } from 'react'
import { getDrinkList, getDrinkListForUser } from '@/api/auth'
import { DrinkListType } from '@/types/DrinkType'

export const DrinkList = (props: {drinkType: string, sortType : string}) => {
  const {drinkType, sortType} = props
  const [list, setList] = useState<DrinkListType[]>([])
  
  const typeToIdx = {
    '전체' : 0,
    '탁주' : 1,
    '약주/청주' : 2,
    '과실주' : 3,
    '증류주' : 4,
    '기타' : 5,
  }

  const getList = async () => {
    const typeId : number = typeToIdx[drinkType]
    if(sessionStorage.getItem('isLogin')){
      setList(await getDrinkListForUser(typeId, sortType))
    }else{
      setList(await getDrinkList(typeId, sortType))
    }
  }
 
  useEffect(()=>{
    getList()
  },[drinkType, sortType])

  return (
    <>
      <div className={'grid grid-cols-4 px-3 py-2 gap-y-2'}>
        {list.map((item, index)=>{
          return (
            <div className={'flex w-full justify-center items-center h-[360px]'}>
              <DrinkTableElement key={index} drink={item} />   
            </div>
          )
        })}
      </div>
    </>
  )
}
