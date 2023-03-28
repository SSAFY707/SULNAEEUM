import {DrinkTableElement} from './drinkTableItem'
import React, { useEffect, useState } from 'react'
// import { getDrinkList, getDrinkListForUser } from '@/api/auth'
import { DrinkListType } from '@/types/DrinkType'
import { RootState } from '@/store'
import { drinkList, getDrinkList } from '@/store/drinkSlice'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { useRouter } from 'next/dist/client/router'
import { FaRegBookmark, FaBookmark } from 'react-icons/fa'
import { ClearFalse, ClearTrue } from './clearBtn'
import { drinkLike } from '@/api/auth'

export const DrinkList = (props: {drinkType: string, sortType : string}) => {
  const {drinkType, sortType} = props
  // const [list, setList] = useState<DrinkListType[]>([])
  
  const typeToIdx = {
    '전체' : 0,
    '탁주' : 1,
    '약주/청주' : 2,
    '과실주' : 3,
    '증류주' : 4,
    '기타' : 5,
  }
  const list = useAppSelector(drinkList)
  // const getList = async () => {
  //   const typeId : number = typeToIdx[drinkType]
  //   if(sessionStorage.getItem('isLogin')){
  //     setList(await getDrinkListForUser(typeId, sortType))
  //   }else{
  //     setList(await getDrinkList(typeId, sortType))
  //   }
  // }
 
  // useEffect(()=>{
  //   getList()
  // },[drinkType, sortType])

  // const [item, setItem] = useState<DrinkListType>(drink)
  const like = (event) => {
    // 이벤트 버블링을 막는 코드
    event.stopPropagation() 
    console.log('찜~')
    // const copy = {...item}
    // copy.like = !copy.like
    // setItem(copy)
    // drinkLike(drink.drinkId)
  }
  const move = (drinkId : number) => {
    router.push(`/list/${drinkId}`)
  }


  type Data = {
    [index : string] : number | string,
    typeId : number,
    sort : string
  }
  const dispatch = useAppDispatch()
  const router = useRouter()
  useEffect(()=>{
    const data : Data = {
      typeId : typeToIdx[drinkType],
      sort : sortType
    }
    dispatch(getDrinkList(data))
  },[drinkType, sortType, dispatch])

  return (
    <>
      <div className={'grid grid-cols-4 px-3 py-2 gap-y-2'}>
        {list.map((item, index)=>{
          return (
            <div key={index} className={'flex w-full justify-center items-center h-[360px]'}>
              <div onClick={()=>move(item.drinkId)} className={'group flex flex-col items-center bg-white p-4 cursor-pointer w-[95%] h-[350px] border rounded-xl hover:w-full hover:h-[360px] shadow-sm hover:shadow-lg'}>
                <div className={'w-full flex justify-end'}>
                  {item.like ? <FaBookmark onClick={like} className={'cursor-pointer text-[20px] text-[#655422]'} /> : <FaRegBookmark onClick={like} className={'cursor-pointer text-[20px] text-[#655422]'} />}
                </div>
                <div className={'w-full h-[46%] flex justify-center items-center mb-4'}><img className={'h-full'} src={item.drinkImage} /></div>
                <div className={'flex justify-center items-center text-center text-[22px] font-preR group-hover:font-preM'}>{item.drinkName}</div>
                <div className={'mb-4 text-center'}>{item.drinkLevel}% | {item.drinkAmount}</div>
                {item.like ? <ClearTrue /> : <ClearFalse />}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
