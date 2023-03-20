import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'

export default function Test(props : any) {


    type DataType = {
        name : string,
        summary : string,
        dish : string, 
        color: string,
        good_name : string,
        good_color : string,
        bad_name : string,
        bad_color : string,
        explain: Array<string>,
    }

    const data : DataType = {
        name : '',
        summary : '',
        dish : '', 
        color: '',
        good_name : '',
        good_color : '',
        bad_name : '',
        bad_color : '',
        explain: [],
    }

    const router = useRouter()
    const [id, setId] = useState('')
    useEffect(() => {
        const idx = router.query.idx
        if(idx) { 
            setId(idx as string) 
        }   
    }, [router.query])
    
    const { result } = props
    console.log(result)

  return (
    <div className={'text-xl'}>{id}</div>
    
  )
}


type MbtiType = {
    [index: string]: any
}

type ExplainType = {
    [index: string]: Array<string>
}

const info : MbtiType = {
    infp : {dish: '케이크', summary: '혼술러에게 딱! 새콤 달콤 자몽맛', drink: '아이싱 자몽', good: 'enfj', bad: 'isfp', color: '#F4BDBF'},
    enfp : {dish: '', summary: '', drink: '얼떨결에', good: 'infj', bad: 'esfp', color: '#CFEAEF'},
    infj : {dish: '', summary: '', drink: '제주 낭만', good: 'enfp', bad: 'istp', color: '#E1CFE8'},
    enfj : {dish: '', summary: '', drink: '뱅꼬레 더 감', good: 'isfp', bad: 'isfj', color: '#FFECD7'},
    intp : {dish: '', summary: '', drink: '배꽃 필 무렵', good: 'entj', bad: 'esfj', color: '#E7D6C4'},
    entp : {dish: '', summary: '', drink: '여포의 꿈(화이트)', good: 'intj', bad: 'istj', color: '#FFF8C2'},
    isfp : {dish: '', summary: '', drink: '호산춘', good: 'esfj', bad: 'enfp', color: '#D1F8C7'},
    esfp : {dish: '', summary: '', drink: '키위술', good: 'istj', bad: 'infp', color: '#EAEAEA'},
    istp : {dish: '', summary: '', drink: '볼빨간 미자', good: 'estj', bad: 'infp', color: '#E7BFA8'},
    estp : {dish: '', summary: '', drink: '호랑이 배꼽', good: 'isfj', bad: 'enfp', color: '#EEDDC8'},
    isfj : {dish: '', summary: '', drink: '토끼 소주', good: 'estp', bad: 'enfp', color: '#DAD1CA'},
    esfj : {dish: '', summary: '', drink: '소호', good: 'isfp', bad: 'infj', color: '#BED1E9'},
    intj : {dish: '', summary: '', drink: '남산애 레드와인', good: 'entp', bad: 'istj', color: '#B9C0D0'},
    entj : {dish: '', summary: '', drink: '도깨비술 11', good: 'infp', bad: 'estj', color: '#F3ECE2'},
    istj : {dish: '', summary: '', drink: '단홍', good: 'esfp', bad: 'infj', color: '#DAB4B8'},
    estj : {dish: '', summary: '', drink: '서울의 밤', good: 'istp', bad: 'enfj', color: '#DFDFDF'},
}

