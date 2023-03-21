import React, { useState } from 'react'

export default function List() {
  const arr : Array<string> = ['전체', '약주 / 청주', '탁주', '과실주', '증류주', '기타']
  const [type, setType] = useState(0)
  return (
    <>
      <div className={'py-20 w-full flex'}>
        <div className={'w-1/5 mt-8 flex flex-col items-end font-preM text-[30px] text-zinc-400'}>
          {arr.map((a, index)=>{
            return ( <div className={`${type == index && 'text-[40px] font-preEB text-[#655442]'} flex items-center cursor-pointer h-[70px] hover:text-[40px] hover:font-preEB hover:text-[#655442]`} key={index}>{a}</div> )
          })}
        </div>
        <div className={'w-3/4'}></div>
      </div>
    </>
  )
}
