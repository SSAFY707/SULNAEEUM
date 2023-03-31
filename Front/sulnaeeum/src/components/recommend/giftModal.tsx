import { useState } from 'react'
import { AiOutlineGift } from 'react-icons/ai'
import  { CgClose } from 'react-icons/cg';
export const GiftModal = (props: {modalOpen : any}) => {
    const {modalOpen} = props
    return (
        <>
            <div className='w-[70%] h-[70%]  absolute'>
                <button className={'absolute top-[15px] right-[15px] text-[30px] hover:text-[#000000]'} onClick={ () => modalOpen() }><CgClose/></button>
            </div>
            <div className="flex flex-col items-center w-[90%] h-[95%]">
                <div className={'text-[35px] font-preB  mt-[7%] flex justify-center items-center '}><AiOutlineGift className={'mr-2'}/>전통주 선물하기</div>
                    <div>선물 받는 분의 정보를 입력해주세요.</div>
                    <div className={'relative h-[4px] w-[650px] rounded-[10px] bg-[#dddddd]'}>
                        <div className={'absolute left-[30%] right-[30%] h-[4px] rounded-[10px] bg-[#b0b0b0]'}
                            // rangeMinPercent={rangeMinPercent}
                            // rangeMaxPercent={rangeMaxPercent}
                        >

                            <div className={'relative'}>
                                <input className={'absolute  w-[100%]'} type="range" name="" id="" />
                                <input className={'absolute top-[-9px] w-[100%]'} type="range" name="" id="" />
                    
                            </div>
                        </div>
                    </div>   

                    
        
            </div>
        </>
    )
}