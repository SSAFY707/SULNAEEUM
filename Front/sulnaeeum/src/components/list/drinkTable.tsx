import { Drink } from '@/types/DataTypes'
import {DrinkTableElement} from './drinkTableItem'
import React, { useEffect, useState } from 'react'
import { getDrinkList, getDrinkListForUser } from '@/api/auth'

export const DrinkList = (props: {drinkType: string, sortType : string}) => {
  const {drinkType, sortType} = props
  const [list, setList] = useState<Drink[]>([])

  const tmpList : Drink[] = [
    {drinkId: 0,
      drinkName: '남산애 레드와인',
      drinkImage: '/images/jubti/drink/남산애 레드와인.png',
      drinkAmount: '500mL',
      drinkLevel: 6,
      like: true,
      popularity: 0,},
    {drinkId: 1,
      drinkName: '단홍',
      drinkImage: '/images/jubti/drink/단홍.png',
      drinkAmount: '770mL',
      drinkLevel: 13,
      like: false,
      popularity: 0,},
    {drinkId: 2,
      drinkName: '도깨비술 11',
      drinkImage: '/images/jubti/drink/도깨비술 11.png',
      drinkAmount: '450mL',
      drinkLevel: 33,
      like: false,
      popularity: 0,},
    {drinkId: 0,
      drinkName: '얼떨결에',
      drinkImage: '/images/jubti/drink/얼떨결에.png',
      drinkAmount: '440mL',
      drinkLevel: 8,
      like: true,
      popularity: 0,},
  ]
  const getList =async () => {
    setList(tmpList)
  }

  useEffect(()=>{
    getList()
  },[])


  // const getList = async () => {
  //   if(sessionStorage.getItem('isLogin')){
  //     setList(await getDrinkListForUser(drinkType, sortType))
  //   }else{
  //     setList(await getDrinkList(drinkType, sortType))
  //   }
  // }
 
  // useEffect(()=>{
  //   getList()
  // },[sortType])

  return (
    <>
      <div className={'grid grid-cols-2 px-20 gap-10'}>
        {list.map((item, index)=>{
          return (
              <DrinkTableElement key={index} drink={item} />   
          )
        })}
      </div>
    </>
  )
}
