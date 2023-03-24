import React from 'react'
import style from '@/pages/map/map.module.css'
import { useState } from 'react';


export default function Brewery(props: any) {

  const { tab, mode, res } = props

  return (<>
    <div className='w-[584px] scroll h-[680px] overflow-y-scroll'>

      {res[mode - 1].list.brewery.map((v: any, index: number) => {
        return <>
          <a href={v.brewery_url} key={index} className={`${style.item_box}`}>
            <div className={`${style.item_up}`}>
              <img src='/images/map/items/04.png' alt='이미지' className='w-[140px] h-[140px] object-cover'></img>
              <div className={`${style.text_area}`}>
                <div className='flex w-full h-[50px] justify-between items-center'>
                  <h3 className='text-[26px] font-bold'>{v.brewery_name}</h3>
                </div>
                <div className='w-full h-[110px]'>
                  <div className='flex w-full h-[110px]'>
                    <div className={`${style.text_left}`}>
                      <p>주소</p>
                      <p>연락처</p>
                      <p>주종</p>
                    </div>
                    <div className={`${style.text_right}`}>
                      <p>{v.brewery_location}</p>
                      <p>{v.contact}</p>
                      <div className='flex '>{v.drink_type.map((i: any, index: number) => {
                        return <>
                          <div key={index} className='cursor-pointer hover:bg-gray-300 py-1 px-4 mr-[14px] rounded-[20px] bg-gray-200 border'>#{i}</div>
                        </>
                      })}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${style.item_down}`}>
              <img src='/images/line.png'></img>
            </div>
          </a>
        </>
      })}


    </div>



  </>
  )
}
