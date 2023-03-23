import React, { useState } from 'react'
import { DrinkList } from '@/components/list/drinkTable'

export default function List() {
  const typeArr : Array<string> = ['전체', '약주 / 청주', '탁주', '과실주', '증류주', '기타']
  const sortArr : string[] = ['이름', '인기', '높은도수', '낮은도수']
  const [type, setType] = useState(0)
  const [sort, setSort] = useState<string>('이름')
  return (
    <>
      <div className={'py-20 w-full flex bg-[url("/images/pattern1.png")] bg-no-repeat bg-[left_-17rem_bottom_-17rem]'}>
        <div className={'w-1/5 mt-20 mx-10 flex flex-col items-end font-preM text-[24px] text-zinc-400'}>
          {typeArr.map((a, index)=>{
            return ( <div onClick={()=>{setType(index)}} className={`${type == index && 'text-[36px] font-preEB text-[#655442]'} flex items-center cursor-pointer h-[60px] hover:text-[36px] hover:font-preEB hover:text-[#655442]`} key={index}>{a}</div> )
          })}
        </div>
        <div className={'w-[60%] ml-20'}>
          <div className={'flex items-center justify-end px-10 h-[70px]'}>
            {sortArr.map((item, index)=>{
              return (<div onClick={()=>{setSort(item)}} key={index} className={`mx-2 cursor-pointer ${sort == item ? 'text-[18px] font-preM text-[#665442]' : 'text-[16px] font-preL'}`}>{item}순</div>)
            })}
          </div>
          <div className={'h-[750px] overflow-y-scroll bg-[#F5F5F5]/70 scroll'}>
            <DrinkList drinkType={typeArr[type]} sortType={sort}></DrinkList>
          </div>
        </div>
      </div>
    </>
  )
}
