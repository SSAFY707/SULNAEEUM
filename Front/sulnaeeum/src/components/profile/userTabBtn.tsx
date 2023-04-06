import React from 'react'
import Image from 'next/image'

export default function UserTabBtn(props: {menuName: string, menuData: number, id: number}) {
    return (
      <>
           <div className=" w-[278px] h-[215px] rounded-lg mb-3 bg-white  flex flex-col items-center">
                <div className='absolute top-[18px] '>
                    { props.id==1?
                    <Image
                        src={`/images/profile/profile_image_${props.id}.PNG`}
                        alt=""
                        width={85}
                        height={50}
                        ></Image> :
                        <Image
                        src={`/images/profile/profile_image_${props.id}.PNG`}
                        alt=""
                        width={80}
                        height={50}
                    ></Image>
                    }
                    </div>
                <div className='absolute font-preR text-[18px] top-[105px] text-[#7F7F7F]'>{props.menuName}</div>
                <div className='absolute font-preSB text-[35px] top-[127px] text-[#414141]'>{props.menuData}{props.id == 3 ? '곳' : '병'}</div>
            </div>
      </>
  )
}
