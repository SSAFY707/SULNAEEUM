import React, { useState } from 'react'

export default function index() {
  type ObjType = {
    [index: string] : string | boolean
  }
  type DataType = {
    [index: string] : Array<ObjType>
  }
  const data : DataType = {
    gender: [{name: '남성', value: true}, {name: '여성', value: false}],
    age: [
      {name: '20대', value: '20s'},
      {name: '30대', value: '30s'},
      {name: '40대', value: '40s'},
      {name: '50대', value: '50s'},
      {name: '60대 이상', value: '60s'},
    ]
  }

  const [page, setPage] = useState(1);
  return (
    <>
      <div className={"bg-[url('/images/login_back.png')] bg-cover w-full h-full"}>
        <div className={'w-full h-[936px] flex justify-center items-center'}>
          <div className={`${page != 0 && 'hidden'} flex flex-col items-center w-[500px] h-[650px] rounded-xl bg-white/70`}>
            <div className={'w-5/6 h-full mt-20 flex flex-col items-center'}>
              <div className={'h-3/5 flex flex-col items-center'}>
                <div className={'font-preM text-[32px] my-8'}>(필수) 취향 입력 💖</div>
                <div className={'font-preL text-[18px] my-4'}>입력하신 정보는 맞춤 전통주 추천에 사용됩니다.</div>
                <div className={'font-preL text-[18px]'}>구체적인 수치는 정확한 추천에 도움이 됩니다.</div>
              </div>
              <div onClick={()=>{setPage(page + 1)}} className={'flex justify-center items-center relative w-2/3 h-[60px] text-[24px] text-white font-preL bg-[#847260] hover:bg-[#655442] cursor-pointer rounded'}>입력하러 가기</div>
            </div>
          </div>
          <div className={`${page != 1 && 'hidden'} flex flex-col items-center w-[500px] h-[650px] rounded-xl bg-white/70`}>
            <div className={'w-5/6 mt-10 mb-6'}>
              <div className={'font-preM mb-2'}>1 / 3 단계</div>
              <div className={'w-full h-2 bg-zinc-200 rounded-2xl'}>
                <div className={'w-1/3 h-full bg-[#655442] rounded-2xl'}></div>
              </div>
            </div>
            <div className={'h-2/3 w-5/6 p-2'}>
              <div className={'mb-16'}>
                <div className={'font-preR text-[24px] mb-4'}>성별</div>
                <div className={'grid grid-cols-2 gap-2 w-full'}>
                  {data.gender.map((g, index)=>{
                    return (
                      <div className={'w-full h-[50px] flex justify-center items-center cursor-pointer border rounded'} key={index}>{g.name}</div>
                    )
                  })}
                </div>
              </div>
              <div>
                <div className={'font-preR text-[24px] mb-4'}>나이</div>
                <div className={'grid grid-cols-3 gap-2'}>
                  {data.age.map((age, index)=>{
                    return (
                      <div className={'w-full h-[50px] flex justify-center items-center cursor-pointer border rounded'} key={index}>{age.name}</div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className={'flex justify-center items-center rounded w-2/3 h-[60px] text-[20px] text-white font-preL bg-[#847260] hover:bg-[#655442] cursor-pointer'}>다음 단계</div>
          </div>
          <div className={`${page != 2 && 'hidden'} flex flex-col items-center w-[500px] h-[600px] rounded-xl bg-white/70`}>
            <div className={'w-5/6 mt-10'}>
              <div className={'font-preM mb-2'}>2 / 3 단계</div>
              <div className={'w-full h-2 bg-zinc-200 rounded-2xl'}>
                <div className={'w-2/3 h-full bg-[#655442] rounded-2xl'}></div>
              </div>
            </div>
          </div>
          <div className={`${page != 3 && 'hidden'} flex flex-col items-center w-[500px] h-[600px] rounded-xl bg-white/70`}>
            <div className={'w-5/6 mt-10'}>
              <div className={'font-preM mb-2'}>3 / 3 단계</div>
              <div className={'w-full h-2 bg-zinc-200 rounded-2xl'}>
                <div className={'w-full h-full bg-[#655442] rounded-2xl'}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
