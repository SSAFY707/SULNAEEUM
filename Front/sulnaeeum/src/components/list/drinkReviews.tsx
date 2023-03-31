import React, { useState } from 'react'
import { Modal } from '../common/modal';
import DrinkReviewItem from './drinkReviewItem'
import AllReview from './modal/allReview';
import { useAppSelector } from '@/hooks';
import { drinkDetail } from '@/store/drinkSlice';
import { ReviewResType } from '@/types/DrinkType';

export default function DrinkReviews() {
  const drink = useAppSelector(drinkDetail)
  const reviews : ReviewResType[] = drink['reviewResponseDto'];
  const [open, setOpen] = useState(false)
  const modalOpen = () => {
    setOpen(!open)
  }
  return (
    <div className={'flex flex-col justify-center w-7/12 h-4/5'}>
      <Modal w='700px' h='800px' modalOpen={modalOpen} open={open}>
        < AllReview modalOpen={modalOpen} />
      </ Modal>
      <div className={'flex items-end justify-between mb-6'}>
        <div className={'flex items-center'}>
          <div className={'font-preM text-[20px] mr-6'}>평균 평점</div>
          <div className={'font-preB text-[30px] mr-2'}>{(drink.drinkDetailDto.avgScore).toFixed(1)}</div>
          <div className={'flex pt-2 text-[18px]'}> / 5.0</div>
        </div>
        <div onClick={modalOpen} className={'flex h-[20px] underline decoration-1 mb-1 mr-4 cursor-pointer hover:text-[18px]'}>{drink.drinkDetailDto.reviewCnt}개의 리뷰 더보기</div>
      </div>
      <div className={'flex h-[300px] grid grid-cols-3'}>
        {reviews.slice(0,3).map((r, index)=>{
          return <DrinkReviewItem key={index} review={r}/>
        })}
      </div>
    </div>
  )
}