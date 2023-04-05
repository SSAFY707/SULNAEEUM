import React from 'react'

export default function MyGraph() {
    const taste = {
        tasteSweet : 0,
        tasteSour : 2,
        tasteRefresh : 3,
        tasteBody : 2,
        tasteFlavor : 4,
        tasteThroat : 5
    }
    
    const tasteInfo = {
        tasteSweet : ['정보없음', '아주약함', '조금약함', '보통', '조금강함', '아주강함'],
        tasteSour : ['정보없음', '아주약함', '조금약함', '보통', '조금강함', '아주강함'],
        tasteRefresh : ['정보없음', '아주약함', '조금약함', '보통', '조금강함', '아주강함'],
        tasteBody : ['정보없음', '아주가벼움', '조금가벼움', '보통', '조금무거움', '아주무거움'],
        tasteFlavor : ['정보없음', '아주약함', '조금약함', '보통', '조금강함', '아주강함'],
        tasteThroat : ['정보없음', '아주부드러움', '조금부드러움', '보통', '조금거침', '아주거침']
    } 
  return (
    <div className={'flex flex-col'}>
        <div className={'flex items-center mb-2'}>
            <div className={'w-[70px]'}>단맛</div>
            <div className={'w-[400px] bg-[#F0F0F0] rounded-full'}>
                {taste.tasteSweet == 0 ?
                <div className={'px-3 py-1'}>정보없음</div>
                :
                <div className={`bg-yellow-300 px-3 py-1 flex justify-end rounded-full w-[${20*taste.tasteSweet}%]`}>{tasteInfo.tasteSweet[taste.tasteSweet]}</div>
                }
            </div>
        </div>
        <div className={'flex items-center mb-2'}>
            <div className={'w-[70px]'}>신맛</div>
            <div className={'w-[400px] bg-[#F0F0F0] rounded-full'}>
                {taste.tasteSour == 0 ?
                <div className={'px-3 py-1'}>정보없음</div>
                :
                <div className={`bg-[#B1C2E3] px-3 py-1 flex justify-end rounded-full w-[${20*taste.tasteSour}%]`}>{tasteInfo.tasteSour[taste.tasteSour]}</div>
                }
            </div>
        </div>
    </div>
  )
}
