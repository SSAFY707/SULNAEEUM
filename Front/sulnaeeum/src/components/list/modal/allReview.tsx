import React from 'react'
import { GrFormClose } from 'react-icons/gr'

export default function AllReview(props: {modalOpen}) {
    const {modalOpen} = props
  return (
    <div className={'w-full h-full'}>
        <div onClick={modalOpen} className={'flex items-center w-full h-[40px] p-4 cursor-pointer justify-end text-[30px] hover:text-[34px]'}><GrFormClose /></div>
        <div className={'w-full h-[300px] bg-zinc-100'}></div>
    </div>
  )
}
