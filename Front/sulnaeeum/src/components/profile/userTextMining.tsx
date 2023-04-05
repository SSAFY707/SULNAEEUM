import React, { useEffect, useRef } from 'react'
// import NextWordCloud from './index';
import Image from "next/image";
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getTextMining, textMining } from '@/store/userSlice';

import * as d3 from 'd3';
import * as d3cloud from 'd3-cloud';

const data = [
  { text: 'hello', size: 10 },
  { text: 'world', size: 20 },
  { text: 'next.js', size: 5 },
  // ...
];

const layout = d3cloud()
  .size([500, 500]) // Word Cloud의 크기
  .words(data) // 데이터
  .padding(5) // 각 단어 사이의 간격
  .rotate(() => ~~(Math.random() * 2) * 90) // 단어를 무작위로 회전시킴
  .fontSize(d => d.size) // 각 단어의 크기
  .on('end', words => {
    // Word Cloud가 생성된 후에 실행될 콜백 함수
  })
  .start(); // 레이아웃 실행

export default function UserTextMining(words) {
  const wordCloudRef = useRef(null);
  const textMiningInfo = useAppSelector(textMining)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getTextMining())
    // Word Cloud 데이터 정의
    const data = [
      { text: 'hello', size: 10 },
      { text: 'world', size: 20 },
      { text: 'next.js', size: 5 },
      // ...
    ];
  
    // Word Cloud 레이아웃 생성
    const layout = d3cloud()
      .size([500, 500])
      .words(data)
      .padding(5)
      .rotate(() => ~~(Math.random() * 2) * 90)
      .fontSize(d => d.size)
      .on('end', words => {
        // 렌더링 함수 실행
        renderWordCloud(words);
      })
      .start();
  
    // Word Cloud 렌더링 함수
    function renderWordCloud(words) {
      d3.select(wordCloudRef.current)
        .append('svg')
        .attr('width', layout.size()[0])
        .attr('height', layout.size()[1])
        .append('g')
        .attr('transform', `translate(${layout.size()[0] / 2},${layout.size()[1] / 2})`)
        .selectAll('text')
        .data(words)
        .enter()
        .append('text')
        .style('font-size', d => `${d.size}px`)
        .style('fill', d => d3.interpolateRainbow(Math.random()))
        .attr('text-anchor', 'middle')
        .attr('transform', d => `translate(${d.x},${d.y})rotate(${d.rotate})`)
        .text(d => d.text);
    }
  }, [])
    


  return (
    <>
        <div ref={wordCloudRef}></div>
    </>
)
}
