import React from 'react'
import style from './map.module.css'
import { FaBookmark } from 'react-icons/fa'
import { useState } from 'react';
import Map1 from '@/components/map/Map1';
import Map2 from '@/components/map/Map2';
import Title from '@/components/map/Title';
import Right from '@/components/map/Right';






export default function index() {

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

  const res = [
    {
      map_id: 1,
      list: {
        brewery: [
          {
            "brewery_id": 1,
            "img": "www.imgsrc.com",
            "brewery_name": "경기도 와이너리",
            "brewery_location": "경기도 수원시 고경면 고도리 494-3",
            "contact": "02-335-3174",
            "brewery_url": "http://고도리와인.com",
            "map_id": 1,
            "drink_type": ["탁주", "청주/약주"]
          },
          {
            "brewery_id": 2,
            "img": "www.imgsrc.com",
            "brewery_name": "술담화 양조장",
            "brewery_location": "경기도 파주시 고경면 파주골 494-2",
            "contact": "033-235-2223",
            "brewery_url": "http://고도리와인.com",
            "map_id": 1,
            "drink_type": ["과실주", "증류주"]
          },
          {
            "brewery_id": 3,
            "img": "www.imgsrc.com",
            "brewery_name": "그라가스의 술공장",
            "brewery_location": "서울시 동대문구 장안동 444-2",
            "contact": "010-5259-1173",
            "brewery_url": "http://고도리와인.com",
            "map_id": 1,
            "drink_type": ["탁주", "기타",]
          },
        ],
        program: [
          {
            "program_id": 1,
            "img": "www.imgsrc.com",
            "program_url": "http://고도리와인.com",
            "always_visit": 1,
            "reserve_visit": 1,
            "program_name": "와인 만들기 체험(경기)",
            "program_location": "고도리와이너리",
            "map_id": 1,
            "content": "수확한 포도를 와인만들기 체험장으로 가지고 와서 농장주 소믈리에와 함께 와인만들기 체험을 합니다. 만든 와인은 통을 깨끗이 씻어 댁으로 가져가실 수 있으십니다."
          },
          {
            "program_id": 2,
            "img": "www.imgsrc.com",
            "program_url": "http://고도리와인.com",
            "always_visit": 1,
            "reserve_visit": 1,
            "program_name": "우리 술 빚기",
            "program_location": "고도리와이너리",
            "map_id": 1,
            "content": "수확한 포도를 와인만들기 체험장으로 가지고 와서 농장주 소믈리에와 함께 와인만들기 체험을 합니다. 만든 와인은 통을 깨끗이 씻어 댁으로 가져가실 수 있으십니다."
          },
          {
            "program_id": 3,
            "img": "www.imgsrc.com",
            "program_url": "http://고도리와인.com",
            "always_visit": 1,
            "reserve_visit": 1,
            "program_name": "막걸리나 프로그램",
            "program_location": "국순당",
            "map_id": 1,
            "content": "수확한 포도를 와인만들기 체험장으로 가지고 와서 농장주 소믈리에와 함께 와인만들기 체험을 합니다. 만든 와인은 통을 깨끗이 씻어 댁으로 가져가실 수 있으십니다."
          },
        ]
      }
    },
    {
      map_id: 2,
      list: {
        brewery: [
          {
            "brewery_id": 4,
            "img": "www.imgsrc.com",
            "brewery_name": "강원도의 꿈",
            "brewery_location": "경기도 수원시 고경면 고도리 494-3",
            "contact": "054-335-3174",
            "brewery_url": "http://고도리와인.com",
            "map_id": 2,
            "drink_type": ["탁주", "증류주", "청주/약주"]
          },
          {
            "brewery_id": 5,
            "img": "www.imgsrc.com",
            "brewery_name": "강원도 산지 직송 양조장",
            "brewery_location": "경북 영천시 고경면 고도리 494-3",
            "contact": "054-335-3174",
            "brewery_url": "http://고도리와인.com",
            "map_id": 2,
            "drink_type": ["탁주", "증류주", "청주/약주"]
          },
          {
            "brewery_id": 6,
            "img": "www.imgsrc.com",
            "brewery_name": "와인냉장고 강원",
            "brewery_location": "경북 영천시 고경면 고도리 494-3",
            "contact": "054-335-3174",
            "brewery_url": "http://고도리와인.com",
            "map_id": 2,
            "drink_type": ["탁주", "증류주", "청주/약주"]
          },
        ],
        program: [
          {
            "program_id": 4,
            "img": "www.imgsrc.com",
            "program_url": "http://고도리와인.com",
            "always_visit": 1,
            "reserve_visit": 1,
            "program_name": "강원도 사람)",
            "program_location": "고도리와이너리",
            "map_id": 2,
            "content": "수확한 포도를 와인만들기 체험장으로 가지고 와서 농장주 소믈리에와 함께 와인만들기 체험을 합니다. 만든 와인은 통을 깨끗이 씻어 댁으로 가져가실 수 있으십니다."
          },
          {
            "program_id": 5,
            "img": "www.imgsrc.com",
            "program_url": "http://고도리와인.com",
            "always_visit": 1,
            "reserve_visit": 1,
            "program_name": "술내음 강원도",
            "program_location": "고도리와이너리",
            "map_id": 2,
            "content": "수확한 포도를 와인만들기 체험장으로 가지고 와서 농장주 소믈리에와 함께 와인만들기 체험을 합니다. 만든 와인은 통을 깨끗이 씻어 댁으로 가져가실 수 있으십니다."
          },
          {
            "program_id": 6,
            "img": "www.imgsrc.com",
            "program_url": "http://고도리와인.com",
            "always_visit": 1,
            "reserve_visit": 1,
            "program_name": "막걸리나 프로그램",
            "program_location": "국순당",
            "map_id": 2,
            "content": "수확한 포도를 와인만들기 체험장으로 가지고 와서 농장주 소믈리에와 함께 와인만들기 체험을 합니다. 만든 와인은 통을 깨끗이 씻어 댁으로 가져가실 수 있으십니다."
          },
        ]
      }
    },
    {
      map_id: 3,
      list: {
        brewery: [
          {
            "brewery_id": 7,
            "img": "www.imgsrc.com",
            "brewery_name": "충청 와인",
            "brewery_location": "충청도 수원시 고경면 고도리 494-3",
            "contact": "054-335-3174",
            "brewery_url": "http://고도리와인.com",
            "map_id": 3,
            "drink_type": ["탁주", "증류주", "청주/약주"]
          },
          {
            "brewery_id": 8,
            "img": "www.imgsrc.com",
            "brewery_name": "술꾼시골여자들",
            "brewery_location": "경북 영천시 고경면 고도리 494-3",
            "contact": "054-335-3174",
            "brewery_url": "http://고도리와인.com",
            "map_id": 3,
            "drink_type": ["탁주", "증류주", "청주/약주"]
          },
          {
            "brewery_id": 9,
            "img": "www.imgsrc.com",
            "brewery_name": "충청도민 양조장",
            "brewery_location": "경북 영천시 고경면 고도리 494-3",
            "contact": "054-335-3174",
            "brewery_url": "http://고도리와인.com",
            "map_id": 3,
            "drink_type": ["탁주", "증류주", "청주/약주"]
          },
        ],
        program: [
          {
            "program_id": 7,
            "img": "www.imgsrc.com",
            "program_url": "http://고도리와인.com",
            "always_visit": 1,
            "reserve_visit": 1,
            "program_name": "멍청도의 와인 프로그램",
            "program_location": "고도리와이너리",
            "map_id": 3,
            "content": "수확한 포도를 와인만들기 체험장으로 가지고 와서 농장주 소믈리에와 함께 와인만들기 체험을 합니다. 만든 와인은 통을 깨끗이 씻어 댁으로 가져가실 수 있으십니다."
          },
          {
            "program_id": 8,
            "img": "www.imgsrc.com",
            "program_url": "http://고도리와인.com",
            "always_visit": 1,
            "reserve_visit": 1,
            "program_name": "우리 술 충청",
            "program_location": "고도리와이너리",
            "map_id": 3,
            "content": "수확한 포도를 와인만들기 체험장으로 가지고 와서 농장주 소믈리에와 함께 와인만들기 체험을 합니다. 만든 와인은 통을 깨끗이 씻어 댁으로 가져가실 수 있으십니다."
          },
          {
            "program_id": 9,
            "img": "www.imgsrc.com",
            "program_url": "http://고도리와인.com",
            "always_visit": 1,
            "reserve_visit": 1,
            "program_name": "막걸리나 프로그램",
            "program_location": "충청당",
            "map_id": 3,
            "content": "수확한 포도를 와인만들기 체험장으로 가지고 와서 농장주 소믈리에와 함께 와인만들기 체험을 합니다. 만든 와인은 통을 깨끗이 씻어 댁으로 가져가실 수 있으십니다."
          },
        ]
      }
    },
    {
      map_id: 4,
      list: {
        brewery: [
          {
            "brewery_id": 11,
            "img": "www.imgsrc.com",
            "brewery_name": "전라도 전통주",
            "brewery_location": "경기도 수원시 고경면 고도리 494-3",
            "contact": "054-335-3174",
            "brewery_url": "http://고도리와인.com",
            "map_id": 4,
            "drink_type": ["탁주", "증류주", "청주/약주"]
          },
          {
            "brewery_id": 12,
            "img": "www.imgsrc.com",
            "brewery_name": "고도리 와이너리",
            "brewery_location": "전라도 전주시 고경면 고도리 494-3",
            "contact": "054-335-3174",
            "brewery_url": "http://고도리와인.com",
            "map_id": 4,
            "drink_type": ["소주", "증류주",]
          },
          {
            "brewery_id": 13,
            "img": "www.imgsrc.com",
            "brewery_name": "고도리 와이너리",
            "brewery_location": "경북 영천시 고경면 고도리 494-3",
            "contact": "054-335-3174",
            "brewery_url": "http://고도리와인.com",
            "map_id": 4,
            "drink_type": ["탁주", "기타", "청주/약주"]
          },
        ],
        program: [
          {
            "program_id": 11,
            "img": "www.imgsrc.com",
            "program_url": "http://고도리와인.com",
            "always_visit": 1,
            "reserve_visit": 1,
            "program_name": "와인 체험",
            "program_location": "고도리와이너리",
            "map_id": 4,
            "content": "수확한 포도를 와인만들기 체험장으로 가지고 와서 농장주 소믈리에와 함께 와인만들기 체험을 합니다. 만든 와인은 통을 깨끗이 씻어 댁으로 가져가실 수 있으십니다."
          },
          {
            "program_id": 12,
            "img": "www.imgsrc.com",
            "program_url": "http://고도리와인.com",
            "always_visit": 1,
            "reserve_visit": 1,
            "program_name": "술내음과 함께하는 잔치",
            "program_location": "고도리와이너리",
            "map_id": 4,
            "content": "수확한 포도를 와인만들기 체험장으로 가지고 와서 농장주 소믈리에와 함께 와인만들기 체험을 합니다. 만든 와인은 통을 깨끗이 씻어 댁으로 가져가실 수 있으십니다."
          },
          {
            "program_id": 13,
            "img": "www.imgsrc.com",
            "program_url": "http://고도리와인.com",
            "always_visit": 1,
            "reserve_visit": 1,
            "program_name": "서울의 밤 술내음",
            "program_location": "술냄새",
            "map_id": 4,
            "content": "수확한 포도를 와인만들기 체험장으로 가지고 와서 농장주 소믈리에와 함께 와인만들기 체험을 합니다. 만든 와인은 통을 깨끗이 씻어 댁으로 가져가실 수 있으십니다."
          },
        ]
      }
    },
    {
      map_id: 5,
      list: {
        brewery: [
          {
            "brewery_id": 14,
            "img": "www.imgsrc.com",
            "brewery_name": "경기도 와이너리",
            "brewery_location": "경기도 수원시 고경면 고도리 494-3",
            "contact": "054-335-3174",
            "brewery_url": "http://고도리와인.com",
            "map_id": 5,
            "drink_type": ["청주/약주"]
          },
          {
            "brewery_id": 15,
            "img": "www.imgsrc.com",
            "brewery_name": "고도리 와이너리",
            "brewery_location": "경북 영천시 고경면 고도리 494-3",
            "contact": "054-335-3174",
            "brewery_url": "http://고도리와인.com",
            "map_id": 5,
            "drink_type": ["탁주", "증류주", "청주/약주"]
          },
          {
            "brewery_id": 16,
            "img": "www.imgsrc.com",
            "brewery_name": "고도리 와이너리",
            "brewery_location": "경북 영천시 고경면 고도리 494-3",
            "contact": "054-335-3174",
            "brewery_url": "http://고도리와인.com",
            "map_id": 5,
            "drink_type": ["탁주", "증류주", "청주/약주"]
          },
        ],
        program: [
          {
            "program_id": 14,
            "img": "www.imgsrc.com",
            "program_url": "http://고도리와인.com",
            "always_visit": 0,
            "reserve_visit": 1,
            "program_name": "갱상도의 술 공장",
            "program_location": "고도리와이너리",
            "map_id": 5,
            "content": "수확한 포도를 와인만들기 체험장으로 가지고 와서 농장주 소믈리에와 함께 와인만들기 체험을 합니다. 만든 와인은 통을 깨끗이 씻어 댁으로 가져가실 수 있으십니다."
          },
          {
            "program_id": 15,
            "img": "www.imgsrc.com",
            "program_url": "http://고도리와인.com",
            "always_visit": 1,
            "reserve_visit": 1,
            "program_name": "우리 술 빚기(경상도)",
            "program_location": "고도리와이너리",
            "map_id": 5,
            "content": "수확한 포도를 와인만들기 체험장으로 가지고 와서 농장주 소믈리에와 함께 와인만들기 체험을 합니다. 만든 와인은 통을 깨끗이 씻어 댁으로 가져가실 수 있으십니다."
          },
          {
            "program_id": 16,
            "img": "www.imgsrc.com",
            "program_url": "http://고도리와인.com",
            "always_visit": 1,
            "reserve_visit": 1,
            "program_name": "부산 남자",
            "program_location": "부산 막걸리",
            "map_id": 5,
            "content": "수확한 포도를 와인만들기 체험장으로 가지고 와서 농장주 소믈리에와 함께 와인만들기 체험을 합니다. 만든 와인은 통을 깨끗이 씻어 댁으로 가져가실 수 있으십니다."
          },
        ]
      }
    },
    {
      map_id: 6,
      list: {
        brewery: [
          {
            "brewery_id": 17,
            "img": "www.imgsrc.com",
            "brewery_name": "제주도 와이너리",
            "brewery_location": "제주특별시 자치도고경면 고도리 494-3",
            "contact": "054-335-3174",
            "brewery_url": "http://고도리와인.com",
            "map_id": 6,
            "drink_type": ["탁주"]
          },
          {
            "brewery_id": 18,
            "img": "www.imgsrc.com",
            "brewery_name": "고도리 와이너리",
            "brewery_location": "제주시 영천시 고경면 고도리 494-3",
            "contact": "054-335-3174",
            "brewery_url": "http://고도리와인.com",
            "map_id": 6,
            "drink_type": ["탁주", "증류주", "청주/약주"]
          },
          {
            "brewery_id": 19,
            "img": "www.imgsrc.com",
            "brewery_name": "고도리 와이너리",
            "brewery_location": "서귀포시 고경면 고도리 494-3",
            "contact": "054-335-3174",
            "brewery_url": "http://고도리와인.com",
            "map_id": 6,
            "drink_type": ["탁주", "증류주", "청주/약주"]
          },
        ],
        program: [
          {
            "program_id": 17,
            "img": "www.imgsrc.com",
            "program_url": "http://고도리와인.com",
            "always_visit": 1,
            "reserve_visit": 1,
            "program_name": "제주 돌하르방 프로그램",
            "program_location": "고도리와이너리",
            "map_id": 6,
            "content": "수확한 포도를 와인만들기 체험장으로 가지고 와서 농장주 소믈리에와 함께 와인만들기 체험을 합니다. 만든 와인은 통을 깨끗이 씻어 댁으로 가져가실 수 있으십니다."
          },
          {
            "program_id": 18,
            "img": "www.imgsrc.com",
            "program_url": "http://고도리와인.com",
            "always_visit": 1,
            "reserve_visit": 1,
            "program_name": "백록담주",
            "program_location": "고도리와이너리",
            "map_id": 6,
            "content": "수확한 포도를 와인만들기 체험장으로 가지고 와서 농장주 소믈리에와 함께 와인만들기 체험을 합니다. 만든 와인은 통을 깨끗이 씻어 댁으로 가져가실 수 있으십니다."
          },
          {
            "program_id": 19,
            "img": "www.imgsrc.com",
            "program_url": "http://고도리와인.com",
            "always_visit": 1,
            "reserve_visit": 1,
            "program_name": "제주도 오름 프로그램",
            "program_location": "국순당",
            "map_id": 6,
            "content": "수확한 포도를 와인만들기 체험장으로 가지고 와서 농장주 소믈리에와 함께 와인만들기 체험을 합니다. 만든 와인은 통을 깨끗이 씻어 댁으로 가져가실 수 있으십니다."
          },
        ]
      }
    },

  ]



  return (
    <>
      <div className='w-screen h-[50px] bg-red-600'></div>
      <div className={style.container}>
        <Title title={title}></Title>
        <div className='mt-[60px] flex justify-center'>
          <div className={style.map_box} id="map_box">
            <Map1 datas={datas}></Map1>
            <Map2 setMode={setMode} datas={datas} setTitle={setTitle} selected={selected} setSelected={setSelected}></Map2>
          </div>
          <Right mode={mode} res={res} tab={tab} setTab={setTab}></Right>
        </div>
        <img className={`${style.mark_box}`} src="images/mark.png" alt='문양'></img>



      </div>
    </>

  )
}
