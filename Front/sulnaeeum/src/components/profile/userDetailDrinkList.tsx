import React from 'react'
import Image from "next/image";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { BsSearch } from "react-icons/bs";
export default function userDetailDrinkList(props: any) {
    
  return (
    <div className='mt-[5px] mb-[13px] w-[1140px] h-[100px] bg-sky-300 rounded-lg shadow-sm flex items-center'>
          <div className='h-[79px] w-[340px] bg-pink-300 flex pl-[40px] '>
              <div className='text-center items-center flex text-[25px] pr-[67px]'>{ props.idx}</div>
              <Image src={props.user.drinkImage} alt="" width={32} height={5}></Image>
              <div className='text-center items-center flex pl-[23px] text-[21px] '>
                  <div className='font-preM text-[#393939]'>{props.user.drinkName}</div>
              </div>
          </div>
          <div className='h-[90px] w-[380px] bg-purple-300 flex justify-center items-center'> 
              <Button leftIcon={ <BsSearch/>} colorScheme='gray' size='sm'>자세히 알아보기</Button>
          </div>
          <div className='h-[90px] w-[410px]  bg-orange-300 flex justify-around items-center text-[20px]'>
              <div className='font-preR'>{props.user.drinkAmount}</div>
              <div className='font-preR' >{`${props.user.drinkLevel}%`}</div>
              <div className='font-preR' >{props.user.drinkType }</div>
          </div>
    </div>
  )
}
