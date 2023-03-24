import React from 'react'
import style from '@/pages/map/map.module.css'
import { useState } from 'react';


export default function Program(props: any) {

  const { tab, mode, res } = props

  return (<>
    <div className='w-[584px] scroll h-[680px] overflow-y-scroll'>

      {res[mode - 1].list.program.map((v: any, index: number) => {
        return <>

          <div className='w-full h-[50%]'>
            <div className='flex w-full h-[94%] pt-[20px]'>
              <img className='w-[240px] h-[280px] object-cover' src='/images/map/items/04.png' alt='이미지'></img>
              <div className='w-[300px] h-[280px] ml-[20px]'>
                <p className='text-[28px] font-bold'>{v.program_name}</p>
                <div className='h-[34px] '>
                  <span className='text-[16px]'>{v.program_location}</span>
                </div>
                <div className='h-[34px] '>
                  <span className='text-[18px]'>{v.always_visit == 1 ? '상시 방문' : ''}, {v.reserve_visit == 1 ? '예약 방문' : ''} </span>
                </div>
                <div className='h-[130px] '>
                  <span className='text-[18px]'>{v.content.substr(0, 90)}</span>
                </div>
                <a href={v.program_url}>
                  <div className='cursor-pointer ml-[160px] text-white w-[140px] py-2 px-8 rounded-[4px] bg-[#5CABB7] hover:bg-[#3C97A5]'>더 알아보기</div>
                </a>
              </div>
            </div>
            <div className={`${style.item_down}`}>
              <img src='/images/line.png'></img>
            </div>
          </div>


          {/* <div key={index} className={`${style.item_box}`}>
            <div className={`${style.item_up}`}>
              <img src='/images/map/items/04.png' alt='이미지' className='w-[140px] h-[140px] object-cover'></img>
              <div className={`${style.text_area}`}>
                <div className='flex w-full h-[50px] justify-between items-center'>
                  <h3 className='text-[26px] font-bold'>{v.program_name}</h3>
                  <FaBookmark className='text-[#ADA7A3] text-[22px]' />
                </div>
                <div className='w-full h-[110px]'>
                  <div className='flex w-full h-[110px]'>
                    <div className={`${style.text_left}`}>
                      <p>방문</p>
                      <p>내용</p>
                    </div>
                    <div className={`${style.text_right}`}>
                      <p>{v.always_visit == 1 ? '상시 방문 가능' : '방문 불가'} , {v.reserve_visit == 1 ? '예약 가능' : '예약 불가'} </p>
                      <p>{v.content.substr(0, 48)}...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${style.item_down}`}>
              <img src='/images/line.png'></img>
            </div>
          </div> */}



        </>
      })}









    </div>



  </>
  )
}
