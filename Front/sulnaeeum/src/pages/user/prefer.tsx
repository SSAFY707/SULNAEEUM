import React, { useEffect, useState } from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'



export default function index() {
  type ObjType = {
    [index: string]: string | boolean
  }
  type DataType = {
    [index: string]: Array<ObjType>
  }

  type SessionType = {
    name: string | null
    img: string | null
  }

  const data: DataType = {
    gender: [{ name: '남성', value: true }, { name: '여성', value: false }],
    age: [
      { name: '20대', value: '20s' },
      { name: '30대', value: '30s' },
      { name: '40대', value: '40s' },
      { name: '50대', value: '50s' },
      { name: '60대 이상', value: '60s' },
    ]
  }

  const [page, setPage] = useState(0);

  const [session, setSession] = useState<SessionType>({ name: '', img: '' })

  useEffect(() => {

    setSession((prevState) => {
      return { ...prevState, name: sessionStorage.getItem('name'), img: sessionStorage.getItem('img') }
    })
  }, [])



  return (
    <>
      <div className={"bg-[url('/images/login_back.png')] bg-cover w-full h-full"}>
        <div className={'w-full h-[936px] flex justify-center items-center'}>
          <div className={`${page != 0 && 'hidden'} flex flex-col items-center w-[500px] h-[650px] rounded-xl bg-white/90`}>
            <div className={'w-[400px] h-full mt-20 flex flex-col items-center'}>
              <div className={'w-[400px] h-3/5 flex flex-col items-center'}>
                <div className='flex w-full h-[200px] space-x-4  items-center justify-center'>
                  {session.img && <img src={session.img} alt='프로필사진' className='w-[70px] h-[70px] rounded-full object-cover'></img>}
                  <div className={'font-preB text-[34px] my-8'}>{session.name}님 환영합니다.</div>
                </div>
                <div className='flex  flex-col w-full h-[1000px] items-center'>
                  <div className='flex justify-between items-center'>
                    <img className='w-[130px]' src="/main/part5/main5_2s.png" alt='이미지'></img>
                    <img className='w-[130px]' src="/main/part5/main5_3s.png" alt='이미지'></img>
                    <img className='w-[130px]' src="/main/part5/main5_4s.png" alt='이미지'></img>
                  </div>
                  <div className='flex flex-col justify-center items-center w-full h-[100px] mt-[20px]'>
                    <p className='text-[20px]'>'술내음'은 당신과 어울리는 전통주를 찾아드립니다.</p>
                    <p className='text-[20px] mt-[12px]'>정확한 추천을 위해 취향조사를 바로 시작해보세요.</p>
                  </div>
                </div>
              </div>
              <div onClick={() => { setPage(page + 1) }} className={'flex justify-center items-center mt-[70px] w-full h-[60px] text-[22px] text-white font-preL bg-[#847260] hover:bg-[#655442] cursor-pointer rounded'}>시작하기</div>
            </div>
          </div>
          <div className={`${page != 1 && 'hidden'} flex flex-col items-center w-[500px] h-[650px] rounded-xl bg-white/90`}>
            <div className={'w-5/6 mt-10 mb-6'}>
              <MdArrowBackIosNew className='hover:cursor-pointer' onClick={() => { setPage(page - 1) }} ></MdArrowBackIosNew>
              <div className={'font-preM mb-2'}>1 / 3 단계</div>
              <div className={'w-full h-2 bg-zinc-200 rounded-2xl'}>
                <div className={'w-1/3 h-full bg-[#655442] rounded-2xl'}></div>
              </div>
            </div>
            <div className={'h-2/3 w-5/6 p-2'}>
              <div className={'mb-16'}>
                <div className={'font-preR text-[24px] mb-4'}>성별</div>
                <div className={'grid grid-cols-2 gap-2 w-full'}>
                  {data.gender.map((g, index) => {
                    return (
                      <div className={'w-full h-[50px] flex justify-center items-center cursor-pointer border rounded'} key={index}>{g.name}</div>
                    )
                  })}
                </div>
              </div>
              <div>
                <div className={'font-preR text-[24px] mb-4'}>나이</div>
                <div className={'grid grid-cols-3 gap-2'}>
                  {data.age.map((age, index) => {
                    return (
                      <div className={'w-full h-[50px] flex justify-center items-center cursor-pointer border rounded'} key={index}>{age.name}</div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div onClick={() => { setPage(page + 1) }} className={'flex justify-center items-center rounded w-5/6 h-[60px] text-[20px] text-white font-preL bg-[#847260] hover:bg-[#655442] cursor-pointer'}>다음 단계</div>
          </div>
          <div className={`${page != 2 && 'hidden'} flex flex-col items-center w-[500px] h-[650px] rounded-xl bg-white/90`}>
            <div className={'w-5/6 mt-10 mb-6'}>
              <MdArrowBackIosNew className='hover:cursor-pointer' onClick={() => { setPage(page - 1) }} ></MdArrowBackIosNew>
              <div className={'font-preM mb-2 text-[#655442]'}>2 / 3 단계</div>
              <div className={'w-full h-2 bg-zinc-200 rounded-2xl'}>
                <div className={'w-2/3 h-full bg-[#655442] rounded-2xl'}></div>
              </div>
            </div>
            <div className={'h-2/3 w-5/6 p-2'}>
              <div className={'mb-16'}>
                <div className={'font-preR text-[24px] mb-4'}>신맛을 좋아하시나요?</div>
                <div className={'grid grid-cols-2 gap-2 w-full'}>
                  {data.gender.map((g, index) => {
                    return (
                      <div className={'w-full h-[50px] flex justify-center items-center cursor-pointer border rounded'} key={index}>{g.name}</div>
                    )
                  })}
                </div>
              </div>
              <div>
                <div className={'font-preR text-[24px] mb-4'}>단맛을 선호하시나요?</div>
                <div className={'grid grid-cols-3 gap-2'}>
                  {data.age.map((age, index) => {
                    return (
                      <div className={'w-full h-[50px] flex justify-center items-center cursor-pointer border rounded'} key={index}>{age.name}</div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className={'flex w-5/6 gap-2'}>
              <div onClick={() => { setPage(page + 1) }} className={'flex justify-center items-center rounded w-full h-[60px] text-[20px] text-white font-preL bg-[#847260] hover:bg-[#655442] cursor-pointer'}>다음 단계</div>
            </div>
          </div>
          <div className={`${page != 3 && 'hidden'} flex flex-col items-center w-[500px] h-[650px] rounded-xl bg-white/90`}>
            <div className={'w-5/6 mt-10 mb-6'}>
              <MdArrowBackIosNew className='hover:cursor-pointer' onClick={() => { setPage(page - 1) }} ></MdArrowBackIosNew>
              <div className={'font-preM mb-2'}>3 / 3 단계</div>
              <div className={'w-full h-2 bg-zinc-200 rounded-2xl'}>
                <div className={'w-full h-full bg-[#655442] rounded-2xl'}></div>
              </div>
            </div>
            <div className={'h-2/3 w-5/6 p-2'}>
              <div>3단계 취향 조사</div>
            </div>
            <div className={'flex w-5/6 gap-2'}>
              <div onClick={() => { setPage(page + 1) }} className={'flex justify-center items-center rounded w-full h-[60px] text-[20px] text-white font-preL bg-[#847260] hover:bg-[#655442] cursor-pointer'}>다음 단계</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
