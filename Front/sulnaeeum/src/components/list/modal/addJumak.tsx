import { CNU_CK } from '@/api/auth/jumak'
import { Modal } from '@/components/common/modal'
import Search from '@/components/common/search'
import { toastError, toastOK } from '@/components/common/toast'
import React, { useState } from 'react'
import DaumPostcodeEmbed from 'react-daum-postcode'
import { IoClose } from 'react-icons/io5'

export default function AddJumak(props: {modalOpen}) {

    type DrinkSelType = {
        [index : string] : number | string,
        drinkId : number,
        drinkName : string
    }

    const {modalOpen} = props
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [cnu, setCnu] = useState<string>('')
    const [next, setNext] = useState<boolean>(false)
    const [jumakName, setJumakName] = useState<string>('')
    const [jumakDrink, setJumakDrink] = useState<DrinkSelType[]>([])
    const [jumakAdd, setJumakAdd] = useState<string>('주소를 입력해주세요.')
    const [detailAdd, setDetailAdd] = useState<string>('')



    const addOpen = () => {
        setIsOpen(!isOpen)
    }

    const inputCnu = (e) => {
        setCnu(e.target.value)
    }

    const checkCnu = async () => {
        const res = await CNU_CK(cnu)
        if (res) {
            setNext(true);
        }
    }

    const addJumak = () => {
        if(!jumakName) {
            toastError('상호명을 입력해주세요.', '📢', 'top-right')
            return
        }else if(jumakAdd == '주소를 입력해주세요.' || !jumakAdd) {
            toastError('주소를 입력해주세요.', '📢', 'top-right')
            return
        }else if(jumakDrink.length == 0) {
            toastError('판매하는 전통주를 등록해주세요.', '📢', 'top-right')
            return
        }
        const sel : number[] = []
        jumakDrink.map((d)=>{
            sel.push(d.drinkId)
        })
        const data = {
            jumakName: jumakName,
            jumakAdd : `${jumakAdd} ${detailAdd}`,
            jumakDrink : sel
        }
        console.log(data)
        toastOK('등록되었습니다.', '✨', 'top-right')
    }
    const selectDrink = (drinkId : number, drinkName: string) => {
        let flag = true
        jumakDrink.forEach((d)=>{
            if(d.drinkId == drinkId) {
                flag = false
                return
            }
        })
        if(!flag) {
            toastError('이미 등록한 전통주입니다.', '📌', 'bottom-center')
            return
        }

        const data : DrinkSelType = {
            drinkId: drinkId,
            drinkName: drinkName
        }
        // console.log(data)
        const newArr = jumakDrink
        newArr.push(data)
        setJumakDrink([...newArr])
    }

    const deleteDrink = (idx : number) => {
        const newArr = jumakDrink
        newArr.splice(idx, 1)
        setJumakDrink([...newArr])
    }

  return (
    <div className={'w-full h-full flex flex-col items-center p-2'}>
        <div className={`text-[24px] font-preM ${next? 'mt-12 mb-10' : 'mt-16 mb-10'} `}>{next && '어떤 '}전통주를 판매하시나요?</div>
        {!next &&
        <div className={'flex flex-col w-full items-center'}>
            <div className={'w-5/6 pl-2 text-[16px] text-[#111111]'}>-(하이픈)없이 숫자만 입력해주세요</div>
            <input onChange={inputCnu} className={'bg-zinc-100 w-5/6 h-[50px] px-2 mb-10 outline-none'} type="text" placeholder='사업자 등록 번호 입력하기' />
            <div onClick={checkCnu} className={'w-5/6 h-[60px] bg-[#655443] hover:bg-[#534538] cursor-pointer text-white flex justify-center items-center mb-3 rounded'}>판매 인증하기</div>
            <div onClick={modalOpen} className={'w-5/6 h-[60px] border border-[#655443] hover:bg-zinc-100/70 cursor-pointer text-[#655443] flex justify-center items-center mb-10'}>닫기</div>
        </div>
        }
        {next &&
        <div className={'flex flex-col items-center w-full h-auto'}>
            <div className={'w-5/6 mb-4'}>
                <div className={'mb-2 font-preM'}>상호명</div>
                <input onChange={(e)=>{setJumakName(e.target.value)}} className={'w-full h-[50px] px-4 rounded bg-zinc-100 outline-none'} type="text" />
            </div>
            <div className={'w-5/6 mb-4'}>
                <div className={'mb-2 font-preM'}>주소</div>
                <div onClick={addOpen} className={'flex items-center w-full h-[50px] px-4 rounded bg-zinc-100'}>{jumakAdd}</div>
                <Modal w='600px' h='540px' modalOpen={addOpen} open={isOpen}>
                    <div className={'mt-10'}></div>
                    <DaumPostcodeEmbed onComplete={(data)=>{setJumakAdd(data.address); addOpen();}}/>
                    <div onClick={addOpen} className={'flex justify-center items-center mt-6 bg-[#655443] hover:bg-[#534538] text-white w-11/12 h-[50px] rounded cursor-pointer'}>닫기</div>
                </Modal>
                <input onChange={(e)=>{setDetailAdd(e.target.value)}} className={'w-full h-[50px] px-4 mt-2 rounded bg-zinc-100 outline-none'} placeholder='상세주소' type="text" />
            </div>
            <div className={'w-5/6 mb-8'}>
                <div className={'w-5/6 mb-2 font-preM'}>판매하는 전통주</div>
                <div className={''}>
                    {/* <input className={'w-full h-[50px] px-4 mb-4 rounded bg-zinc-100 outline-none'} placeholder='전통주 이름을 검색해주세요.' type="text" /> */}
                    < Search selectDrink={selectDrink} />
                    <div className={'flex flex-wrap h-[80px] overflow-y-scroll scroll'}>
                        { jumakDrink.length == 0 ?
                        <div>등록된 전통주가 없습니다.</div>
                        :
                        jumakDrink.map((drink, index)=>{
                            return (
                                <div className={'flex ml-1 mr-2 mb-2 justify-center h-[34px] rounded-full pl-3 pr-2 items-center bg-[#78C3DC] text-white'} key={index}>
                                    {drink.drinkName} <div onClick={()=>deleteDrink(index)} className={'ml-2 text-white hover:text-gray-800 cursor-pointer'} ><IoClose/></div>
                                </div>
                                )
                            })}
                    </div>
                </div>
            </div>
            <div onClick={addJumak} className={'w-5/6 h-[60px] bg-[#655443] hover:bg-[#534538] cursor-pointer text-white flex justify-center items-center mb-3 rounded'}>판매처 등록하기</div>
            <div onClick={modalOpen} className={'w-5/6 h-[60px] border border-[#655443] hover:bg-zinc-100/70 cursor-pointer text-[#655443] flex justify-center items-center mb-10'}>닫기</div>
        </div>}
    </div>
  )
}
