import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { BsArrowLeftCircle } from 'react-icons/bs';

const Jubti: React.FC = () => {

  type MbtiType = {
    [index : string] : string
  }

  // 선택된 데이터 타입
  type SelData = {
    [index: string]: string | Number 
    age : string;
    sex: string;
    level: Number;
    tasteRefresh: Number;
    tasteBody: Number;
    tasteThroat: Number;
    tasteSour: Number;
    tasteSweet: Number;
    tasteFlavor: Number;
    dish: string;
    ie: Number;
    ns: Number;
    ft: Number;
    jp: Number;
  } 

  // JBTI 질문지 데이터
  const datas = {
    age : [
      { name: '20대', value: '20s'},
      { name: '30대', value: '30s'},
      { name: '40대', value: '40s'},
      { name: '50대', value: '50s'},
      { name: '60대 이상', value: '60s' }
      ],
    sex : [
      {name: '남성', value: 'man'},
      {name: '여성', value: 'woman'},
    ],
    dish : [
      {name: '육류', value: 'meat'},
      {name: '양식', value: 'western'},
      {name: '해산물', value: 'seafood'},
      {name: '전 / 무침', value: 'jeon'},
      {name: '탕 / 전골', value: 'soup'},
      {name: '디저트', value: 'dessert'}
    ],
    question : [
      {value: 'tasteRefresh', value2: 'tasteBody', q1: '탄산음료', q2: '이온음료'},
      {value: 'ie', q1: '혼술', q2: '같이 술먹기'},
      {value: 'tasteThroat', q1: '처음처럼', q2: '참이슬'},
      {value: 'level', q1: '가볍게 술 한잔', q2: '얼큰하게 만취'},
      {value: 'ns', q1: '술 섞어먹기', q2: '그냥 먹기'},
      {value: 'tasteSweet', value2: 'tasteSour', q1: '새콤한 젤리', q2: '달콤한 쿠키'},
      {value: 'ft', q1: '술 마시면 운다', q2: '술 마셔도 안운다'},
      {value: 'tasteFlavor', q1: '반민초', q2: '민초'},
      {value: 'jp', q1: '미리 찾아본 술집', q2: '즉형적으로 정한 술집'},
    ],
  }

  // 페이지 이동을 위한 검증 과정
  const page_data = [
    ['age', 'sex'],
    ['tasteRefresh', 'ie', 'tasteThroat'],
    ['level', 'ns', 'tasteSweet'],
    ['ft', 'tasteFlavor', 'jp'],
    ['dish']
  ]
  
  const sel_data : SelData = {
    age: '',
    sex: '',
    level: 0,
    tasteRefresh: 0,
    tasteBody: 0,
    tasteThroat: 0,
    tasteSour: 0,
    tasteSweet: 0,
    tasteFlavor: 0,
    dish: '',
    ie: 0,
    ns: 0,
    ft: 0,
    jp: 0
  }

  const router = useRouter()
  
  const [data, setData] = useState<SelData>(sel_data)
  const [page, setPage] = useState(0)
  
  // 선택된 데이터를 sel_data에 넣는 과정
  const select = (key : string, value : any) => {
    // console.log(key, value)
    const new_data : SelData = {...data}
    new_data[key] = value
    setData(new_data)
  }

  const select2 = (key1 : string, key2 : string, value: any) => {
    const new_data : SelData = {...data}
    new_data[key1] = value
    new_data[key2] = 6 - value;
    setData(new_data)
  }

  const check_select = () => {
    let flag = true;
    page_data[page-1].forEach(key => {
      if(data[key] == ''){
        flag = false
        return
      }
    });
    if(!flag) return false
    return true
  }

  const move_page = () => { 
    if(!check_select()) {
      alert('질문을 모두 선택해 주세요 >.<')
      return
    } 
    return setPage(page + 1)
  }

  const mbti_to_drink : MbtiType = {
    infp: '아이싱 자몽',
    enfp: '얼떨결에',
    infj: '제주 낭만',
    enfj: '뱅꼬레 더감',
    intj: '남산애 레드와인',
    entj: '도깨비술 11',
    intp: '배꽃 필 무렵',
    entp: '여포의 꿈(화이트)',
    isfp: '호산춘',
    esfp: '키위술',
    istp: '볼빨간 미자',
    estp: '호랑이 배꼽',
    isfj: '토끼 소주',
    esfj: '소호',
    istj: '단홍',
    estj: '서울의 밤'
  }

  const jubti = () => {
    if(!check_select()) {
      alert('안주를 선택해 주세요')
      return
    }
    let mbti = ''
    const arr : Array<string> = ['ie', 'ns', 'ft', 'jp']
    const check = (key : string, value: Number) => {
      if (value < 3) {
        return key[0]
      } else if (value > 3) {
        return key[1]
      } else {
        // random으로 0 / 1 생성하기
        const idx = Math.round(Math.random())
        return key[idx]
      }
    }
    arr.map((a)=>{mbti += check(a, data[a] as Number)})
    const drink = mbti_to_drink[mbti]
    console.log(drink)
    router.push(`/jubti/result/${drink}`)
  }
}
export default Jubti
