import React from 'react'
import {useState} from 'react';
import Title from './Title'
import Map from './Map'






export default function test() {


  const [title, setTitle] = useState<string>('전국 전통주 지도')
  
  const list = [
    {id: 1, region: '경기도'},
    {id: 2, region: '강원도'},
    {id: 3, region: '충청도'},
    {id: 4, region: '전라도'},
    {id: 5, region: '경상도'},
    {id: 6, region: '제주도'},
]

  
  return (<>
    <div className='w-full h-[100px]'></div>
    <Title title={title} setTitle={setTitle}></Title>
    <Map setTitle={setTitle} list={list}></Map>
  
    
  </>
    
  )
}
