import { type } from 'os'
import React from 'react'

export default function info(target : string) {
    type MbtiType = {
        [index: string]: any
    }

    type ExplainType = {
        [index: string]: Array<string>
    }

    const info : MbtiType = {
        infp : {drink: '아이싱 자몽', good: 'enfj', bad: 'isfp', color: '#F4BDBF'},
        enfp : {drink: '얼떨결에', good: 'infj', bad: 'esfp', color: '#CFEAEF'},
        infj : {drink: '제주 낭만', good: 'enfp', bad: 'istp', color: '#E1CFE8'},
        enfj : {drink: '뱅꼬레 더 감', good: 'isfp', bad: 'isfj', color: '#FFECD7'},
        intp : {drink: '배꽃 필 무렵', good: 'entj', bad: 'esfj', color: '#E7D6C4'},
        entp : {drink: '여포의 꿈(화이트)', good: 'intj', bad: 'istj', color: '#FFF8C2'},
        isfp : {drink: '호산춘', good: 'esfj', bad: 'enfp', color: '#D1F8C7'},
        esfp : {drink: '키위술', good: 'istj', bad: 'infp', color: '#EAEAEA'},
        istp : {drink: '볼빨간 미자', good: 'estj', bad: 'infp', color: '#E7BFA8'},
        estp : {drink: '호랑이 배꼽', good: 'isfj', bad: 'enfp', color: '#EEDDC8'},
        isfj : {drink: '토끼 소주', good: 'estp', bad: 'enfp', color: '#DAD1CA'},
        esfj : {drink: '소호', good: 'isfp', bad: 'infj', color: '#BED1E9'},
        intj : {drink: '남산애 레드와인', good: 'entp', bad: 'istj', color: '#B9C0D0'},
        entj : {drink: '도깨비술 11', good: 'infp', bad: 'estj', color: '#F3ECE2'},
        istj : {drink: '단홍', good: 'esfp', bad: 'infj', color: '#DAB4B8'},
        estj : {drink: '서울의 밤', good: 'istp', bad: 'enfj', color: '#DFDFDF'},
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

    const target_data : any = info[target]

    const data = {
        name : target_data.drink,
        color: target_data.color,
        good_name : info[target_data.good].drink,
        good_color : info[target_data.good].color,
        bad_name : info[target_data.bad].drink,
        bad_color : info[target_data.bad].color,
        explain: explain[target],
    }

    return data;
}
