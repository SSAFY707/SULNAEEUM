import React from 'react'
import style from './map.module.css'
import {FaBookmark} from 'react-icons/fa'
import {useState} from 'react';






const datas = [
  {id : 1, src : 'images/map/경기도', },
  {id : 2, src : 'images/map/강원도', },
  {id : 3, src : 'images/map/충청도', },
  {id : 4, src : 'images/map/전라도', },
  {id : 5, src : 'images/map/경상도', },
  {id : 6, src : 'images/map/제주도', },
]



function Space() {
  return <>
    <div className='w-screen h-[50px] bg-red-600'></div>
  </>
}

function Title(props: {title : string}) {
  const {title} = props

  return <>
    <h1 className={`${style.map_title} ${style.layout}`}>{title}</h1>
  </>
}


function Map1(props:any) {
  const {datas} = props

  return <>
    <div className={`${style.mapContainer} ${style.layout}`}>

            {datas.map((data: any, index: number)=> {
              return <>
                <img key={index} className={`${style['map'+ data.id]} ${style.hover_cursor}`} src= {`${data.src}기본.png`} alt="지도 이미지"
                  onMouseOver={()=>{
                  const target = document.querySelector('.' + style['map0'+data.id]);
                  target?.classList.toggle(style['nosee'])
                }}></img>

              </>
            })}
        </div>
  </>
}

function Map2(props:any) {




  const {datats} = props

  return <>
    <div className={`${style.mapContainer2} ${style.layout}`}>
      {datas.map((data:any, index: number)=> {
        return <>
          <img id='map1' className={`${style['map0'+data.id]} ${style.nosee}  ${style.hover_cursor}`} src={`${data.src}.png`} alt="지도 이미지"
          onMouseLeave={()=> {
          const target = document.querySelector('.' + style['map0'+data.id]);
          target?.classList.toggle(style['nosee'])
          }}
          onClick={()=> {
            

            const right_box = document.getElementById('right_box');
            if(right_box) {
       
              right_box.style.display = 'inline';
              console.log('display show 실행')
            }
          }}
        ></img>
        </>
      })}
    </div>  
  </>
}


function Mark() {
  return <>
    <img  className={`${style.mark_box}`} src="images/mark.png" alt='문양'></img>
    
  </>
}




export default function index() {
  
  
  const title = '전국 전통주 지도'

  
  
  
  
  
  
  
  
  
  return (
    <>
      <Space></Space>
      <div className={style.container}>
        <Title title={title}></Title>
        <div className='mt-[60px] flex justify-center'>
          <div className={style.map_box} id="map_box">
            <Map1 datas={datas}></Map1>
            <Map2 datas={datas}></Map2>
          </div>
          <div className={`${style.right_box} ${style.layout}`} id="right_box">
            <div className='flex justify-between h-[54px] mb-[14px]'>
              <div className={`${style.tab_box} ${style.selected_tab}`}><h3>양조장</h3></div>
              <div className={`${style.tab_box}`}><h3>전통주 축제</h3></div>
              <div className={`${style.tab_box}`}><h3>체험 프로그램</h3></div>
            </div>
            <div className=''>


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




            </div>
          </div>

        </div>

        <Mark></Mark>

        

      </div>
    </>

  )
}
