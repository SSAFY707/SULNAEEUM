import { ReviewType } from '@/types/DataTypes'
import React from 'react'
import { Rating, StarRate } from '../common/Rating';

export default function DrinkReviewItem(props: {review: ReviewType}) {
    const {review} = props;
    return (
    <div className={'flex flex-col w-1/3 bg-white rounded-lg mx-4 p-8'}>
        <div className={'flex justify-center mb-2'}><StarRate size='30px' rate={review.rate as number}/></div>
        <div className={'h-2/3 mb-5 overflow-hidden'}>{review.content}</div>
        <div className={'flex items-center'}>
            <img className={'h-[40px] rounded-full mr-4'} src={review.userImage as string} />
            <div className={'font-preR text-[18px]'}>{review.id}</div>
        </div>
    </div>
  )
}
