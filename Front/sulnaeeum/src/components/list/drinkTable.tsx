import React, { useEffect, useState } from 'react'
import { drinkList, getDrinkList } from '@/store/drinkSlice'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { useRouter } from 'next/dist/client/router'
import { FaRegBookmark, FaBookmark } from 'react-icons/fa'
import { ClearFalse, ClearTrue } from './clearBtn'
import { drinkLike } from '@/api/auth'
import { setDrinkLike } from '@/store/drinkSlice'
import { toastError } from '../common/toast'

export const DrinkList = (props: {drinkType: string, sortType : string}) => {
  const {drinkType, sortType} = props

  // 리스트를 가져 오기 위해 보낼 데이터의 type
  type Data = {
    [index : string] : number | string,
    typeId : number,
    sort : string
  }
  
  // type의 이름을 통신용 idx로 변환하기 위해 사용
  const typeToIdx = {
    '전체' : 0,
    '탁주' : 1,
    '약주/청주' : 2,
    '과실주' : 3,
    '증류주' : 4,
    '기타' : 5,
  }

  // redux의 store에서 통신된 list를 가져옴
  const list = useAppSelector(drinkList)


  // 찜을 위해 만든 함수
  const like = (event: any, idx : number, drinkId: number) => {
    event.stopPropagation() // 이벤트 버블링을 막는 코드
    const isLogin = sessionStorage.getItem('isLogin')
    if (!isLogin){
      toastError('로그인이 필요한 기능입니다.', '🚫', 'top-right')
      return
    } 
    dispatch(setDrinkLike(idx))
    drinkLike(drinkId)
  }

  // 디테일 페이지로 이동
  const move = (drinkId : number) => {
    router.push(`/list/${drinkId}`)
  }

  // 페이지가 렌더링 될 때 리스트를 가져옴 ( drinkType, sortType, dispatch가 변경될 때 다시 호출 )
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
                  {item.like ? <FaBookmark onClick={(event)=>like(event, index, item.drinkId)} className={'cursor-pointer text-[20px] text-[#655422]'} /> : <FaRegBookmark onClick={(event)=>like(event, index, item.drinkId)} className={'cursor-pointer text-[20px] text-[#655422]'} />}
                </div>
                <div className={'w-full h-[46%] flex justify-center items-center mb-4'}><img className={'h-full'} src={item.drinkImage} /></div>
                <div className={'flex justify-center items-center text-center text-[22px] font-preR group-hover:font-preM'}>{item.drinkName}</div>
                <div className={'mb-4 text-center'}>{item.drinkLevel}% | {item.drinkAmount}</div>
                {item.clear ? <ClearTrue /> : <ClearFalse />}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
