import { tasteType } from '@/types/DataTypes'
import React from 'react'

export default function MyGraph(props :{ taste : tasteType}) {
    const {taste} = props
    
    const tasteInfo = {
        tasteSweet : ['정보없음', '약함', '조금약함', '보통', '조금강함', '강함'],
        tasteSour : ['정보없음', '약함', '조금약함', '보통', '조금강함', '강함'],
        tasteRefresh : ['정보없음', '약함', '조금약함', '보통', '조금강함', '강함'],
        tasteBody : ['정보없음', '가벼움', '조금가벼움', '보통', '조금무거움', '무거움'],
        tasteFlavor : ['정보없음', '약함', '조금약함', '보통', '조금강함', '강함'],
        tasteThroat : ['정보없음', '부드러움', '조금부드러움', '보통', '조금거침', '거침']
    } 
  return (
    <div className={'flex flex-col'}>
        <div className={'flex items-center mb-3'}>
            <div className={'w-[50px] text-[14px] font-preM'}>단맛</div>
            <div className={'w-[300px] text-[10px] bg-[#F0F0F0] rounded-full'}>
                {taste.tasteSweet == 0 ?
                <div className={'px-4 py-1'}>정보없음</div>
                :
                <div style={{width : `${taste.tasteSweet * 20}%`}} className={`text-white bg-gradient-to-l from-[#809ED4] to-[#809ED4]/70 px-3 py-1 flex justify-end rounded-full`}>{tasteInfo.tasteSweet[taste.tasteSweet]}</div>
                }
            </div>
        </div>
        <div className={'flex items-center mb-3'}>
            <div className={'w-[50px] text-[14px] font-preM'}>신맛</div>
            <div className={'w-[300px] text-[10px] bg-[#F0F0F0] rounded-full'}>
                {taste.tasteSour == 0 ?
                <div className={'px-4 py-1'}>정보없음</div>
                :
                <div style={{width : `${taste.tasteSour * 20}%`}} className={`text-white bg-gradient-to-l from-[#809ED4] to-[#809ED4]/70 px-3 py-1 flex justify-end rounded-full`}>{tasteInfo.tasteSour[taste.tasteSour]}</div>
                }
            </div>
        </div>
        <div className={'flex items-center mb-3'}>
            <div className={'w-[50px] text-[14px] font-preM'}>청량감</div>
            <div className={'w-[300px] text-[10px] bg-[#F0F0F0] rounded-full'}>
                {taste.tasteRefresh == 0 ?
                <div className={'px-4 py-1'}>정보없음</div>
                :
                <div style={{width : `${taste.tasteRefresh * 20}%`}} className={`text-white bg-gradient-to-l from-[#809ED4] to-[#809ED4]/70 px-3 py-1 flex justify-end rounded-full`}>{tasteInfo.tasteRefresh[taste.tasteRefresh]}</div>
                }
            </div>
        </div>
        <div className={'flex items-center mb-3'}>
            <div className={'w-[50px] text-[14px] font-preM'}>바디감</div>
            <div className={'w-[300px] text-[10px] bg-[#F0F0F0] rounded-full'}>
                {taste.tasteBody == 0 ?
                <div className={'px-4 py-1'}>정보없음</div>
                :
                <div style={{width : `${taste.tasteBody * 20}%`}} className={`text-white bg-gradient-to-l from-[#809ED4] to-[#809ED4]/70 px-3 py-1 flex justify-end rounded-full`}>{tasteInfo.tasteBody[taste.tasteBody]}</div>
                }
            </div>
        </div>
        <div className={'flex items-center mb-3'}>
            <div className={'w-[50px] text-[14px] font-preM'}>향</div>
            <div className={'w-[300px] text-[10px] bg-[#F0F0F0] rounded-full'}>
                {taste.tasteFlavor == 0 ?
                <div className={'px-4 py-1'}>정보없음</div>
                :
                <div style={{width : `${taste.tasteFlavor * 20}%`}} className={`text-white bg-gradient-to-l from-[#809ED4] to-[#809ED4]/70 px-3 py-1 flex justify-end rounded-full`}>{tasteInfo.tasteFlavor[taste.tasteFlavor]}</div>
                }
            </div>
        </div>
        <div className={'flex items-center mb-3'}>
            <div className={'w-[50px] text-[14px] font-preM'}>목넘김</div>
            <div className={'w-[300px] text-[10px] bg-[#F0F0F0] rounded-full'}>
                {taste.tasteThroat == 0 ?
                <div className={'px-4 py-1'}>정보없음</div>
                :
                <div style={{width : `${taste.tasteThroat * 20}%`}} className={`text-white bg-gradient-to-l from-[#809ED4] to-[#809ED4]/70 px-3 py-1 flex justify-end rounded-full`}>{tasteInfo.tasteThroat[taste.tasteThroat]}</div>
                }
            </div>
        </div>
    </div>
  )
}
