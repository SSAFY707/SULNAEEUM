import { Rating } from '@/components/common/Rating'
import React, { useState } from 'react'

export default function DrinkClear(props: {drinkName: string, modalOpen}) {
    const {drinkName, modalOpen} = props
    const [rate, setRate] = useState()
    const [content, setContent] = useState<string>('')

    const drinkTaste = [
        {value: '향', q1: '향이 약해요', q2: '향이 적당해요', q3: '향이 강해요'},
        {value: '단맛', q1: '달지 않아요', q2: '적당히 달아요', q3: '아주 달아요'},
        {value: '신맛', q1: '시지 않아요', q2: '적당히 셔요', q3: '아주 셔요'},
        {value: '목넘김', q1: '부드럽지 않아요', q2: '보통이에요', q3: '부드러워요'},
        {value: '바디감', q1: '가벼워요', q2: '보통이에요', q3: '무거워요'},
        {value: '청량함', q1: '탄산이 없어요', q2: '보통이에요', q3: '탄산이 강해요'},
    ]

    const clickRadio = (e : any) => {
        setRate(e.target.value)
    }
    const submit = () => {
        alert(`${rate} ${content}`)
    }
  return (
    <div className={'flex flex-col items-center w-full h-full p-4'}>
        <div className={'font-preM text-[28px] mt-4'}>{drinkName}에 대한 평가</div>
        <hr className={'w-full mt-2 border border-1'} />
        <div className={'flex flex-col mt-4 items-center'}>
            <Rating size={rate? '50px' : '60px'} clickRadio={clickRadio}/>
        </div>
        <div className={`${!rate && 'hidden'} flex flex-col items-center w-full`}>
            <div className={'text-[18px] mb-4 font-preR'}>
                이 전통주를 상세히 평가해주세요.
            </div>
            <div className={'w-5/6'}>
                {drinkTaste.map((t, i)=>{
                    return (
                        <>
                            <div key={i} className={'font-preM mt-4'}>{t.value}에 대해 평가해주세요</div>
                            <div>
                                <input className={'mx-1 checked:text-zinc-700'} type="radio" id={`${t.value}1`} name={t.value} value={-1}/>
                                <label className={'mx-1'} htmlFor={`${t.value}1`}>{t.q1}</label>
                                <input className={'mx-1 checked:bg-zinc-700'} type="radio" id={`${t.value}2`} name={t.value} value={0}/>
                                <label className={'mx-1'} htmlFor={`${t.value}2`}>{t.q2}</label>
                                <input className={'mx-1 checked:bg-zinc-700'} type="radio" id={`${t.value}3`} name={t.value} value={1}/>
                                <label className={'mx-1'} htmlFor={`${t.value}3`}>{t.q3}</label>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
        <textarea onChange={(e)=>{setContent(e.target.value)}} placeholder='(선택) 간단한 리뷰를 작성해 주세요.' className={'mt-4 resize-none rounded bg-zinc-100 w-[400px] h-[100px] p-4 text-[16px] focus:outline-none'}>
        </textarea>
        <div className={'flex justify-center w-[400px] my-8'}>
            <div onClick={modalOpen} className={'flex justify-center items-center cursor-pointer mx-2 w-[100px] h-[44px] border border-[#655442] rounded hover:bg-zinc-100'}>닫기</div>
            <div onClick={submit} className={'flex justify-center items-center cursor-pointer mx-2 w-[100px] h-[44px] rounded text-white bg-[#655442] hover:bg-[#5B4D3E]'}>제출하기</div>
        </div>
    </div>
  )
}
