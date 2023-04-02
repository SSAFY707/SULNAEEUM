import React from 'react'
import style from './map.module.css'
import { useEffect, useState } from 'react';
import Map1 from '@/components/map/Map1';
import Map2 from '@/components/map/Map2';
import Title from '@/components/map/Title';
import Right from '@/components/map/Right';





export default function index() {




  type bereweryType = {
    breweryId: number,
    mapDto: {
      mapId: number,
      mapName: string,
    },
    breweryName: string,
    breweryLocation: string,
    breweryUrl: string,
    contact: string,
    breweryImg: string,
    drinkTypeList: Array<string>,
  }

  type programType = {
    programId: number,
    mapDto: {
      mapId: number,
      mapName: string,
    },
    programName: string,
    programLocation: string,
    alwaysVisit: boolean,
    reserveVisit: boolean,
    programUrl: string,
    content: string,
    programImg: string,

  }


  type listDtoType = {
    breweryDtoList: bereweryType[],
    programDtoList: programType[],
  }

  type dataType = {
    mapId: number,
    listDto: listDtoType,
  }

  const [res, setRes] = useState<dataType[]>([])



  useEffect(() => {
    loadData();
    console.log('tab data: >>>>>')


  }, [])

  const loadData = async () => {

    const url = 'https://j8a707.p.ssafy.io/api/map/n'
    const res = await fetch('https://j8a707.p.ssafy.io/api/map/n')
    const jsonRes = await res.json()

    setRes(jsonRes)

  }


  const [tab, setTab] = useState('양조장');

  const [selected, setSelected] = useState(0);

  const [mode, setMode] = useState(1)

  const [title, setTitle] = useState('전국 전통주 지도')

  const datas = [
    { id: 1, src: 'images/map/경기도', },
    { id: 2, src: 'images/map/강원도', },
    { id: 3, src: 'images/map/충청도', },
    { id: 4, src: 'images/map/전라도', },
    { id: 5, src: 'images/map/경상도', },
    { id: 6, src: 'images/map/제주도', },
  ]



  const fest = [
    {
      "map_id": 0,
      "fest_name": "우리 술 대축제",
      "start_date": "2022-11-18T00:00:00.000Z",
      "end_date": "2022-11-20T00:00:00.000Z",
      "location": "서울특별시 양재동 aT센터 제1 전시장",
      "url": "https://sool-fest.com/home/index.php",
      "contents": "'전국의 우리 술을 경험할 수 있는 기회, 우리 술 대축제에 놀러오세요. 막걸리 빚기 체험, 우리 술 해설, 라이브커머스, 우리술 경매쇼, 일일 소믈리에 체험 등 다양한 이벤트가 준비되어있습니다."
    },
    {
      "map_id": 1,
      "fest_name": "일산 막걸리 축제",
      "start_date": "2022-10-08T00:00:00.000Z",
      "end_date": "2022-10-08T00:00:00.000Z",
      "location": "경기도 고양시 일산문화광장(정발산역)",
      "url": "https://sool-fest.com/home/index.php",
      "contents": "“대한민국막걸리축제”, ‘개최’를 통해서 우리나라 전통주인 막걸리의 품질 향상에 공헌하고, 막걸리 대중화에 이바지하고 있다. 대한민국 최고의 ‘명품축제’로 자리매김한 “대한민국막걸리축제” 는 전국 11개 광역 시·도에서 150여 종의 막걸리를 출품·전시함과 동시에 무료 시음회를 실시하는 자랑스런 우리 술 막걸리를 응원하는 전통주 축제입니다.'"
    },
    {
      "map_id": 2,
      "fest_name": "춘천 술 페스타",
      "start_date": "2022-10-07T00:00:00.000Z",
      "end_date": "2022-10-08T00:00:00.000Z",
      "location": "강원도 춘천시 스포츠타운길399길 25 KT&G상상마당 춘천아트센터",
      "url": "http://www.ccsool.co.kr",
      "contents": "우리 쌀 소비 촉진과 전통주 인식 개선을 위한 춘천 지역 전통주 페스티벌이다.6월부터 10월까지 춘천 곳곳에서 사전행사가 진행되고 10월 7일~8일에는 본행사가 진행된다.개막식, 강연(특강)-우리 술 이야기살롱, 공연-춘천愛 愛술, 전시 및 판매, 체험프로그램 등"
    },
    {
      "map_id": 3,
      "fest_name": "와인 페스티벌",
      "start_date": "2022-10-11T00:00:00.000Z",
      "end_date": "2022-10-14T00:00:00.000Z",
      "location": "충청도 영동군 영동읍 부용리",
      "url": "http://www.xn--3e0bs9hfvin4kupbe2ag4z7tp.com/",
      "contents": '대한민국 최고의 와인을 소개하는 대한민국 와인축제는 영동에서 재배되는 포도로 빚어진 32개의 와이너리 농가에서 만든 와인뿐만 아니라 관외지역의 와인까지 소개하고 함께 즐기는 축제입니다.'
    },
    {
      "map_id": 4,
      "fest_name": "전주 가맥 축제",
      "start_date": "2022-08-11T00:00:00.000Z",
      "end_date": "2022-08-13T00:00:00.000Z",
      "location": "전라도 전주시 종합경기장 내 야구장",
      "url": "http://www.gamaek.co.kr/",
      "contents": "가맥이라는 문화를 축제로 만납니다! 동네의 작은 가게에서 건어물등의 간단한 안주와 함께 맥주를 마시던 가맥의 모습은 저렴한 안주로 하루의 피곤함을 날리는 전주만의 독특한 문화로 형성되었습니다."
    },
    {
      "map_id": 5,
      "fest_name": "영천 와인 페스타",
      "start_date": "2022-10-08T00:00:00.000Z",
      "end_date": "2022-10-08T00:00:00.000Z",
      "location": "경상북도 영천시 화룡동 128번지",
      "url": "https://ycwine.or.kr",
      "contents": '영천와인페스타는 14개의 와이너리에서 연간 27만병의 와인을 생산하고매년 3만명의 와인 투어객이 찾는 와인의 고장 영천에서 열리는대규모의 와인축제로 2013년부터 매년 가을에 개최되고 있습니다.'
    },
    {
      "map_id": 6,
      "fest_name": "제주 우리술 축제",
      "start_date": "2022-08-20T00:00:00.000Z",
      "end_date": "2022-08-20T00:00:00.000Z",
      "location": "제주특별자치도 제주시 구좌읍 세평항로 46-9",
      "url": "https://bit.ly/2022제술페",
      "contents": "맑은 제주에서 자란 다양한 원물을 이용하여 탄생한 각양각색의 우리술이 한곳에 모인 '2022 제주한잔 우리술 페스티벌'에서는 제주도 전통주를 4가지 컨셉으로 나눈 부스와 칵테일, 푸드, 제주한잔 독립 부스 등이 운영돼 20가지가 넘는 다양한 제주 전통주를 직접 맛보고 경험할 수 있다. 2022년 JDC DMO사업에 참여한 기업들의 제품 판매와 제주 스타트업협회의 화성장 플리마켓, 홍조 밴드등 제주도에서 활동하는 뮤지션들의 공연도 함께 열리며, 제주관광공사 카름스테이 체험 프로그램인 세화리 마을의 해녀투어, 다랑쉬 웰니스투어와 파란공장이 양조장과 함께 기획한 전통주 술 빚기, 칵테일 체험도 함께 운영되어 풍성한 즐길거리를 제공한다."
    }
  ]




  return (
    <>
      <div className='w-screen h-[50px] bg-red-600'></div>
      <div className={style.container}>
        <Title title={title}></Title>


        {/* {data.map((v, index) => {
          return <>
            <h1 key={index}>{v.mapId}</h1>
            <h1>{v.listDto.breweryDtoList[0].breweryName}</h1>
          </>
        })} */}
        <div className='mt-[60px] flex justify-center'>
          <div className={style.map_box} id="map_box">
            <Map1 datas={datas}></Map1>
            <Map2 setMode={setMode} datas={datas} setTitle={setTitle} selected={selected} setSelected={setSelected}></Map2>
          </div>
          <Right fest={fest} mode={mode} res={res} tab={tab} setTab={setTab}></Right>
        </div>
        <img className={`${style.mark_box}`} src="images/mark.png" alt='문양'></img>



      </div>
    </>

  )
}

