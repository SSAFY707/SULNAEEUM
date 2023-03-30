import { DrinkDetailType } from '@/types/DataTypes'
import React, { useState } from 'react'
import { ClearBtn } from './clearBtn'
import { Modal } from '../common/modal'
import DrinkClear from './modal/drinkClear'
import { useAppSelector } from '@/hooks'
import { drinkDetail } from '@/store/drinkSlice'

export const DrinkExplain = (props: {drink : DrinkDetailType}) => {
    const {drink} = props
    const drinkk = useAppSelector(drinkDetail)
    const drinkkk = drinkk['drinkDetailDto']
    const [open, setOpen] = useState<boolean>(false)
    const modalOpen = () => {
      setOpen(!open) 
    };
  return (
    <div className={'w-7/12'}>
        <Modal w='500px' h='auto' open={open} modalOpen={modalOpen}>
          <DrinkClear drinkName={drinkkk.drinkName} modalOpen={modalOpen}/>
        </Modal>
        <div className={'flex justify-between items-center pl-8 pr-4'}>
            <div className={'flex items-end text-[16px] font-preEL'}>
              <div className={'mr-4 text-[34px] font-preR'}>{drinkkk.drinkName}</div>
              {drinkkk.drinkLevel}% | {drinkkk.drinkAmount} 
            </div>
            <div onClick={modalOpen}>
              <ClearBtn />
            </div>
        </div>
        <hr className={'border-xs border-zinc-300 mt-2 mb-10'} />
        <div className={'flex'}>
          <div className={'flex justify-center w-1/3 h-[300px]'}><img className={'h-full'} src={drinkkk.drinkImage} alt="" /></div>
          <div className={'w-2/3 py-2'}>
            <div className={'flex items-center p-2 h-[80px] mb-4 rounded-xl bg-zinc-100'}>{drinkkk.ingredient.map((i)=>{return `${i} `})}</div>
            <div className={'flex items-center p-2 h-[180px] rounded-xl bg-zinc-100'}>{drinkkk.drinkInfo}</div>
          </div>
        </div>
    </div>
  )
}
