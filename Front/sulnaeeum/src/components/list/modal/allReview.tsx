import { DetailRate, StarRate } from '@/components/common/Rating'
import { ReviewType } from '@/types/DataTypes';
import React, { useState } from 'react'
import { GrCheckbox, GrCheckboxSelected, GrFormClose } from 'react-icons/gr'

export default function AllReview(props: {reviews : ReviewType[], modalOpen}) {
    const {reviews, modalOpen} = props
    const [mine, setMine] = useState<boolean>(false);
    const review = {
      reviewCnt : 34,
      averageRate: 2.5,
    }
  return (
      <div className={'w-full h-full'}>
        <div className={'flex flex-col bg-zinc-100 rounded-t-[10px]'}>
          <div onClick={modalOpen} className={'flex items-center w-full h-[40px] relative z-[1] top-[16px] right-[16px] cursor-pointer justify-end text-[30px] hover:text-[34px]'}><GrFormClose /></div>
          <div className={'flex justify-between items-center px-8 w-full h-[140px] relative top-[-10px]'}>
            <div className={'flex mr-4 text-[20px]'}><div className={'mr-2 underline decoration-1'}>{review.reviewCnt}개의 리뷰</div> 평균 별점</div>
            <div className={'flex items-center'}>
              <DetailRate rate={review.averageRate / 5 * 100} size='50px' />
              <div className={'flex items-center ml-6'}>
                <div className={'flex h-full items-end text-[38px] font-preM'}>{review.averageRate}</div>
                <div className={'flex items-end h-[40px]'}>/ 5.0</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div onClick={()=>{setMine(!mine)}} className={`mt-8 mb-2 mr-6 flex justify-end items-center cursor-pointer`}>{mine ? <GrCheckboxSelected className={'mr-2'} /> : <GrCheckbox className={'mr-2'} />}내 리뷰보기</div>
          <div className={`${mine && 'hidden'} h-[500px] overflow-y-scroll scroll`}>
            {reviews.map((v, i)=>{
              return (
                <div className={'px-8 mb-14'} key={i}>
                  <div className={'flex items-center mb-2'}>
                    <img className={'rounded-full h-[38px] mr-4 mb-1'} src={v.userImage} />
                    <div>
                      <div className={'font-preM text-[20px]'}>{v.userName}</div>
                      <StarRate rate={v.rate} size='18px' />
                    </div>
                  </div>
                  <div>{v.content}</div>
                </div>
              )
            })}
          </div>
          <div className={`${!mine && 'hidden'} p-8`}>
            <div >등록된 리뷰가 없습니다.</div>
          </div>
        </div>
    </div>
  )
}
