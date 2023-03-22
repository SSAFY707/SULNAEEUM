import React from 'react'
import style from './map.module.css'
import {useState} from 'react';

export default function Title(props) {

  const {title} = props

  return (
<>
    <h1 className={`${style.map_title} ${style.layout}`}>{title}</h1>
  </>
  )
}
