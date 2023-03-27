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
        <div className={'flex flex-col border-b'}>
          <div className={'flex justify-between items-center px-16 w-full h-[140px]'}>
            <div className={'flex mr-4 text-[20px]'}>총 {review.reviewCnt}개의 리뷰</div>
            <div className={'flex items-center'}>
              <DetailRate rate={review.averageRate / 5 * 100} size='50px' />
              <div className={'flex items-center ml-6'}>
                <div className={'flex h-full items-end text-[38px] font-preB'}>{review.averageRate}</div>
                <div className={'flex items-end h-[40px] font-preR'}>/ 5.0</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div onClick={()=>{setMine(!mine)}} className={`mt-6 mb-4 mr-6 flex justify-end items-center cursor-pointer`}>{mine ? <GrCheckboxSelected className={'mr-2'} /> : <GrCheckbox className={'mr-2'} />}내 리뷰보기</div>
          <div className={`${mine && 'hidden'} flex flex-col items-center h-[500px] w-[98%] overflow-y-scroll scroll`}>
            {reviews.map((v, i)=>{
              return (
                <div className={'w-11/12 p-4 mb-6 bg-zinc-100/70 rounded-lg'} key={i}>
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
          <div className={`${!mine && 'hidden'} p-8 h-[500px]`}>
            <div >등록된 리뷰가 없습니다.</div>
          </div>
        </div>
        <div onClick={modalOpen} className={'flex items-center w-full mt-2 cursor-pointer justify-center text-[18px]'}>
          <div className={'w-[100px] h-[50px] flex justify-center items-center border bg-[#655443] rounded-md text-white'}>닫기</div>
        </div>
    </div>
  )
}
