import React, { useEffect } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk';

export default function JumakMap(props: {latitude : number, longitude : number}) {
    const {latitude, longitude} = props
  return (
    <>  
        <div>
            <Map center={{lat: 33.5563, lng: 126.79581 }} className={'w-1/2 h-[500px] mt-14 ml-2'}>
                <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                </MapMarker>
            </Map>
        </div>
    </>
  )
}
