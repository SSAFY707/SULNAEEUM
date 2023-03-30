import { ReviewType } from '@/types/DataTypes'
import React, { useState } from 'react'
import { Modal } from '../common/modal';
import DrinkReviewItem from './drinkReviewItem'
import AllReview from './modal/allReview';

export default function DrinkReviews(props: {reviews: ReviewType[]}) {
  const {reviews} = props;
  const [open, setOpen] = useState(false)
  const modalOpen = () => {
    setOpen(!open)
  }
  return (
    <div className={'flex flex-col justify-center w-7/12 h-4/5'}>
      <Modal w='700px' h='800px' modalOpen={modalOpen} open={open}>
        < AllReview reviews={reviews} modalOpen={modalOpen} />
      </ Modal>
      <div onClick={modalOpen} className={'flex justify-end h-[20px] underline decoration-1 mb-4 mr-4 cursor-pointer hover:text-[18px]'}>더보기</div>
      <div className={'flex h-[300px]'}>
        {reviews.slice(0,3).map((r, index)=>{
          return <DrinkReviewItem key={index} review={r}/>
        })}
      </div>
    </div>
  )
}