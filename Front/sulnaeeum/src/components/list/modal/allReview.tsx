import { DetailRate, StarRate } from '@/components/common/Rating'
import { useAppSelector } from '@/hooks';
import { drinkDetail, myReview } from '@/store/drinkSlice';
import { ReviewResType } from '@/types/DrinkType';
import React, { useEffect, useState } from 'react'
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr'

export default function AllReview(props: {modalOpen : any}) {
    const {modalOpen} = props
    const [login, setLogin] = useState<boolean>(false)
    const [mine, setMine] = useState<boolean>(false);

    const drink = useAppSelector(drinkDetail)
    const itsMine = useAppSelector(myReview)
    const reviews : ReviewResType[] = drink['reviewResponseDto'];

    useEffect(()=>{
      const isLogin = sessionStorage.getItem('isLogin')
      if(isLogin){
        setLogin(true)
      }
    },[])

  return (
      <div className={'w-full h-full'}>
        <div className={'flex flex-col border-b'}>
          <div className={'flex justify-between items-center px-16 w-full h-[140px]'}>
            <div className={'flex mr-4 text-[20px]'}>총 {reviews.length}개의 리뷰</div>
            <div className={'flex items-center'}>
              <DetailRate rate={drink.drinkDetailDto.avgScore / 5 * 100} size='44px' />
              <div className={'flex items-center ml-8 mr-4'}>
                <div className={'flex h-full items-end text-[38px] font-preB'}>{(drink.drinkDetailDto.avgScore).toFixed(1)}</div>
                <div className={'flex items-end h-[40px] font-preR'}>/ 5.0</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {login ?
          <div onClick={()=>{setMine(!mine)}} className={`mt-6 mb-4 mr-10 flex justify-end items-center cursor-pointer`}>{mine ? <GrCheckboxSelected className={'mr-2'} /> : <GrCheckbox className={'mr-2'} />}내 리뷰보기</div>
          :<div className={`mt-6 mb-4 h-[16px]`}></div>
          }
          <div className={`${mine && 'hidden'} flex flex-col items-center h-[500px] w-[98%] overflow-y-scroll scroll`}>
            {reviews.length != 0 && 
            reviews.map((v, i)=>{
              return (
                <div className={'w-11/12 ml-4 p-4 mb-6 bg-zinc-100/70 rounded-lg'} key={i}>
                  <div className={'flex items-center mb-2'}>
                    <div className={'h-[40px] w-[40px] rounded-full overflow-hidden mr-4'}>
                        <img className={'h-full w-full object-cover'} src={v.userImg} />
                    </div>
                    <div>
                      <div className={'font-preM text-[20px]'}>{v.userNickName}</div>
                      <StarRate rate={v.score} size='18px' />
                    </div>
                  </div>
                  <div>{v.content}</div>
                </div>
              )
            })}
            {reviews.length == 0 &&
            <div className={`w-full px-10 h-[500px] text-[18px]`}>
              <div >등록된 리뷰가 없습니다.</div>
            </div>
            }
          </div>
          <div className={`${!mine && 'hidden'} pl-5 h-[500px]`}>
            {itsMine ? 
              <div className={'w-11/12 ml-4 p-4 mb-6 bg-zinc-100/70 rounded-lg'} >
                <div className={'flex items-center mb-2'}>
                  <div className={'h-[40px] w-[40px] rounded-full overflow-hidden mr-4'}>
                      <img className={'h-full w-full object-cover'} src={itsMine.userImg} />
                  </div>
                  <div>
                    <div className={'font-preM text-[20px]'}>{itsMine.userNickName}</div>
                    <StarRate rate={itsMine.score} size='18px' />
                  </div>
                </div>
                <div>{itsMine.content}</div>
              </div>:
            <div className='text-[18px] ml-8'>등록된 리뷰가 없습니다.</div>}
          </div>
        </div>
        <div onClick={modalOpen} className={'flex items-center w-full cursor-pointer justify-center text-[18px]'}>
          <div className={'w-5/6 h-[60px] flex justify-center items-center border bg-[#655443] hover:bg-[#5B4D3E] rounded-md text-white'}>닫기</div>
        </div>
    </div>
  )
}