const explain : ExplainType = {
    infp : ['핑크빛의 아이싱 자몽처럼 아름다움과 추함, 선과 악, 도덕과 비도덕에 민감해요.', '내면의 세계를 추구하여 늘 무언가를 갈구해요', '즉흥적이며 변화가 비슷해요', '내면 갈등이 심하여 감정 기복이 심해요', '상대방을 배려하고, 자신과 관심사가 비슷한 사람을 만나면 빨리 친해져요.'],
    enfp : ['핑크빛의 아이싱 자몽처럼 아름다움과 추함, 선과 악, 도덕과 비도덕에 민감해요.', '내면의 세계를 추구하여 늘 무언가를 갈구해요', '즉흥적이며 변화가 비슷해요', '내면 갈등이 심하여 감정 기복이 심해요', '상대방을 배려하고, 자신과 관심사가 비슷한 사람을 만나면 빨리 친해져요.'],
    infj : ['핑크빛의 아이싱 자몽처럼 아름다움과 추함, 선과 악, 도덕과 비도덕에 민감해요.', '내면의 세계를 추구하여 늘 무언가를 갈구해요', '즉흥적이며 변화가 비슷해요', '내면 갈등이 심하여 감정 기복이 심해요', '상대방을 배려하고, 자신과 관심사가 비슷한 사람을 만나면 빨리 친해져요.'],
    enfj : ['핑크빛의 아이싱 자몽처럼 아름다움과 추함, 선과 악, 도덕과 비도덕에 민감해요.', '내면의 세계를 추구하여 늘 무언가를 갈구해요', '즉흥적이며 변화가 비슷해요', '내면 갈등이 심하여 감정 기복이 심해요', '상대방을 배려하고, 자신과 관심사가 비슷한 사람을 만나면 빨리 친해져요.'],
    intp : ['핑크빛의 아이싱 자몽처럼 아름다움과 추함, 선과 악, 도덕과 비도덕에 민감해요.', '내면의 세계를 추구하여 늘 무언가를 갈구해요', '즉흥적이며 변화가 비슷해요', '내면 갈등이 심하여 감정 기복이 심해요', '상대방을 배려하고, 자신과 관심사가 비슷한 사람을 만나면 빨리 친해져요.'],
    entp : ['핑크빛의 아이싱 자몽처럼 아름다움과 추함, 선과 악, 도덕과 비도덕에 민감해요.', '내면의 세계를 추구하여 늘 무언가를 갈구해요', '즉흥적이며 변화가 비슷해요', '내면 갈등이 심하여 감정 기복이 심해요', '상대방을 배려하고, 자신과 관심사가 비슷한 사람을 만나면 빨리 친해져요.'],
    isfp : ['핑크빛의 아이싱 자몽처럼 아름다움과 추함, 선과 악, 도덕과 비도덕에 민감해요.', '내면의 세계를 추구하여 늘 무언가를 갈구해요', '즉흥적이며 변화가 비슷해요', '내면 갈등이 심하여 감정 기복이 심해요', '상대방을 배려하고, 자신과 관심사가 비슷한 사람을 만나면 빨리 친해져요.'],
    esfp : ['핑크빛의 아이싱 자몽처럼 아름다움과 추함, 선과 악, 도덕과 비도덕에 민감해요.', '내면의 세계를 추구하여 늘 무언가를 갈구해요', '즉흥적이며 변화가 비슷해요', '내면 갈등이 심하여 감정 기복이 심해요', '상대방을 배려하고, 자신과 관심사가 비슷한 사람을 만나면 빨리 친해져요.'],
    istp : ['핑크빛의 아이싱 자몽처럼 아름다움과 추함, 선과 악, 도덕과 비도덕에 민감해요.', '내면의 세계를 추구하여 늘 무언가를 갈구해요', '즉흥적이며 변화가 비슷해요', '내면 갈등이 심하여 감정 기복이 심해요', '상대방을 배려하고, 자신과 관심사가 비슷한 사람을 만나면 빨리 친해져요.'],
    estp : ['핑크빛의 아이싱 자몽처럼 아름다움과 추함, 선과 악, 도덕과 비도덕에 민감해요.', '내면의 세계를 추구하여 늘 무언가를 갈구해요', '즉흥적이며 변화가 비슷해요', '내면 갈등이 심하여 감정 기복이 심해요', '상대방을 배려하고, 자신과 관심사가 비슷한 사람을 만나면 빨리 친해져요.'],
    isfj : ['핑크빛의 아이싱 자몽처럼 아름다움과 추함, 선과 악, 도덕과 비도덕에 민감해요.', '내면의 세계를 추구하여 늘 무언가를 갈구해요', '즉흥적이며 변화가 비슷해요', '내면 갈등이 심하여 감정 기복이 심해요', '상대방을 배려하고, 자신과 관심사가 비슷한 사람을 만나면 빨리 친해져요.'],
    esfj : ['핑크빛의 아이싱 자몽처럼 아름다움과 추함, 선과 악, 도덕과 비도덕에 민감해요.', '내면의 세계를 추구하여 늘 무언가를 갈구해요', '즉흥적이며 변화가 비슷해요', '내면 갈등이 심하여 감정 기복이 심해요', '상대방을 배려하고, 자신과 관심사가 비슷한 사람을 만나면 빨리 친해져요.'],
    intj : ['핑크빛의 아이싱 자몽처럼 아름다움과 추함, 선과 악, 도덕과 비도덕에 민감해요.', '내면의 세계를 추구하여 늘 무언가를 갈구해요', '즉흥적이며 변화가 비슷해요', '내면 갈등이 심하여 감정 기복이 심해요', '상대방을 배려하고, 자신과 관심사가 비슷한 사람을 만나면 빨리 친해져요.'],
    entj : ['핑크빛의 아이싱 자몽처럼 아름다움과 추함, 선과 악, 도덕과 비도덕에 민감해요.', '내면의 세계를 추구하여 늘 무언가를 갈구해요', '즉흥적이며 변화가 비슷해요', '내면 갈등이 심하여 감정 기복이 심해요', '상대방을 배려하고, 자신과 관심사가 비슷한 사람을 만나면 빨리 친해져요.'],
    istj : ['핑크빛의 아이싱 자몽처럼 아름다움과 추함, 선과 악, 도덕과 비도덕에 민감해요.', '내면의 세계를 추구하여 늘 무언가를 갈구해요', '즉흥적이며 변화가 비슷해요', '내면 갈등이 심하여 감정 기복이 심해요', '상대방을 배려하고, 자신과 관심사가 비슷한 사람을 만나면 빨리 친해져요.'],
    estj : ['핑크빛의 아이싱 자몽처럼 아름다움과 추함, 선과 악, 도덕과 비도덕에 민감해요.', '내면의 세계를 추구하여 늘 무언가를 갈구해요', '즉흥적이며 변화가 비슷해요', '내면 갈등이 심하여 감정 기복이 심해요', '상대방을 배려하고, 자신과 관심사가 비슷한 사람을 만나면 빨리 친해져요.'],
}

export async function getServerSideProps(context : any) {
    const id = context.query.idx
    const res = {
        name: info[id].drink,
        good_name: info[info[id].good].drink
    }
    console.log(res)

    return {
        props: {
            result: JSON.parse(JSON.stringify(res)),
        }
    }
}

