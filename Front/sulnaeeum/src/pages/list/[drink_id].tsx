import { getDrinkDetail, getDrinkDetailForUser } from '@/api/auth'
import { DrinkExplain } from '@/components/list/drinkExplain'
import { DrinkDetailType } from '@/types/DataTypes'
import React, { useState, useEffect } from 'react'
import DrinkRelation from '@/components/list/drinkRelation'
import DrinkReviews from '@/components/list/drinkReviews'
import DrinkJumak from '@/components/list/drinkJumak'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { useRouter } from 'next/router'

export default function Detail(props: {drinkId : number}) {
  const { drinkId } = props
  const router = useRouter()

  const data : DrinkDetailType = {
    drinkId: 0,
    drinkName: '단홍',
    drinkInfo: '어쩌라고의반복',
    drinkImage: '/images/jubti/drink/단홍.png',
    drinkSaleUrl: 'www.naver.com',
    drinkPrice: '2800원',
    drinkAmount: '300ml',
    drinkLevel: 16,
    drinkType: 1,
    drinkReviews: [
      {userName: '설히짱', userImage: '/images/kakao.png', rate: 5, content: '키키키키키키좋아키키키키키좋아키키키키키좋아키키키키키좋아키키키키키좋아키키키키키좋아키키키키키좋아키키키키키좋아키키키키키좋아키키키키키좋아키키키키키좋아키키키키키좋아키키키키키좋아키키키키키좋아키키키키키좋아키키키키키좋아키키키키키좋아키키키키키좋아키키키키키좋아키키키키키좋아키키키키키좋아키키키키키좋아키키키키'},
      {userName: '미히짱', userImage: '/images/kakao.png', rate: 2, content: '맛있어여'},
      {userName: '하늘짱', userImage: '/images/kakao.png', rate: 3, content: '뀨우ㅜ우우우우ㅜ우ㅜㅅ'},
      {userName: '나현짱', userImage: '/images/kakao.png', rate: 5, content: '우와앙아ㅏ앙'},
      {userName: '성훙짱', userImage: '/images/kakao.png', rate: 5, content: '우와앙아ㅏ앙'},
      {userName: '웡규짱', userImage: '/images/kakao.png', rate: 5, content: '우와앙아ㅏ앙'},
    ]
  }
  const [drink, setDrink] = useState<DrinkDetailType>(data)
  
  // const getDrinkInfo = async () => {
  //   if(sessionStorage.getItem('isLogin')){
  //     setDrink(await getDrinkDetailForUser(drinkId))
  //   }else {
  //     setDrink(await getDrinkDetail(drinkId))
  //   }
  // }

  // useEffect(() => {
  //   getDrinkInfo()
  // }, [])

  
  return (
    <>
      <div className={'bg-[url("/images/pattern1.png")] bg-no-repeat bg-[left_-17rem_bottom_20rem] h-[1500px]'}>
        <div className={'flex pt-[100px] justify-center'}>
          <BsArrowLeftCircle onClick={()=>{router.back()}} className={'text-[34px] text-[#655443] cursor-pointer mt-2 mr-4'} />
          <DrinkExplain drink={drink} /> 
        </div>
        <div className={'flex mt-4 p-10 justify-center h-[500px]'}>
          <DrinkRelation />
        </div>
        <div className={'flex justify-center items-center h-[500px] bg-zinc-200/50'}>
          <DrinkReviews reviews={drink.drinkReviews} />
        </div>
        <div className={'flex justify-center h-[800px]'}>
          <DrinkJumak drink={drink} />
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