import { clearDrink } from '@/api/auth/drink'
import { Rating } from '@/components/common/Rating'
import { toastError, toastOK } from '@/components/common/toast'
import { tasteType } from '@/types/DataTypes'
import { ReviewWriteType } from '@/types/DrinkType'
import React, { useState } from 'react'

export default function DrinkClear(props: {drinkName: string, drinkId : number , modalOpen}) {
    const {drinkName, drinkId, modalOpen} = props
    const [rate, setRate] = useState<number>()
    const [content, setContent] = useState<string | null>(null)

    const drinkTaste = [
        {idx: 'tasteFlavor', value: '향', q1: '향이 약해요', q2: '향이 적당해요', q3: '향이 강해요'},
        {idx: 'tasteSweet', value: '단맛', q1: '달지 않아요', q2: '적당히 달아요', q3: '아주 달아요'},
        {idx: 'tasteSour', value: '신맛', q1: '시지 않아요', q2: '적당히 셔요', q3: '아주 셔요'},
        {idx: 'tasteThroat', value: '목넘김', q1: '부드럽지 않아요', q2: '보통이에요', q3: '부드러워요'},
        {idx: 'tasteBody', value: '바디감', q1: '가벼워요', q2: '보통이에요', q3: '무거워요'},
        {idx: 'tasteRefresh', value: '청량함', q1: '탄산이 없어요', q2: '보통이에요', q3: '탄산이 강해요'},
    ]

    const tasteInit : tasteType = {
        tasteFlavor: 2,
        tasteSweet: 2,
        tasteSour: 2,
        tasteThroat: 2,
        tasteBody: 2,
        tasteRefresh: 2,
    }

    const [taste, setTaste] = useState<tasteType>(tasteInit)

    const clickRadio = (e : any) => {
        setRate(parseInt(e.target.value))
    }

    const clickTasteRadio = (e: any) => {
        const newTaste = {...taste}
        const idx = e.target.id.slice(0,-1)
        newTaste[idx] = parseInt(e.target.value)
        setTaste(newTaste)
    }

    const submit = () => {
        if(!rate){
            toastError('별점을 등록해 주세요', "📌", 'top-right')
            return
        }
        const arr = ['tasteFlavor', 'tasteSweet', 'tasteSour', 'tasteThroat', 'tasteBody', 'tasteRefresh']
        let flag = true
        arr.forEach(e => {
            if(taste[e] == 2) {
                flag = false
                return
            }
        });
        if(!flag){
            toastError('상세 항목을 모두 선택해주세요', "📌", 'top-right')
            return
        }
        const data : ReviewWriteType = {
            score: rate,
            sweetScore: taste.tasteSweet,
            sourScore : taste.tasteSour,
            flavorScore : taste.tasteFlavor,
            throatScore : taste.tasteThroat,
            bodyScore : taste.tasteBody,
            refreshScore : taste.tasteRefresh,
            content : content,
        }
        console.log(data)
        clearDrink(drinkId, data)
        modalOpen()
        toastOK('리뷰가 등록되었습니다.', '✨', 'top-center')
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
                                <input onChange={clickTasteRadio} className={'mx-1 checked:text-zinc-700'} type="radio" id={`${t.idx}1`} name={t.value} value={-1}/>
                                <label className={'mx-1'} htmlFor={`${t.idx}1`}>{t.q1}</label>
                                <input onChange={clickTasteRadio} className={'mx-1 checked:bg-zinc-700'} type="radio" id={`${t.idx}2`} name={t.value} value={0}/>
                                <label className={'mx-1'} htmlFor={`${t.idx}2`}>{t.q2}</label>
                                <input onChange={clickTasteRadio} className={'mx-1 checked:bg-zinc-700'} type="radio" id={`${t.idx}3`} name={t.value} value={1}/>
                                <label className={'mx-1'} htmlFor={`${t.idx}3`}>{t.q3}</label>
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
