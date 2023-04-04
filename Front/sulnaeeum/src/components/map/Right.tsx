import React, { useEffect } from 'react'
import style from '@/pages/map/map.module.css'
import Brewery from './Brewery';
import Festival from './Festival';
import Program from './Program';





export default function Right(props: any) {

  const { tab, setTab, res, mode, fest } = props


  let tabContents = <Brewery mode={mode} res={res} tab={tab}></Brewery>

  if (tab === '양조장') {
    tabContents = <Brewery mode={mode} res={res} tab={tab}></Brewery>
  } else if (tab === '전통주 축제') {
    tabContents = <Festival mode={mode} fest={fest} tab={tab}></Festival>
  } else if (tab === '체험 프로그램') {
    tabContents = <Program mode={mode} res={res} tab={tab}></Program>
  }


  return (<>

    <div className={`${style.right_box} ${style.layout} ${tab != '' ? 'inline' : 'hidden'} `} id="right_box">
      <div className='flex justify-between h-[54px] mb-[14px]'>
        <div id='brewery' className={`${style.tab_box} ${style.hover_cursor} border-[#CFCAC7] border-solid ${tab === '양조장' ? "border border-solid border-[#CFCAC7] " : "border-b"}`}
          onClick={() => {
            setTab('양조장')

          }}
        ><h3>양조장</h3></div>
        <div id='festival' className={`${style.tab_box} ${style.hover_cursor} border-[#CFCAC7] border-solid ${tab === '전통주 축제' ? "border border-solid border-[#CFCAC7] " : "border-b"}`}
          onClick={(event) => {
            setTab('전통주 축제')

          }}><h3>전통주 축제</h3></div>
        <div id='program' className={`${style.tab_box} ${style.hover_cursor} border-[#CFCAC7] border-solid ${tab === '체험 프로그램' ? "border border-solid border-[#CFCAC7] " : "border-b"}`}
          onClick={() => {
            setTab('체험 프로그램')

          }}
        ><h3>체험 프로그램</h3></div>
      </div>

      {tabContents}


    </div>
  </>

  )
}
