import React from 'react'
import style from '@/pages/map/map.module.css'


export default function Program(props: any) {

  const { tab, mode, res } = props

  return (<>
    <div className='w-[584px] scroll h-[680px] overflow-y-scroll'>

      {res[mode - 1].listDto.programDtoList.map((v: any, index: number) => {
        return <>

          <div className='w-full h-[50%]'>
            <div className='flex w-full h-[94%] pt-[20px]'>
              <img className='w-[240px] h-[280px] object-cover' src={v.programImg} alt='이미지'></img>
              <div className='w-[300px] h-[280px] ml-[20px]'>
                <p className='text-[28px] font-bold'>{v.programName}</p>
                <div className='h-[34px] '>
                  <span className='text-[16px]'>{v.programLocation}</span>
                </div>
                <div className='h-[34px] '>
                  <span className='text-[18px]'>{v.alwaysVisit == 1 ? '상시 방문' : ''}, {v.reserveVisit == 1 ? '예약 방문' : ''} </span>
                </div>
                <div className='h-[130px] '>
                  <span className='text-[18px]'>{v.content.substr(0, 90)}</span>
                </div>
                <a href={v.programUrl} target='_blank'>
                  <div className='cursor-pointer ml-[160px] text-white w-[140px] py-2 px-8 rounded-[4px] bg-[#5CABB7] hover:bg-[#3C97A5]'>더 알아보기</div>
                </a>
              </div>
            </div>
            <div className={`${style.item_down}`}>
              <img src='/images/line.png'></img>
            </div>
          </div>

        </>
      })}









    </div>



  </>
  )
}
