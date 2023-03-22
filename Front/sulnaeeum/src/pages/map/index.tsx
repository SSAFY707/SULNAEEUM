import React from 'react'
import style from './map.module.css'
import {FaBookmark} from 'react-icons/fa'
import {useState} from 'react';
import Map1 from './Map1';
import Map2 from './Map2';
import Title from './Title';
import Right from './Right';






export default function index() {
  
  const [tab, setTab] = useState('양조장');

  const [selected, setSelected] = useState(0);

  const [mode, setTile] = useState(0)

  const [title, setTitle] = useState('전국 전통주 지도')

  const datas = [
    {id : 1, src : 'images/map/경기도', },
    {id : 2, src : 'images/map/강원도', },
    {id : 3, src : 'images/map/충청도', },
    {id : 4, src : 'images/map/전라도', },
    {id : 5, src : 'images/map/경상도', },
    {id : 6, src : 'images/map/제주도', },
  ]

  const res = [
    
  ]
  


  return (
    <>
      <div className='w-screen h-[50px] bg-red-600'></div>
      <div className={style.container}>
        <Title title={title}></Title>
        <div className='mt-[60px] flex justify-center'>
          <div className={style.map_box} id="map_box">
            <Map1 datas={datas}></Map1>
            <Map2 datas={datas} setTitle={setTitle} selected={selected} setSelected={setSelected}></Map2>
          </div>
          <Right tab={tab} setTab={setTab}></Right>



        </div>

        <img  className={`${style.mark_box}`} src="images/mark.png" alt='문양'></img>

        

      </div>
    </>

  )
}
