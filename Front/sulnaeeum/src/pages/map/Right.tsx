import React from 'react'
import style from './map.module.css'
import {FaBookmark} from 'react-icons/fa'
import {useState} from 'react';

export default function Right(props:any) {
  
  const {tab, setTab} = props



  return (<>
          <h1>{tab}</h1>
          <div className={`${style.right_box} ${style.layout}`} id="right_box">
            <div className='flex justify-between h-[54px] mb-[14px]'>
              <div className={`${style.tab_box} ${style.selected_tab}`}
                onClick={()=> {
                  setTab('양조장')
                }}
              ><h3>양조장</h3></div>
              <div className={`${style.tab_box}`}
                onClick={()=> {
                  setTab('전통주 축제')
                }}><h3>전통주 축제</h3></div>
              <div className={`${style.tab_box}`}
                onClick={()=> {
                  setTab('체험 프로그램')
                }}
              ><h3>체험 프로그램</h3></div>
            </div>
            <div className='w-full scroll h-[680px] overflow-y-scroll'>


              <div className={`${style.item_box}`}>
                <div className={`${style.item_up}`}>
                  <img src='/images/map/items/04.png' alt='이미지' className='w-[140px] h-[140px] object-cover'></img>  
                  <div className={`${style.text_area}`}>
                    <div className='flex w-full h-[50px] justify-between items-center'>
                      <h3 className='text-[26px] font-bold'>산머루 농원</h3>
                      <FaBookmark className='text-[#ADA7A3] text-[22px]'/>
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
                  <img src='/images/map/items/04.png' alt='이미지' className='w-[140px] h-[140px] object-cover'></img>  
                  <div className={`${style.text_area}`}>
                    <div className='flex w-full h-[50px] justify-between items-center'>
                      <h3 className='text-[26px] font-bold'>산머루 농원</h3>
                      <FaBookmark className='text-[#ADA7A3] text-[22px]'/>
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
                      <h3 className='text-[26px] font-bold'>산머루 농원</h3>
                      <FaBookmark className='text-[#ADA7A3] text-[22px]'/>
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
                      <h3 className='text-[26px] font-bold'>산머루 농원</h3>
                      <FaBookmark className='text-[#ADA7A3] text-[22px]'/>
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
                      <h3 className='text-[26px] font-bold'>산머루 농원</h3>
                      <FaBookmark className='text-[#ADA7A3] text-[22px]'/>
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



            </div>
          </div>
  </>
    
  )
}
