import { DrinkDetailType } from '@/types/DataTypes'
import React, { useEffect, useState } from 'react'
import { ClearBtn, ClearFalse, ClearTrue } from './clearBtn'
import { Modal } from '../common/modal'
import DrinkClear from './modal/drinkClear'
import { useAppSelector } from '@/hooks'
import { drinkDetail } from '@/store/drinkSlice'

export const DrinkExplain = () => {
    const drink = useAppSelector(drinkDetail)
    const detail = drink['drinkDetailDto']
    const [open, setOpen] = useState<boolean>(false)
    const [login, setLogin] = useState<boolean>(false)
    const modalOpen = () => {
      setOpen(!open) 
    };
    useEffect(()=>{
      const isLogin = sessionStorage.getItem('isLogin')
      if(isLogin) setLogin(true)
    },[])

  return (
    <div className={'w-7/12 mb-4'}>
        <Modal w='500px' h='auto' open={open} modalOpen={modalOpen}>
          <DrinkClear drinkId={detail.drinkId} drinkName={detail.drinkName} modalOpen={modalOpen}/>
        </Modal>
        <div className={'flex justify-between items-center pl-8 pr-1'}>
            <div className={'flex items-end text-[16px] font-preEL'}>
              <div className={'mr-4 text-[34px] font-preR'}>{detail.drinkName}</div>
              <div className={'pb-1'}>{detail.drinkLevel}% | {detail.drinkAmount}</div> 
            </div>
            {login && detail.clear ? <div className={'text-zinc-400 mt-2'}>클리어 완료</div> :
            <div onClick={modalOpen} className={'cursor-pointer mt-2 hover:bg-zinc-200 py-2 px-4 rounded-full'}>
              클리어하기
            </div>  
          }
        </div>
        <hr className={'border-xs border-zinc-300 mt-2 mb-10'} />
        <div className={'flex'}>
          <div className={'flex justify-center w-1/3 h-[280px]'}><img className={'h-full'} src={detail.drinkImage} alt="" /></div>
          <div className={'w-2/3 py-2'}>
            {detail.drinkInfo.length !=0?
            <div className={'flex items-center p-5 rounded-lg bg-zinc-100'}>{detail.drinkInfo}</div>
            :
            <div className={'flex items-center p-5 rounded-lg bg-zinc-100'}>자세한 설명이 없습니다.</div>
            }
            <div className={'flex px-5 mt-8 items-center'}>
              <div className={'w-1/6 font-preM text-[18px] text-zinc-500'}>재료</div><div className={'font-preB text-[18px] text-zinc-500 mr-4'}>|</div>
              <div>{detail.ingredient.map((i)=>{return `${i} `})}</div>
            </div>
            <div className={'flex px-5 mt-4 items-center'}>
              <div className={'w-1/6 font-preM text-[18px] text-zinc-500'}>관련 사이트</div><div className={'font-preB text-[18px] text-zinc-500 mr-4'}>|</div>
              {detail.drinkSaleUrl.length != 0 ?
              <a className={'w-4/5 underline'} target='_blank' href={detail.drinkSaleUrl}>{detail.drinkSaleUrl}</a>
              :
              <div>관련 사이트가 없습니다.</div>
              }
            </div>
          </div>
        </div>
    </div>
  )
}
