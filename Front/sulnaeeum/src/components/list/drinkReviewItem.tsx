import React from 'react'
import { StarRate } from '../common/Rating';
import { ReviewResType } from '@/types/DrinkType';

export default function DrinkReviewItem(props: {review: ReviewResType}) {
    const {review} = props;
    return (
    <div className={'flex flex-col w-11/12 bg-white rounded-lg mx-4 p-8'}>
        <div className={'flex justify-center mb-2'}><StarRate size='30px' rate={review.score}/></div>
        <div className={'h-2/3 mb-5 overflow-hidden'}>{review.content}</div>
        <div className={'flex items-center'}>
            <div className={'h-[40px] w-[40px] rounded-full overflow-hidden mr-4'}>
                <img className={'h-full w-full object-cover'} src={review.userImg} />
            </div>
            <div className={'font-preR text-[18px]'}>{review.userNickName}</div>
        </div>
    </div>
  )
}
