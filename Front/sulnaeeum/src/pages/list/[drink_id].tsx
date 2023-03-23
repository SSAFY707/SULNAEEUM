import { getDrinkDetail, getDrinkDetailForUser } from '@/api/auth'
import { ClearBtn, ClearFalse, ClearTrue } from '@/components/list/clearBtn'
import { DrinkExplain } from '@/components/list/drinkExplain'
import { DrinkDetailType } from '@/types/DataTypes'
import { Modal } from '@/components/common/modal'
import React, { useState, useEffect } from 'react'
import DrinkRelation from '@/components/list/drinkRelation'

export default function Detail(props: {drinkId : number}) {
  const { drinkId } = props
  
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
      {id: '나현짱', rate: 5, content: '키키키키키키좋아라'},
      {id: '미히짱', rate: 5, content: '맛있어여'},
      {id: '하늘짱', rate: 5, content: '뀨우ㅜ우우우우ㅜ우ㅜㅅ'},
      {id: '설히짱', rate: 5, content: '우와앙아ㅏ앙'},
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
  // const [open, setOpen] = useState<boolean>(false)
  // const modalOpen = () => {
  //   setOpen(!open) 
  // };

  
  return (
    <>
      <div className={'bg-[url("/images/pattern1.png")] bg-no-repeat bg-[left_-17rem_bottom_20rem] h-[1500px]'}>
        <div className={'flex pt-[100px] justify-center'}>
          <DrinkExplain drink={drink} />  
        </div>
        <div className={'flex mt-4 p-10 justify-center h-[500px]'}>
          <DrinkRelation />
        </div>
        <div className={'h-[600px] bg-zinc-200/50'}></div>
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