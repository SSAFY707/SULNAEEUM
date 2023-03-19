import { useRouter } from 'next/router'
import info from '../../../components/jubti/info'
import React from 'react'

export default function Result () {
    const router = useRouter()
    const mbti = router.query.mbti
    const result = info(mbti as string)
    // console.log(result)
  return (
    <>
        <div className={'flex flex-col items-center mb-14'}>
            <div className={'flex flex-col items-center h-[300px] w-full'} style={{backgroundColor : result.color}}>
                <div className={'mt-4 text-[20px]'}>{result.name}</div>
                <div className={'text-[30px] font-preM'}>{result.name}</div>
                <img className={'mt-6 h-[220px]'} src={`/images/jubti/drink/${result.name}.png`} alt="" />
            </div>
            <ul className={'mt-[100px] px-8 text-[20px]'}>
                {result.explain.map((e, index)=>{
                    return ( <li className={'mb-6'} key={index}>◾ {e}</li> )
                })}
            </ul>
        </div>
        <div>
            <div className={'flex flex-col items-center mb-20 w-full bg-zinc-200'}>
                <div className={'flex items-center text-[20px] mt-6'}><div className={'font-preM text-[30px] mr-2'}>{result.name}</div>와(과) 어울리는 안주</div>
                <hr className={'w-full my-4 border border-zinc-300'} />
                <div className={'flex flex-col items-center'}>
                    <img className={'mt-8 w-[150px]'} src="/images/jubti/dish/1.png" alt="" />
                    <div className={'text-[20px] mt-4 mb-6'}>삼겹살</div>
                </div>
            </div>
            <div className={'flex flex-col items-center mb-20'}>
                <div className={'flex items-center text-[20px]'}><div className={'font-preM text-[30px] mr-2'}>{result.name}</div>와(과)의 궁합</div>
                <hr className={'w-full my-4 border border-zinc-300'} />
                <div className={'flex justify-center mt-6'}>
                    <div className={'flex flex-col items-center mx-6'}>
                        <div className={'text-[20px] mb-4 font-preR'}>최고의 궁합</div>
                        <div className={'flex justify-center w-[160px] h-[160px] rounded-full'} style={{backgroundColor : result.good_color}}>
                            <img className={'mt-4 h-[160px]'} src={`/images/jubti/drink/${result.good_name}.png`} alt="" />
                        </div>
                        <div className={'mt-8'}>{result.good_name}</div>
                    </div>
                    <div className={'flex flex-col items-center mx-6'}>
                        <div className={'text-[20px] mb-4 font-preR'}>최악의 궁합</div>
                        <div className={'flex justify-center w-[160px] h-[160px] rounded-full'} style={{backgroundColor : result.bad_color}}>
                            <img className={'mt-4 h-[160px]'} src={`/images/jubti/drink/${result.bad_name}.png`} alt="" />
                        </div>
                        <div className={'mt-8'}>{result.bad_name}</div>
                    </div>
                </div>
            </div>
            <div className={'flex flex-col items-center w-full bg-zinc-200'}>
                <div className={'flex flex-col items-center'}>
                    <div className={'text-[26px] font-preM mt-14'}>결과 공유하기</div>
                    <img className={'h-[50px] mt-5 mb-16 cursor-pointer'} src="/images/kakao.png" alt="" />
                </div>
                <div className={'flex justify-center items-center cursor-pointer text-[20px] w-3/4 h-[60px] rounded bg-[#999483] text-white'}>{result.name} 더 알아보러 가기</div>
                <div className={'flex justify-center items-center cursor-pointer text-[20px] font-preR w-3/4 h-[60px] rounded border border-[#999483] mt-4 bg-white text-[#999483] mb-16'}>테스트 다시하기</div>
            </div>
        </div>
    </>
  )
}
