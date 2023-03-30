import { Drink, DrinkDetailType } from '@/types/DataTypes'
import { IoCall } from 'react-icons/io5'
import { HiMap } from 'react-icons/hi'
import { FaRegBookmark, FaBookmark } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import { Modal } from '../common/modal'
import AddJumak from './modal/addJumak'


export default function DrinkJumak(props: {drink: DrinkDetailType}) {
    const [open, setOpen] = useState<boolean>(false)
    
    const modalOpen = () => {
        setOpen(!open)
    }

    type jumakType = {
        name: string,
        num: string,
        address: string,
    }
    type markerType = {
        name: string,
        latlng : {
            lat : number,
            lng : number
        },
        address: string,
        num : string
    }
    const {drink} = props

    const jumaks = [
        {name: '피곤해죽어식당', num: '010-1234-5678', address: '서울 동대문구 왕산로 91'},
        {name: '쉬폰케익가게', num: '010-1111-2222', address: '서울 동대문구 천호대로27길 35'},
        {name: '김식당', num: '010-0101-2929', address: '서울 동대문구 무학로44길 25'},
        {name: '이식당', num: '010-1234-5678', address: '서울 동대문구 왕산로23길 55'},
        {name: '장식당', num: '010-1111-2222', address: '서울 동대문구 왕산로16길 16'},
        {name: '멀캠', num: '010-0101-2929', address: '서울 강남구 테헤란로 212'}
    ]
    const [center, setCenter] = useState({lat: 33.450701, lng: 126.570667})
    const [array, setArray] = useState<markerType[]>([])

    const add_to_latlng = async (jumak : jumakType) => {
        const geocoder = new kakao.maps.services.Geocoder();
        let callback = (res, status) => {
            if (status === kakao.maps.services.Status.OK) {
                const latlng = {
                    lat: res[0].y, 
                    lng: res[0].x
                }
                const new_array = array
                array.push({name : jumak.name, latlng: latlng, address: jumak.address, num: jumak.num})
                setArray([...new_array])
                return latlng;
            }
        }
        geocoder.addressSearch(jumak.address, callback)
    }

    useEffect(()=>{
        for(let i=0; i<jumaks.length; i++){
            add_to_latlng(jumaks[i])
        }
    },[])
    useEffect(()=>{
        if(array.length != 0){
            setCenter(array[0].latlng)
        }
    },[array])
    
  return (
    <div className={'w-7/12 h-[700px] mt-[200px]'}>
        <div>
            <Modal h='auto' w='500px' modalOpen={modalOpen} open={open}>
                < AddJumak modalOpen={modalOpen} />
            </Modal>
        </div>
        <div className={'flex justify-between items-end'}>
            <div className={'text-[20px] pl-2 font-preR'}><span className={'font-mj text-[40px] mr-2'}>{drink.drinkName}</span>을(를) 판매하는 식당</div>
            <div onClick={modalOpen} className={'flex justify-center items-center mb-4 mr-4 rounded text-white h-3/4 p-2 bg-[#78C3DC] hover:bg-[#60A5BC] cursor-pointer'}>판매처 등록하기</div>
        </div>
        <hr className={'border-[#D3D3D3] border-1 mb-10'} />
        <div className={'flex w-full h-[600px]'}>
            <div className={'w-1/2'}>
                <Map id='map' center={center} isPanto={true} className={'w-full h-[500px]'}>
                    {array.map((a, index)=>{
                        return(
                            <MapMarker key={index}
                            position={a.latlng}
                            image={{
                                src: "/images/list/marker_o.png", 
                                    size: {
                                        width: 60,
                                        height: 54
                                    }
                                }}>
                            </MapMarker>
                        )
                    })}
                </Map>
            </div>
            <div className={'w-1/2 ml-4 h-[500px] overflow-y-scroll pr-4 scroll'}>
                {array.map((v, i)=>{
                    return (
                        <div onClick={()=>setCenter(v.latlng)} key={i} className={'w-full h-[140px] bg-zinc-100/70 rounded-lg p-5 mb-4 text-[#393939] hover:bg-zinc-100 cursor-pointer'}>
                            <div className={'flex justify-between'}>
                                <div className={'font-preM text-[24px] mb-2'}>{v.name}</div>
                                <FaRegBookmark className={'text-[20px] text-[#655442] cursor-pointer'}/>
                            </div>
                            <div className={'flex items-center'}><IoCall className={'mr-2'} />{v.num}</div>
                            <div className={'flex items-center'}><HiMap className={'mr-2'} />{v.address}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
