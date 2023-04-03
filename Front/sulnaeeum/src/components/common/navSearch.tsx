import { useAppDispatch, useAppSelector } from '@/hooks'
import { getSearchResult, searchResult } from '@/store/searchSlice'
import React, { useState } from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2'

export default function NavSearch(props: {selectDrink : any}) {
    const {selectDrink} = props
    const [focus, setFocus] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const result = useAppSelector(searchResult)
    const search = (e : any) => {
        if(e.target.value.length == 0){
            setFocus(false)
            return
        }
        setFocus(true)
        dispatch(getSearchResult(e.target.value))
    }
    // onBlur={()=>setFocus(false)}
    

    return (
        <div className={''}>
            <div className={'flex pl-4  bg-zinc-100 items-center rounded-lg mt-[5px]'}>
                <HiMagnifyingGlass />
                <input onBlur={()=>setFocus(false)} onFocus={(e)=>{if(e.target.value) setFocus(true)}} onChange={search} className={' w-[200px] h-[40px] px-4 rounded-lg bg-zinc-100 outline-none '} placeholder='전통주 이름 검색' />
                {focus && 
                <div className={'min-h-[150px] max-h-[350px] w-[340px] shadow-lg rounded bg-white absolute z-[200] top-[55px] right-[150px] overflow-y-scroll scroll'}>
                    {result.length == 0 ?
                    <div className={'pt-6 pl-4'}>검색결과가 없습니다.</div>
                    :
                    result.map((value, index)=>{
                        return (

                            <div key={index} onMouseDown={(e)=>{e.preventDefault()}} onClick={()=>{selectDrink(value._source.drink_id, value._source.drink_name); setFocus(false)}} className={'w-full flex items-center border-b pl-4 p-2 hover:bg-zinc-200 cursor-pointer group'}>
                                <div className={'w-[50px] h-[50px] bg-white/50 rounded-full overflow-hidden mr-6 shadow-md'}>
                                    <img className={'h-full w-full object-scale-down'} src={value._source.drink_image} />
                                </div>
                                <div className={'flex item-center text-[18px] group-hover:font-preM'}>{value._source.drink_name}</div>
                                </div>
                        )
                    })}
                </div>}
            </div>
            <div className='mt-[5px]'>

            </div>
        </div>
  )
}
