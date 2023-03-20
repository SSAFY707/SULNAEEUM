import React from 'react'
import style from './map.module.css'



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
  
  
  
  
  
  
  
  
  
  return (
    <>
      <Space></Space>
      <div className={style.container}>
        <div className={`${style.map_title}`}>
          <h1>전국 전통주 지도</h1>
        </div>
        <div className={style.map_box}>
          <Map1 datas={datas}></Map1>
          <Map2 datas={datas}></Map2>
        </div>
        <Mark></Mark>

        

      </div>
    </>

  )
}
