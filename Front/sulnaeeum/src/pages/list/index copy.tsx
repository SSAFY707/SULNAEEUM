import React, { useState } from 'react'
import { DrinkList } from '@/components/list/drinkTable'

export default function List() {
  const typeArr : Array<string> = ['전체', '약주 / 청주', '탁주', '과실주', '증류주', '기타']
  const [type, setType] = useState(0)
  const [sort, setSort] = useState<string>('이름')
  return (
    <>
      <div className={'py-20 w-full flex bg-[url("/images/pattern1.png")] bg-no-repeat bg-[left_-17rem_bottom_-17rem]'}>
        <div className={'w-1/6 mt-20 flex flex-col items-end font-preM text-[24px] text-zinc-400'}>
          {typeArr.map((a, index)=>{
            return ( <div onClick={()=>{setType(index)}} className={`${type == index && 'text-[36px] font-preEB text-[#655442]'} flex items-center cursor-pointer h-[60px] hover:text-[36px] hover:font-preEB hover:text-[#655442]`} key={index}>{a}</div> )
          })}
        </div>
        <div className={'w-[72%] ml-20'}>
          <div className={'flex items-center justify-end px-10 h-[70px]'}>정렬이 들어갈 곳</div>
          <div className={'h-[700px] overflow-y-scroll scroll'}>
            <DrinkList drinkType={typeArr[type]} sortType={sort}></DrinkList>
          </div>
        </div>
      </div>
    </>
  )
}
