import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { DrinkList } from '@/components/list/drinkTable'

export default function List(props: {type: string, sort: string}) {
  const {type, sort} = props
  const router = useRouter()

  const typeArr : Array<string> = ['전체', '탁주', '약주/청주', '과실주', '증류주', '기타']
  const sortArr : string[] = ['이름', '인기', '높은도수', '낮은도수']
  
  const setType = (t : string) => {
    router.push({
      pathname: '/list',
      query: {type: t, sort: '이름'}
    })
  }
  const setSort = (s : string) => {
    router.push({
      pathname: '/list',
      query: {type: type, sort: s}
    })
  }
  return (
    <>
      <div className={'py-20 w-full flex bg-[url("/images/pattern1.png")] bg-no-repeat bg-[left_-17rem_bottom_-17rem]'}>
        <div className={'w-1/6 mt-20 mx-10 flex flex-col items-end font-preM text-[24px] text-zinc-400'}>
          {typeArr.map((a, index)=>{
            return ( <div onClick={()=>setType(a)} className={`${type == typeArr[index] && 'text-[36px] font-preEB text-[#655442]'} flex items-center cursor-pointer h-[60px] hover:text-[36px] hover:font-preEB hover:text-[#655442]`} key={index}>{a}</div> )
          })}
        </div>
        <div className={'w-[62%] ml-20'}>
          <div className={'flex items-center justify-end h-[70px]'}>
            {sortArr.map((item, index)=>{
              return (<div onClick={()=>{setSort(item)}} key={index} className={`mx-2 cursor-pointer ${sort == sortArr[index] ? 'text-[18px] font-preM text-[#665442]' : 'text-[16px] font-preL'}`}>{item}순</div>)
            })}
          </div>
          <div className={'h-[750px] overflow-y-scroll bg-[#F5F5F5]/60 scroll'}>
            <DrinkList drinkType={type} sortType={sort}></DrinkList>
          </div>
        </div>
      </div>
    </>
  )
}


export async function getServerSideProps(context : any) {
  const type = context.query.type
  const sort = context.query.sort
  return {
    props: {
      type: type,
      sort : sort,
    }
  }
}
