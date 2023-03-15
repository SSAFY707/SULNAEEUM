import React, { useState } from 'react'

const Jubti: React.FC = () => {
  const [age, setAge] = useState('')
  const [sex, setSex] = useState('')

  return (
    <>
      <div>
        <div className={'flex flex-col justify-center items-center h-[600px] w-full bg-[#AEA896] py-10'}>
          <div className={'flex items-center flex-col text-white mb-10'}>
            <img className={'h-[14px] mb-2'} src="/images/jubti/pattern1.png" alt="" />
            <h1 className={'text-[40px] font-bold'} style={{fontFamily: 'preL'}}>전통주 유형검사</h1>
            <div style={{fontFamily: 'preEL', fontSize: '18px'}}>간단한 질문으로 나의 酒BTI를 확인해보세요.</div>
            <img className={'w-[350px] mt-4 mb-6'} src="/images/jubti/pattern2.png" alt="" />
          </div>
          <div className={'flex flex-col items-center w-5/6 text-[16px]'}>
            <div className={'flex items-center mb-5 pr-3 bg-zinc-300/50 h-[80px] w-full rounded-lg'}>
              <img className={'h-2/3 ml-3 mr-5'} src="/images/jubti/icon/1.png" alt="아이콘1" />
              <div>질문 문항은 10개, 검사 시간은 총 1분 내외입니다.</div>
            </div>
            <div className={'flex items-center mb-5 p-3 bg-zinc-300/50 h-[80px] w-full rounded-lg'}>
              <img className={'h-2/3 ml-3 mr-5'} src="/images/jubti/icon/2.png" alt="아이콘1" />
              <div>친구와 공유하며 잘 맞는 전통주 유형을 찾아보세요.</div>
            </div>
            <div className={'flex items-center p-3 bg-zinc-300/50 h-[80px] w-full rounded-lg'}>
              <img className={'h-2/3 ml-3 mr-5'} src="/images/jubti/icon/3.png" alt="아이콘1" />
              <div>가능하면 답변 시 '중립'은 피해주세요.</div>
            </div>
          </div>
        </div>
        <div className={'mt-20 mb-20'}>
          <div className={'flex flex-col items-center'}>
            <div className={'text-[24px] font-preM mb-4'}>당신의 나이를 선택해주세요.</div>
            <div className={'grid grid-cols-3 flex justify-center'}>
              <div className={'flex justify-center items-center w-[140px] h-[50px] border-2 border-[#AEA896] m-2 rounded'} onClick={()=>{age != '20s' ? setAge('20s') : setAge('')}}>20대</div>
              <div className={'flex justify-center items-center w-[140px] h-[50px] border-2 border-[#AEA896] m-2 rounded'} onClick={()=>{age != '30s' ? setAge('30s') : setAge('')}}>30대</div>
              <div className={'flex justify-center items-center w-[140px] h-[50px] border-2 border-[#AEA896] m-2 rounded'} onClick={()=>{age != '40s' ? setAge('40s') : setAge('')}}>40대</div>
              <div className={'flex justify-center items-center w-[140px] h-[50px] border-2 border-[#AEA896] m-2 rounded'} onClick={()=>{age != '50s' ? setAge('50s') : setAge('')}}>50대</div>
              <div className={'flex justify-center items-center w-[140px] h-[50px] border-2 border-[#AEA896] m-2 rounded'} onClick={()=>{age != '60s' ? setAge('60s') : setAge('')}}>60대 이상</div>
            </div>
          </div>
          <div className={'flex flex-col items-center mt-16'}>
            <div className={'text-[24px] font-preM mb-4'}>당신의 성별을 선택해주세요.</div>
            <div className={'flex justify-center'}>
              <div className={'flex justify-center items-center w-[140px] h-[50px] border-2 border-[#AEA896] m-2 rounded'} onClick={()=>{sex != 'man' ? setSex('man') : setSex('')}}>남성</div>
              <div className={'flex justify-center items-center w-[140px] h-[50px] border-2 border-[#AEA896] m-2 rounded'} onClick={()=>{sex != 'women' ? setSex('women') : setSex('')}}>여성</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Jubti