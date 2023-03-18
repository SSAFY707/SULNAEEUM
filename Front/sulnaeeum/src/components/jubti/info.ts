import { type } from 'os'
import React from 'react'

export default function info(target : string) {
    type MbtiType = {
        [index: string]: any
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

    const target_data : any = info[target]

    const data = {
        name : target_data.drink,
        color: target_data.color,
        good_name : info[target_data.good].drink,
        good_color : info[target_data.good].color,
        bad_name : info[target_data.bad].drink,
        bad_color : info[target_data.bad].color,
    }

    return data;
}
