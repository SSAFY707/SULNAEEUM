import { CNU_CK } from '@/api/auth/jumak'
import React, { useState } from 'react'

export default function AddJumak() {
    const [cnu, setCnu] = useState<string>('')
    const [next, setNext] = useState<boolean>(false)

    const inputCnu = (e) => {
        setCnu(e.target.value)
    }

    const checkCnu = async () => {
        const res = await CNU_CK(cnu)
        if (res) {
            setNext(true);
        }
        console.log(res)
    }

  return (
    <div className={'w-full h-full flex flex-col items-center p-2'}>
        <div className={'text-[24px] font-preR mt-16 mb-10'}>전통주를 판매하시나요?</div>
        {!next &&
        <div className={'flex flex-col w-full items-center'}>
            <div className={'w-5/6 pl-2 text-[16px] text-[#111111]'}>-(하이픈)없이 숫자만 입력해주세요</div>
            <input onChange={inputCnu} className={'bg-zinc-100 w-5/6 h-[50px] px-2 mb-10 outline-none'} type="text" placeholder='사업자 등록 번호 입력하기' />
            <div onClick={checkCnu} className={'w-5/6 h-[60px] bg-[#655443] hover:bg-[#534538] cursor-pointer text-white flex justify-center items-center mb-10'}>판매 인증하기</div>
        </div>
        }
        {next &&
        <div className={'flex flex-col w-full h-[500px] bg-sky-200'}>
            히힛 이제 입력창 만들어야지
        </div>}
    </div>
  )
}
