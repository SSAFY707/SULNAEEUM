import React from 'react'
import style from './map.module.css'
import { useState } from 'react';
import Brewery from './Brewery';
import Festival from './Festival';
import Program from './Program';





export default function Right(props: any) {

  const { tab, setTab, res, mode } = props


  console.log('선택된 지도 id')

  let tabContents = <Brewery mode={mode} res={res} tab={tab}></Brewery>

  if (tab === '양조장') {
    tabContents = <Brewery mode={mode} res={res} tab={tab}></Brewery>
  } else if (tab === '전통주 축제') {
    tabContents = <Festival mode={mode} res={res} tab={tab}></Festival>
  } else if (tab === '체험 프로그램') {
    tabContents = <Program mode={mode} res={res} tab={tab}></Program>
  }


  return (<>
    {/* <div className="absolute top-[40px] left-[20px] z-[100]">
      <h1>map_id : {mode}</h1>
      <h1>양조장</h1>
      {res[mode - 1].list.brewery.map((v: any, index: number) => {
        return <>
          <h3>{v.brewery_name}</h3>
          <h3>{v.brewery_location}</h3>
          <h3>{v.img}</h3>
        </>
      })}
      <h1>체험프로그램</h1>
      {res[mode - 1].list.program.map((v: any, index: number) => {
        return <>
          <h3>{v.program_id}</h3>
          <h3>{v.program_name}</h3>
          <h3>{v.program_location}</h3>
          <h3>{v.always_visit}</h3>
        </>
      })}
    </div> */}

    <div className={`${style.right_box} ${style.layout}`} id="right_box">
      <div className='flex justify-between h-[54px] mb-[14px]'>
        <div id='brewery' className={`${style.tab_box} ${style.selected_tab} ${style.hover_cursor}`}
          onClick={() => {
            setTab('양조장')
            const removeList: any = document.getElementsByClassName('map_tab_box__6t4lt')
            const target: any = document.getElementById('brewery')

            for (let i = 0; i < removeList.length; i++) {
              removeList[i].style.border = 'none'
              removeList[i].style.borderBottom = '1px solid #ADA7A3'
            }
            target.style.border = '1px solid #ADA7A3'

          }}
        ><h3>양조장</h3></div>
        <div id='festival' className={`${style.tab_box} ${style.hover_cursor}`}
          onClick={(event) => {
            setTab('전통주 축제')
            const removeList: any = document.getElementsByClassName('map_tab_box__6t4lt')
            const target: any = document.getElementById('festival')


            for (let i = 0; i < removeList.length; i++) {
              removeList[i].style.border = 'none'
              removeList[i].style.borderBottom = '1px solid #ADA7A3'
            }
            target.style.border = '1px solid #ADA7A3'

          }}><h3>전통주 축제</h3></div>
        <div id='program' className={`${style.tab_box} ${style.hover_cursor}`}
          onClick={() => {
            setTab('체험 프로그램')
            const removeList: any = document.getElementsByClassName('map_tab_box__6t4lt')
            const target: any = document.getElementById('program')


            for (let i = 0; i < removeList.length; i++) {
              removeList[i].style.border = 'none'
              removeList[i].style.borderBottom = '1px solid #ADA7A3'
            }
            target.style.border = '1px solid #ADA7A3'
          }}
        ><h3>체험 프로그램</h3></div>
      </div>

      {tabContents}


    </div>
  </>

  )
}
