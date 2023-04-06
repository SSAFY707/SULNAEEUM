import React from "react";
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
// } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import  { CgClose } from 'react-icons/cg';
import Image from "next/image";
import { todayCheers, todayDrink, todayDish } from "@/types/DataTypes";
import { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from '@/components/common/modal'
import { defaultAxios } from "@/api/common";
import { useRouter } from "next/router";

export default function todayModal(props: {
  idx : number
  todayType: string;
  image: string;
  todayText: string[];
}) {
  
  const { image, todayType,todayText ,idx} = props;
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [cheers, setCheers] = useState<todayCheers>({todayContent:'',todayId:0,todayName:''});
  const [drink, setDrink] = useState<todayDrink>({todayAmount:'',todayDrink:'',todayId:0,todayImage:'',todayLevel:0,todayType:''});
  const [dish, setDish] = useState<todayDish>({todayId:0, todayDish:''});
  const [open, setOpen] = useState<boolean>(false)
  const [ing, setIng] = useState<boolean>(false)

  const router = useRouter()

  const modalOpen = () => { 
    setOpen(!open)
  }

  const name = ['건배사', '전통주', '안주']

  const getCheers = async () => {
    await defaultAxios.get('today/n/cheers'
    ).then((res)=>setCheers(res.data))
  }
  
  const getDrink = async () => {
    await defaultAxios.get('today/n/drink'
    ).then((res)=>setDrink(res.data))
  }
  
  const getDish = async () => {
    await defaultAxios.get('today/n/dish'
    ).then((res)=>setDish(res.data))
  }

  const getRandom = async () => {
    setIng(false)
    if(idx == 0){
      await getCheers()
    }else if(idx == 1){
      await getDrink()
    }else{
      await getDish()
    }
    setTimeout(()=>{
      setIng(true)
    },2000)
  }

  return (
    <div>
      <div className="w-[360px] h-[360px] flex justify-center items-center ">
      <div
        className="w-[350px] h-[350px] bg-white rounded-lg hover:w-[360px] hover:h-[360px] hover:cursor-pointer shadow-lg"
          onClick={() => { 
            modalOpen();
            getRandom();
          }}
        >
          <div className="absolute mt-[50px]">
            <div className="ml-[50px]">
              <Image src={image} alt="" width={85} height={85}></Image>
            </div>
            <div className=" ml-[50px] mt-[15px] text-[30px] font-preSB text-[#414141]">
              {todayType}
            </div>
            <div className="w-[250px] h-[100px] ml-[50px] mt-[10px] ">
              {todayText.map((v, i) => { 
                return (
                  <span className="leading-relaxed font-preR text-[16px] text-[#7F7F7F]" key={i}>{v}</span>
                )
              })}
            </div>
          </div>
      </div>
    </div>
    <Modal w="500px" h="400px" open={open} modalOpen={modalOpen}>
      <div className={'flex w-full justify-end'}>
          <button className={'relative top-[30px] right-[30px] text-[30px] text-zinc-400'} onClick={ () => modalOpen() }><CgClose/></button>
      </div>
      {!ing &&
        <>
          <img className={"w-1/2 mt-12"} src="/images/randomLoading.gif" />
          <div className={"mb-2 font-preB text-[28px]"}>
            당신을 위한 오늘의 <span className={"text-[28px] font-preB text-[#809ED4]"}>{name[idx]}</span> 입니다
          </div>
          <div className={"font-preM text-[24px] text-[#9A9A9A]"}>
            랜덤 추천을 기다려 주세요
          </div>
        </>
      }
      {ing &&
        <div className={"flex flex-col items-center w-full h-full"}>
          <div className={"w-full mt-6 mb-4 flex justify-center font-preM text-[24px]"}>술내음이 추천하는 <span className={"text-[#809ED4] font-preB ml-1"}>{name[idx]}</span>입니다.</div>
          <img className={"w-[450px] mb-2"} src="/images/pattern2.png" alt="" />
          {idx == 0 && 
            <div className=" flex flex-col justify-center items-center h-[170px]">
                <div className="text-[56px] font-star ">                   
                {cheers.todayName}
                </div>
                <div className="text-[20px] font-preR w-full flex justify-center">
                {cheers.todayContent}!
                </div>
            </div>
          }
          {idx == 1 && 
            <div className="flex justify-center items-center h-[170px] w-full">
              <div className={"w-[40%] mr-[10%] flex justify-end"}>
                <img className={"h-[130px] object-cover"} src={drink.todayImage} />
              </div>
              <div className={"w-1/2"}>
                <div className="text-[24px] font-preB flex">
                {drink.todayDrink}
                </div>
                <div className="text-[16px] font-preR flex">
                {drink.todayLevel}% | {drink.todayAmount} | {drink.todayType}
                </div>
                <div onClick={()=>router.push(`/list/${drink.todayId}`)} className={"w-[100px] mt-3 flex justify-center items-center bg-zinc-200 hover:bg-zinc-300 cursor-pointer rounded py-1 px-3"}>더 알아보기</div>
              </div>
            </div>
          }
          {idx == 2 && 
            <div className=" flex flex-col items-center justify-center h-[170px]">
                <div className="text-[56px] font-star">                   
                {dish.todayDish}
                </div>
                <div className="text-[20px] font-preR w-full flex justify-center">
                어떠세요?
                </div>
            </div>
          }
          <div className={"w-full mt-4 flex justify-center"}>
            <div onClick={()=>{getRandom();}} className={"flex justify-center items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#8FAADC] to-[#8FAADC]/70 text-white cursor-pointer transition duration-300 ease-in hover:from-[#809ED4] hover:to-[#809ED4]/70 font-preR"}>다시 추천받기</div>
          </div>
        </div> 
      }
    </Modal>
      {/* <Modal onClose={onClose} size="lg" isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader >{todayType}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="w-[460px] h-[300px]  flex-col flex b items-center">
              <div className=" w-[200px] h-[50px] b flex justify-center">
              <div className=" mr-[15px]">
                <Image src="/images/recommend/congratulations.png" alt="" width={50} height={50} ></Image>
              </div>
              <div className="w-[80px] h-[200px] text-[#494949] flex justify-center text-[35px] font-preEB">
                결과
              </div>
              <div className="ml-[15px] ">
                <Image src="/images/recommend/congratulations2.png" alt="" width={50} height={50} ></Image>
              </div>
              </div>
              <div className="w-[400px] h-[400px]  flex justify-center ">
                {idx == 0 ?
                  <div className=" flex flex-col items-center top-[60px] ">
                      <div className="absolute top-[180px] text-[45px] font-preB ">                   
                      {cheers.todayName}
                      </div>
                      <div className="absolute top-[250px] text-[25px] font-preR w-[300px]flex justify-center">
                      {cheers.todayContent}!
                      </div>
                  </div>
                  : idx == 1 ?
                    <div className=" flex items-center justify-around">
                      <div className="w-[170px] h-[230px] flex justify-center items-center ">
                        <img className="h-[190px]" src={drink.todayImage} alt="" ></img>
                      </div>
                      <div className="w-[240px] h-[110px] items-center ">
                        <div className="text-[30px] font-preEB">
                          {drink.todayDrink}
                        </div>
                        <div>
                          {drink.todayLevel}% &nbsp;
                          {drink.todayAmount}
                        <div>
                            {drink.todayType}
                        </div>
                        </div>
                      </div>
                    </div> :
                    <div className="flex flex-col items-center justify-center top-[40px] font-preB text-[50px]">
                      {dish.todayDish}
                      <div className="text-[20px]">
                      어떠세요?
                      </div>
                      
                    </div>}
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <div onClick={() => { 
                  idx == 0 ? getCheers() : idx == 1 ? getDrink() : getDish();
            }}>
              <Button>다시 돌리기</Button>
              </div>
            <Button colorScheme='orange' className="ml-[15px]" onClick={onClose}>확인</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </div>
  );
}
