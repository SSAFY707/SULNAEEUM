import React from 'react'
import style from './map.module.css'


export default function index() {
  return (
    <>
      <div className={style.container}>
        <h1>지도 페이지</h1>
        <div className={`${style.mapContainer} ${style.layout}`}>
          <img src="images/map/전국지도.png" alt="지도 이미지" width="300"></img>
          <div className={`${style.map1}`}>
            <img src="images/map/경기도.png" alt="지도 이미지" width="158"                                        ></img>
          </div>
          <div className={`${style.map2}`}>
            <img src="images/map/강원도.png" alt="지도 이미지" width="178"                                        ></img>
          </div>
          <div className={`${style.map3}`}>
            <img src="images/map/충청도.png" alt="지도 이미지" width="190"                                        ></img>
          </div>
          <div className={`${style.map4}`}>
            <img src="images/map/전라도.png" alt="지도 이미지" width="174"                                        ></img>
          </div>
          <div className={`${style.map5}`}>
            <img src="images/map/경상도.png" alt="지도 이미지" width="154"                                        ></img>
          </div>
          <div className={`${style.map6}`}>
            <img src="images/map/제주도.png" alt="지도 이미지" width="154"                                        ></img>
          </div>
        </div>
      </div>
    </>

  )
}
