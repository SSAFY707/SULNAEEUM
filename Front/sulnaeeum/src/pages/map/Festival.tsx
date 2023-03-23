import React from 'react'
import style from './map.module.css'
import { FaBookmark } from 'react-icons/fa'
import { useState } from 'react';
export default function Festival(props: any) {

  const { tab } = props

  return (<>
    <div className='w-[584px] scroll h-[680px] overflow-y-scroll'>


      <div className={`${style.item_box}`}>
        <div className={`${style.item_up}`}>
          <img src='/images/map/items/03.png' alt='이미지' className='w-[140px] h-[140px] object-cover'></img>
          <div className={`${style.text_area}`}>
            <div className='flex w-full h-[50px] justify-between items-center'>
              <h3 className='text-[26px] font-bold'>안산시 우리술 축제</h3>
              <FaBookmark className='text-[#ADA7A3] text-[22px]' />
            </div>
            <div className='w-full h-[110px]'>
              <div className='flex w-full h-[110px]'>
                <div className={`${style.text_left}`}>
                  <p>주소</p>
                  <p>주종</p>
                  <p>연락처</p>
                </div>
                <div className={`${style.text_right}`}>
                  <p>동대문구 장안동 444-2</p>
                  <p>탁주, 증류주, 과실주</p>
                  <p>02-256-1423</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${style.item_down}`}>
          <img src='/images/line.png'></img>
        </div>
      </div>

      {/* 반복문으로 만들 부분 */}
      <div className={`${style.item_box}`}>
        <div className={`${style.item_up}`}>
          <img src='/images/map/items/01.png' alt='이미지' className='w-[140px] h-[140px] object-cover'></img>
          <div className={`${style.text_area}`}>
            <div className='flex w-full h-[50px] justify-between items-center'>
              <h3 className='text-[26px] font-bold'>나현이네 축제</h3>
              <FaBookmark className='text-[#ADA7A3] text-[22px]' />
            </div>
            <div className='w-full h-[110px]'>
              <div className='flex w-full h-[110px]'>
                <div className={`${style.text_left}`}>
                  <p>주소</p>
                  <p>주종</p>
                  <p>연락처</p>
                </div>
                <div className={`${style.text_right}`}>
                  <p>동대문구 장안동 444-2</p>
                  <p>탁주, 증류주, 과실주</p>
                  <p>02-256-1423</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${style.item_down}`}>
          <img src='/images/line.png'></img>
        </div>
      </div>
      <div className={`${style.item_box}`}>
        <div className={`${style.item_up}`}>
          <img src='/images/map/items/04.png' alt='이미지' className='w-[140px] h-[140px] object-cover'></img>
          <div className={`${style.text_area}`}>
            <div className='flex w-full h-[50px] justify-between items-center'>
              <h3 className='text-[26px] font-bold'>하늘이네 축제 한마당</h3>
              <FaBookmark className='text-[#ADA7A3] text-[22px]' />
            </div>
            <div className='w-full h-[110px]'>
              <div className='flex w-full h-[110px]'>
                <div className={`${style.text_left}`}>
                  <p>주소</p>
                  <p>주종</p>
                  <p>연락처</p>
                </div>
                <div className={`${style.text_right}`}>
                  <p>동대문구 장안동 444-2</p>
                  <p>탁주, 증류주, 과실주</p>
                  <p>02-256-1423</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${style.item_down}`}>
          <img src='/images/line.png'></img>
        </div>
      </div>

      {/* 반복문으로 만들 부분 */}






    </div>



  </>
  )
}
