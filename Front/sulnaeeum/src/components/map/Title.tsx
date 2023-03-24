import React from 'react'
import style from '@/pages/map/map.module.css'
import { useState } from 'react';

export default function Title(props) {

  const { title } = props

  return (
    <>
      <h1 className={`${style.map_title}`}>{title}</h1>
    </>
  )
}
