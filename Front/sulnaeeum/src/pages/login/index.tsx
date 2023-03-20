import React from 'react'

export default function index() {
  return (
    <>
      <div className={"bg-[url('/images/login_back.png')] bg-cover w-full h-full"}>
        <div className={'w-full h-[936px] flex justify-center items-center'}>
          <div className={'flex flex-col items-center w-[500px] h-[600px] rounded-xl bg-white/70'}>
            <div className={'text-[30px] font-preM mt-10 mb-6'}>오늘의 전통주</div>
            {/* <hr className={'border w-full'} /> */}
            <div className={'w-full h-2/5 bg-white border-y-2 mb-8'}></div>
            <div className='flex justify-center items-center w-[318px] h-[60px] bg-[url("/images/login_top.png")] bg-cover'>🔥 3초안에 전통주 추천받기</div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}
