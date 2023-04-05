import { IoEarth } from 'react-icons/io5'
import { HiMap } from 'react-icons/hi'
import { FaRegBookmark, FaBookmark } from 'react-icons/fa'
import { RiHome2Line, RiHome2Fill } from 'react-icons/ri'
import React, { useState, useEffect } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import { Modal } from '../common/modal'
import AddJumak from './modal/addJumak'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { drinkDetail, myLikeJumak, setJumakLike } from '@/store/drinkSlice'
import { JumakType, LatlngType, MarkerType } from '@/types/DrinkType'
import { toastError } from '../common/toast'
import { likeJumak } from '@/api/auth'


export default function DrinkJumak() {
    const [open, setOpen] = useState<boolean>(false)
    const drink = useAppSelector(drinkDetail)
    const myJumaks = useAppSelector(myLikeJumak)
    const jumaks : JumakType[] = drink['jumakDto']

    const modalOpen = () => {
        const login = sessionStorage.getItem('isLogin')
        if(!login){
            toastError('로그인이 필요한 기능입니다.', '🚨', 'top-right')
            return
        }
        setOpen(!open)
    }

    const [center, setCenter] = useState({lat: 37.5013068, lng: 127.0396597})

    const add_to_latlng = async (jumak : JumakType) => {
        const geocoder = new kakao.maps.services.Geocoder()
        let callbackPromise = new Promise((resolve, reject)=>{
            geocoder.addressSearch(jumak.jumakLocation, (res, status)=>{
                if (status === kakao.maps.services.Status.OK) {
                    const latlng = {
                        lat: res[0].y, 
                        lng: res[0].x
                    }
                    resolve(latlng)
                }
            })
        })
        return callbackPromise
    }

    const [markerList, setMarkerList] = useState<MarkerType[]>([])

    const changeMarker = async (jumaks : JumakType[]) => {
        const array : MarkerType[] = []
        for(let i=0; i<jumaks.length; i++){
            const jumak = jumaks[i]
            const res = await add_to_latlng(jumak)
            array.push({id: jumak.jumakId, name : jumak.jumakName, latlng: res, address: jumak.jumakLocation, url: jumak.jumakUrl})
        }
        setMarkerList(array)
    }

    useEffect(()=>{
        changeMarker(jumaks)
    },[jumaks])

    useEffect(()=>{
        if(markerList.length != 0){
            setCenter(markerList[0].latlng)
        }
    },[markerList])
    
    const dispatch = useAppDispatch()

    const like = (jumakId : number) => {
        const login = sessionStorage.getItem('isLogin')
        if(!login){
            toastError('로그인이 필요한 기능입니다.', '🚨', 'top-right')
            return
        }
        dispatch(setJumakLike(jumakId))
        likeJumak(jumakId)
    } 
    
  return (
    <div className={'w-7/12 h-[700px] mt-[200px]'}>
        <div>
            <Modal h='auto' w='500px' modalOpen={modalOpen} open={open}>
                < AddJumak drinkId={drink.drinkDetailDto.drinkId} modalOpen={modalOpen} />
            </Modal>
        </div>
        <div className={'flex justify-between items-end'}>
            <div className={'text-[20px] pl-2 font-preR'}><span className={'font-mj text-[40px] mr-2'}>{drink.drinkDetailDto.drinkName}</span>을(를) 판매하는 식당</div>
            <div onClick={modalOpen} className={'flex justify-center items-center mb-3 mr-3 rounded-full px-4 text-white h-3/4 p-2 bg-gradient-to-r from-[#8FAADC] to-[#8FAADC]/80 transition ease-in duration-300 hover:font-preR hover:scale-[103%] hover:-translate-y-0.5 cursor-pointer'}>판매처 등록하기</div>
        </div>
        <hr className={'border-[#D3D3D3] border-1 mb-10'} />
        <div className={'flex w-full h-[600px]'}>
            <div className={'w-1/2'}>
                <Map id='map' center={center} isPanto={true} className={'w-full h-[500px]'}>
                    {markerList.map((marker, index)=>{
                        return(
                            <MapMarker key={index}
                            position={marker.latlng}
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
                {markerList.length != 0 &&
                markerList.map((v, i)=>{
                    return (
                        <div onClick={()=>setCenter(v.latlng)} key={i} className={'w-full h-[140px] bg-zinc-100/70 rounded-lg p-5 mb-4 text-[#393939] hover:bg-zinc-100 cursor-pointer'}>
                            <div className={'flex justify-between'}>
                                <div className={'font-preM text-[24px] mb-2'}>{v.name}</div>
                                {myJumaks.indexOf(v.id) == -1 ?
                                <RiHome2Line onClick={()=>{like(v.id)}} className={'text-[24px] text-[#655442] cursor-pointer'}/>
                                :<RiHome2Fill onClick={()=>{like(v.id)}} className={'text-[24px] text-[#655442] cursor-pointer'}/>
                                }
                            </div>
                            <div className={'flex items-center'}><HiMap className={'mr-2'} />{v.address}</div>
                            <div className={'flex items-center'}><IoEarth className={'mr-2'} /><a className={'hover:font-preR'} href={v.url} target='_blank'>{v.url}</a></div>
                        </div>
                    )
                })}
                {markerList.length == 0 &&
                <div className={'w-full h-[140px] text-[18px] rounded-lg p-5 mb-4 text-[#393939]'}>
                    등록된 식당이 없습니다.
                </div>
                }
            </div>
        </div>
    </div>
  )
}
