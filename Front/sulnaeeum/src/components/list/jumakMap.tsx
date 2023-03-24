import React, { useEffect } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk';

export default function JumakMap(props: {latitude : number, longitude : number}) {
    const {latitude, longitude} = props
  return (
    <>  
        <div className={'w-1/2'}>
            <Map center={{lat: 33.5563, lng: 126.79581 }} className={'w-full h-[500px]'}>
                <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}></MapMarker>
            </Map>
        </div>
    </>
  )
}
