import { useAppDispatch, useAppSelector } from '@/hooks'
import { getSearchResult, searchResult } from '@/store/searchSlice'
import React, { useState } from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2'

export default function Search(props: {selectDrink : any}) {
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
            <div className={'flex pl-4 mb-3 bg-zinc-100 items-center rounded'}>
                <HiMagnifyingGlass />
                <input onFocus={(e)=>{if(e.target.value) setFocus(true)}} onChange={search} className={'w-[400px] h-[50px] px-4 rounded bg-zinc-100 outline-none'} placeholder='전통주 이름을 검색해주세요.' />
            </div>
            {focus && 
            <div className={'min-h-[150px] max-h-[250px] w-[404px] shadow-lg rounded bg-zinc-100 absolute z-[200] overflow-y-scroll scroll'}>
                {result.length == 0 ?
                <div className={'pt-6 pl-4'}>검색결과가 없습니다.</div>
                :
                result.map((value, index)=>{
                    return (
                        <div key={index} onClick={()=>{selectDrink(value._source.drink_id, value._source.drink_name); setFocus(false)}} className={'w-full flex items-center border-b pl-4 p-2 hover:bg-zinc-200 cursor-pointer group'}>
                            <div className={'w-[60px] h-[60px] bg-white/50 rounded-full overflow-hidden mr-6'}>
                                <img className={'h-full w-full object-scale-down'} src={value._source.drink_image} />
                            </div>
                            <div className={'flex item-center text-[18px] group-hover:font-preM'}>{value._source.drink_name}</div>
                        </div>
                    )
                })}
            </div>}
        </div>
  )
}
