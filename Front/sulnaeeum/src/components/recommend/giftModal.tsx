import { useState } from 'react'
import { AiOutlineGift } from 'react-icons/ai'
import { VscTriangleDown } from 'react-icons/vsc'
import  { CgClose } from 'react-icons/cg';
export const GiftModal = (props: {modalOpen : any}) => {
    const {modalOpen} = props
    const [gender, setGender] = useState<string>('성별을 선택해주세요.')
    const [age, setAge] = useState<string>('연령대를 선택해주세요.')
    const [level, setLevel] = useState<string>('도수를 선택해주세요.')
    const [fruit, setFruit] = useState<string>('과일을 선택해주세요.')
    const [openGender, setOpenGender] = useState<boolean>(false)
    const [openAge, setOpenAge] = useState<boolean>(false)
    const [openLevel, setOpenLevel] = useState<boolean>(false)
    const [openFruit, setOpenFruit] = useState<boolean>(false)

    return (
        <>
            <div className="flex flex-col items-center w-[600px] h-[500px]">
                <div className={'flex w-full justify-end'}>
                    <button className={'relative top-[20px] right-[20px] text-[30px] text-zinc-400'} onClick={ () => modalOpen() }><CgClose/></button>
                </div>
                <div className={'text-[35px] font-preB  mt-[7%] flex justify-center items-center '}><AiOutlineGift className={'mr-2'}/>전통주 선물하기</div>
                <div>선물 받는 분의 정보를 입력해주세요.</div>
                <div className={'w-full p-8 grid grid-cols-2 gap-x-4 gap-y-10'}>
                    <div className={'flex flex-col'}>
                        <button onClick={()=>setOpenGender(!openGender)} className={'mb-1 h-[50px] bg-zinc-200/70 rounded px-4 flex justify-between items-center text-[18px]'}>
                            <div>{gender}</div>
                            <VscTriangleDown className={'text-zinc-400'} />
                        </button>
                        {openGender && <ul className={'w-full relative shadow-md rounded'}>
                            <li onClick={()=>{setGender('남성'); setOpenGender(false)}} className={'absolute w-full flex items-center px-4 h-[40px] bg-zinc-100 hover:bg-zinc-200 rounded-t'}>남성</li>
                            <li onClick={()=>{setGender('여성'); setOpenGender(false)}} className={'absolute w-full top-[40px] flex items-center px-4 h-[40px] bg-zinc-100 hover:bg-zinc-200 rounded-b'}>여성</li>
                        </ul>}
                    </div>
                    <div className={'flex flex-col'}>
                        <button onClick={()=>setOpenAge(!openAge)} className={'mb-1 h-[50px] bg-zinc-200/70 rounded px-4 flex justify-between items-center text-[18px]'}>
                            <div>{age}</div>
                            <VscTriangleDown className={'text-zinc-400'} />
                        </button>
                        {openAge && <ul className={'w-full relative shadow-md rounded'}>
                            <li onClick={()=>{setAge('20대'); setOpenAge(false)}} className={'absolute w-full flex items-center px-4 h-[40px] bg-zinc-100 hover:bg-zinc-200 rounded-t'}>20대</li>
                            <li onClick={()=>{setAge('30대'); setOpenAge(false)}} className={'absolute w-full flex top-[40px] items-center px-4 h-[40px] bg-zinc-100 hover:bg-zinc-200'}>30대</li>
                            <li onClick={()=>{setAge('40대'); setOpenAge(false)}} className={'absolute w-full flex top-[80px] items-center px-4 h-[40px] bg-zinc-100 hover:bg-zinc-200'}>40대</li>
                            <li onClick={()=>{setAge('50대'); setOpenAge(false)}} className={'absolute w-full flex top-[120px] items-center px-4 h-[40px] bg-zinc-100 hover:bg-zinc-200'}>50대</li>
                            <li onClick={()=>{setAge('60대 이상'); setOpenAge(false)}} className={'absolute w-full top-[160px] flex items-center px-4 h-[40px] bg-zinc-100 hover:bg-zinc-200 rounded-b'}>60대 이상</li>
                        </ul>}
                    </div>
                    <div className={'flex flex-col'}>
                        <button onClick={()=>setOpenLevel(!openLevel)} className={'mb-1 h-[50px] bg-zinc-200/70 rounded px-4 flex justify-between items-center text-[18px]'}>
                            <div>{level}</div>
                            <VscTriangleDown className={'text-zinc-400'} />
                        </button>
                        {openLevel && <ul className={'w-full relative shadow-md rounded'}>
                            <li onClick={()=>{setLevel('남성'); setOpenLevel(false)}} className={'absolute w-full flex items-center px-4 h-[40px] bg-zinc-100 hover:bg-zinc-200 rounded-t'}>남성</li>
                            <li onClick={()=>{setLevel('여성'); setOpenLevel(false)}} className={'absolute w-full top-[40px] flex items-center px-4 h-[40px] bg-zinc-100 hover:bg-zinc-200 rounded-b'}>여성</li>
                        </ul>}
                    </div>
                    <div className={'flex flex-col'}>
                        <button onClick={()=>setOpenFruit(!openFruit)} className={'mb-1 h-[50px] bg-zinc-200/70 rounded px-4 flex justify-between items-center text-[18px]'}>
                            <div>{fruit}</div>
                            <VscTriangleDown className={'text-zinc-400'} />
                        </button>
                        {openFruit && <ul className={'w-full relative shadow-md rounded'}>
                            <li onClick={()=>{setFruit('남성'); setOpenFruit(false)}} className={'absolute w-full flex items-center px-4 h-[40px] bg-zinc-100 hover:bg-zinc-200 rounded-t'}>남성</li>
                            <li onClick={()=>{setFruit('여성'); setOpenFruit(false)}} className={'absolute w-full top-[40px] flex items-center px-4 h-[40px] bg-zinc-100 hover:bg-zinc-200 rounded-b'}>여성</li>
                        </ul>}
                    </div>
                    
                </div>
            </div>
        </>
    )
}