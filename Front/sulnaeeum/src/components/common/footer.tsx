import { useRouter } from 'next/router'
import React from 'react'
import { toastError } from './toast'

export default function Footer() {
    const router = useRouter()

    const checkAndMove = (url: string) => {
        if(sessionStorage.getItem('isLogin')) {
            router.push(url)
        }else{
            toastError('로그인이 필요한 페이지입니다.', '🚨', 'top-right')
        }
    } 

  return (
  <>
    <div className={'hidden md:flex justify-between shadow-[0px_-5px_20px_#CECECE80] h-[380px] bg-white items-center px-[260px]'}>
        <img className={'h-1/2'} src="/images/footer_logo.png" />
        <div>
            <div className={'text-zinc-400/80 mb-6'}>About Service</div>
            <div className={'text-[18px] font-preM mb-6 text-zinc-800'}>
                '술내음'은 우리 술을 알리고,<br />
                사용자의 취향을 반영한 전통주를 추천해주는<br />
                사용자 맞춤 전통주 서비스입니다.
            </div>
            <div className={'text-zinc-400/80'}>Copyright 2023 SSAFY 8기 A707 All right reserved.</div>
        </div>
        <div className={'text-zinc-400 text-[17px]'}>
            <div className={'flex my-2'}>
                <div className={'text-[#EFD8A3] w-[80px] font-preR'}>전통주</div>
                <span onClick={()=>router.push('/list?type=탁주&sort=이름')} className={'mx-2 cursor-pointer hover:text-zinc-300'}>탁주</span>|
                <span onClick={()=>router.push('/list?type=약주%2F청주&sort=이름')} className={'mx-2 cursor-pointer hover:text-zinc-300'}>약주/청주</span>|
                <span onClick={()=>router.push('/list?type=과실주&sort=이름')} className={'mx-2 cursor-pointer hover:text-zinc-300'}>과실주</span>|
                <span onClick={()=>router.push('/list?type=증류주&sort=이름')} className={'mx-2 cursor-pointer hover:text-zinc-300'}>증류주</span>|
                <span onClick={()=>router.push('/list?type=기타&sort=이름')} className={'mx-2 cursor-pointer hover:text-zinc-300'}>기타</span>
            </div>
            <div className={'flex my-2'}>
                <div className={'text-[#EFD8A3] w-[80px] font-preR'}>지도</div>
                <span onClick={()=>router.push('/map?tab=양조장')} className={'mx-2 cursor-pointer hover:text-zinc-300'}>양조장</span>|
                <span onClick={()=>router.push('/map?tab=전통주 축제')} className={'mx-2 cursor-pointer hover:text-zinc-300'}>전통주 축제</span>|
                <span onClick={()=>router.push('/map?tab=체험 프로그램')} className={'mx-2 cursor-pointer hover:text-zinc-300'}>체험 프로그램</span>|
            </div>
            <div className={'flex my-2'}>
                <div className={'text-[#EFD8A3] w-[80px] font-preR'}>랭킹</div>
                <span onClick={()=>checkAndMove('/rank')} className={'mx-2 cursor-pointer hover:text-zinc-300'}>전통주 랭킹</span>
            </div>
            <div className={'flex my-2'}>
                <div className={'text-[#EFD8A3] w-[80px] font-preR'}>추천</div>
                <span onClick={()=>checkAndMove('/recommend?target=drink')} className={'mx-2 cursor-pointer hover:text-zinc-300'}>나만의 전통주</span>|
                <span onClick={()=>checkAndMove('/recommend?target=gift')} className={'mx-2 cursor-pointer hover:text-zinc-300'}>선물하기</span>|
                <span onClick={()=>router.push('/recommend/today')} className={'mx-2 cursor-pointer hover:text-zinc-300'}>랜덤 추천</span>
            </div>
            <div className={'flex my-2'}>
                <div className={'text-[#EFD8A3] w-[80px] font-preR'}>검사</div>
                <span onClick={()=>router.push('/jubti')} className={'mx-2 cursor-pointer hover:text-zinc-300'}>전통주 유형검사 (酒BTI)</span>
            </div>
        </div>
    </div >
  </>
  )
}
