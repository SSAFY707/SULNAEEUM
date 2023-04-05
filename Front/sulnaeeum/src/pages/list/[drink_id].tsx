import { drinkDetail, getDrinkDetail, getDrinkDetailForUser, getMyJumakLike, getMyReview } from '@/store/drinkSlice'
import { DrinkExplain } from '@/components/list/drinkExplain'
import React, { useState, useEffect } from 'react'
import DrinkRelation from '@/components/list/drinkRelation'
import DrinkReviews from '@/components/list/drinkReviews'
import DrinkJumak from '@/components/list/drinkJumak'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { FaRegBookmark, FaBookmark } from 'react-icons/fa'
import { setDrinkLikeInDetail } from '@/store/drinkSlice'
import { drinkLike } from '@/api/auth'
import { toastError } from '@/components/common/toast'

export default function Detail(props: {drinkId : number}) {
  const { drinkId } = props
  const router = useRouter()
  const drink = useAppSelector(drinkDetail)

  const dispatch = useAppDispatch()

  useEffect(()=>{
    const isLogin = sessionStorage.getItem('isLogin')
    if(isLogin) {
      dispatch(getDrinkDetailForUser(drinkId))
      dispatch(getMyReview(drinkId))
      dispatch(getMyJumakLike(drinkId))
    }else {
      dispatch(getDrinkDetail(drinkId))
    }
  },[drinkId, dispatch])
  
  const like = () => {
    const isLogin = sessionStorage.getItem('isLogin')
    if(!isLogin) {
      toastError('로그인이 필요한 기능입니다.', '🚨', 'top-right')
    }
    dispatch(setDrinkLikeInDetail())
    drinkLike(drinkId)
  }
  
  return (
    <>
      <div className={'bg-[url("/images/pattern1.png")] bg-no-repeat bg-[left_-17rem_bottom_80rem] h-[2500px]'}>
        <div className={'flex pt-[100px] justify-center'}>
          <BsArrowLeftCircle onClick={()=>{router.back()}} className={'text-[34px] text-[#655443] cursor-pointer mt-2 mr-4'} />
          <DrinkExplain />
          {drink.drinkDetailDto.like ?
          <FaBookmark onClick={()=>like()} className={'text-[22px] text-[#8FAADC] cursor-pointer mt-5 ml-4'} />:
          <FaRegBookmark onClick={()=>like()} className={'text-[22px] text-[#8FAADC] cursor-pointer mt-5 ml-4'}/>}
        </div>
        <div className={'flex mt-10 pl-[35px] justify-center h-[500px]'}>
          <DrinkRelation />
        </div>
        <div className={'flex justify-center items-center h-[500px] bg-zinc-200/50'}>
          <DrinkReviews />
        </div>
        <div className={'flex justify-center h-[800px]'}>
          <DrinkJumak />
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context : any) {
  const drinkId = context.query.drink_id
  return {
    props: {
      drinkId: drinkId
    }
  }
}