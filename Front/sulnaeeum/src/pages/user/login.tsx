import React from 'react'

export default function index() {
  return (
    <>
      <div className={"bg-[url('/images/login_back.png')] bg-cover w-full h-full"}>
        <div className={'w-full h-[936px] flex justify-center items-center'}>
          <div className={'flex flex-col items-center w-[500px] h-[600px] rounded-xl bg-white/70'}>
            <div className={'text-[30px] font-preM mt-10 mb-6'}>오늘의 전통주</div>
            <div className={'w-full h-2/5 bg-white border-y-2 mb-8'}></div>
            <div className='flex relative animate-jump justify-center items-center w-[280px] h-[70px] font-preR bg-[url("/images/login_top.png")] bg-cover'>🔥 3초안에 나와 맞는 전통주 추천받기</div>
            <div className={'w-[340px] h-[60px] flex justify-center items-center bg-[#FEE500] rounded-lg font-preB text-[18px] cursor-pointer hover:bg-[#DDC700]'}><img className={'h-[20px] mr-4'} src="/images/kakao_logo.png" />카카오 로그인</div>
          </div>
        </div>
      </div>
    </>
  )
}
