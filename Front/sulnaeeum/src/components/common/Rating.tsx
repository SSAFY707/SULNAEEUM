import React, { useState } from 'react'

export const Rating = (props: {size: string, clickRadio}) => {
    const {size, clickRadio} = props
  return (
    <form className={`mx-5 flex flex-row-reverse justify-end`} style={{fontSize: size}}>
        <label htmlFor="score"></label>
        <input onChange={clickRadio} type="radio" className="peer hidden" id="value5" value="5" name="score" />
        <label htmlFor="value5" className="cursor-pointer text-gray-200 peer-hover:text-yellow-300 peer-checked:text-yellow-300">★</label>
        <input onChange={clickRadio} type="radio" className="peer hidden" id="value4" value="4" name="score" />
        <label htmlFor="value4" className="cursor-pointer text-gray-200 peer-hover:text-yellow-300 peer-checked:text-yellow-300">★</label>
        <input onChange={clickRadio} type="radio" className="peer hidden" id="value3" value="3" name="score" />
        <label htmlFor="value3" className="cursor-pointer text-gray-200 peer-hover:text-yellow-300 peer-checked:text-yellow-300">★</label>
        <input onChange={clickRadio} type="radio" className="peer hidden" id="value2" value="2" name="score" />
        <label htmlFor="value2" className="cursor-pointer text-gray-200 peer-hover:text-yellow-300 peer-checked:text-yellow-300">★</label>
        <input onChange={clickRadio} type="radio" className="peer hidden" id="value1" value="1" name="score" />
        <label htmlFor="value1" className="cursor-pointer peer text-gray-200 peer-hover:text-yellow-300 peer-checked:text-yellow-300">★</label>
    </form>
  )
}

export const StarRate = (props: {rate: number, size: string}) => {
    const {rate, size} = props
    return (
        <div className={`flex`} style={{fontSize: size}}>
            <div className={`${ rate > 0 ? 'text-yellow-200' : 'text-gray-200' }`}>★</div>
            <div className={`${ rate > 1 ? 'text-yellow-200' : 'text-gray-200' }`}>★</div>
            <div className={`${ rate > 2 ? 'text-yellow-200' : 'text-gray-200' }`}>★</div>
            <div className={`${ rate > 3 ? 'text-yellow-200' : 'text-gray-200' }`}>★</div>
            <div className={`${ rate > 4 ? 'text-yellow-200' : 'text-gray-200' }`}>★</div>
        </div>
    )
}

export const DetailRate = (props: {rate: number, size: string}) => {
    const {rate, size} = props
    return (
        <div className={'relative max-w-max'} style={{fontSize: size}}>
            <div className={'text-yellow-300 absolute z-[1] flex top-0 left-0 overflow-hidden'} style={{width: `${rate}%`}}>
                <div>★</div>
                <div>★</div>
                <div>★</div>
                <div>★</div>
                <div>★</div>
            </div>
            <div className={'flex z-[0] p-0 text-gray-300'}>
                <div>★</div>
                <div>★</div>
                <div>★</div>
                <div>★</div>
                <div>★</div>
            </div>
        </div>
    )
}