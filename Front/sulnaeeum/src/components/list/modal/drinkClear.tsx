import { Rating } from '@/components/common/Rating'
import React, { useState } from 'react'

export default function DrinkClear(props: {modalOpen}) {
    const {modalOpen} = props
    const [rate, setRate] = useState()
    const [content, setContent] = useState<string>('')
    const clickRadio = (e : any) => {
        setRate(e.target.value)
    }
    const submit = () => {
        alert(`${rate} ${content}`)
    }
  return (
    <div className={'flex flex-col items-center w-full h-full p-4'}>
        <div className={'font-preM text-[28px] mt-4'}>단홍에 대한 평가</div>
        <hr className={'w-full mt-2 border border-1'} />
        <div className={'flex flex-col mt-4 items-center'}>
            <Rating size='60px' clickRadio={clickRadio}/>
        </div>
        <textarea onChange={(e)=>{setContent(e.target.value)}} placeholder='간단한 리뷰를 작성해 주세요.' className={'mt-4 resize-none rounded bg-zinc-100 w-[400px] h-[260px] p-4 text-[18px] focus:outline-none'}>
        </textarea>
        <div className={'flex justify-center w-[400px] mt-8'}>
            <div onClick={modalOpen} className={'flex justify-center items-center cursor-pointer mx-2 w-[100px] h-[50px] border border-[#655442] rounded hover:bg-zinc-100'}>닫기</div>
            <div onClick={submit} className={'flex justify-center items-center cursor-pointer mx-2 w-[100px] h-[50px] rounded text-white bg-[#655442] hover:bg-[#644321]'}>제출하기</div>
        </div>
    </div>
  )
}
