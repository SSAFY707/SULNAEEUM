import React from 'react'
import style from '@/pages/map/map.module.css'
import { useState } from 'react';

export default function Map2(props: any) {





  const { datas, setTitle, selected, setSelected, setMode } = props



  return (
    <>
      <div className={`${style.mapContainer2} ${style.layout}`}>
        {datas.map((data: any) => {
          return <>
            <img key={data} id={data.id} className={`${style['map0' + data.id]} ${style.myMap} ${style.hover_cursor}`} src={`${data.src}.png`} alt="지도 이미지"

              onMouseLeave={() => {
                const target = document.getElementById(data.id);
                if (data.id != selected && target) {
                  target.style.visibility = 'hidden'
                }

              }}

              onClick={() => {

                setSelected(data.id)
                const region = data.id
                const removeList: any = document.getElementsByClassName('map_myMap__U6q6L')
                const target: any = document.getElementById(data.id);



                for (let i = 0; i < removeList.length; i++) {
                  removeList[i].style.visibility = 'hidden';
                }
                target.style.visibility = 'visible';



                if (region == null) {
                  setTitle('전국 전통주 지도')
                  setMode(1)
                } else if (region == 1) {
                  setTitle('경기도')
                  setMode(1)
                } else if (region == 2) {
                  setTitle('강원도')
                  setMode(2)
                } else if (region == 3) {
                  setTitle('충청도')
                  setMode(3)
                } else if (region == 4) {
                  setTitle('전라도')
                  setMode(4)
                } else if (region == 5) {
                  setTitle('경상도')
                  setMode(5)
                } else if (region == 6) {
                  setTitle('제주도')
                  setMode(6)
                }


                const right_box = document.getElementById('right_box');
                if (right_box) {

                  right_box.style.display = 'inline';
                }
              }}
            ></img>
          </>
        })}
      </div>
    </>
  )
}
