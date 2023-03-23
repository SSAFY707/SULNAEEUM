import { ClearBtn, ClearFalse, ClearTrue } from '@/components/list/clearBtn'
import React from 'react'

export default function Detail() {
  return (
    <>
      <div>
        <div className={'flex justify-center items-center w-[300px] h-[300px]'}>
          <ClearBtn />
          <ClearTrue />
          <ClearFalse />
          </div>
      </div>
    </>
  )
}
