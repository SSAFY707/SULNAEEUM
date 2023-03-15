import React from 'react'
import style from './map.module.css'


export default function index() {
  return (
    <>
      <div className={style.container}>
        <h1>지도 페이지</h1>
        <div className={style.lay && style.mapContainer}>
          <img src="images/map/전국지도.png" alt="지도 이미지" width="500"></img>
        </div>

      </div>
    </>
  )
}
