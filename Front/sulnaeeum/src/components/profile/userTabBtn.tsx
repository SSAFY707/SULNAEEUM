import React from 'react'
import Image from 'next/image'

export default function UserTabBtn(props: any) {
    return (
      <>
           <div className=" w-[278px] h-[215px] rounded-lg mb-3  bg-yellow-200 opacity-60 flex flex-col items-center">
                <div className='absolute top-[18px] '>
                    { props.id==1?
                    <Image
                        src={`/images/profile/profile_image_${props.id}.PNG`}
                        alt=""
                        width={90}
                        height={50}
                        ></Image> :
                        <Image
                        src={`/images/profile/profile_image_${props.id}.PNG`}
                        alt=""
                        width={85}
                        height={50}
                    ></Image>
                    }
                    </div>
                <div className='absolute font-preR text-[18px] top-[110px] text-[#7F7F7F]'>{props.tabInfo.menuName[props.id-1]}</div>
                <div className='absolute font-preEB text-[32px] top-[135px] text-[#393939]'>{props.tabInfo.menuData[props.id - 1]}</div>
            </div>
      </>
  )
}
