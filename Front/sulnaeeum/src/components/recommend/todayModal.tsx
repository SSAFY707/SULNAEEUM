import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { todayCheers, todayDrink, todayDish } from "@/types/DataTypes";
import { useState, useEffect } from "react";
import axios from "axios";

export default function todayModal(props: {
  idx : number
  todayType: string;
  image: string;
  todayText: string[];
}) {
  
  const { image, todayType,todayText ,idx} = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cheers, setCheers] = useState<todayCheers[]>([]);
  const [drink, setDrink] = useState<todayDrink[]>([]);
  const [dish, setDish] = useState<todayDish[]>([]);


  const getCheers = () => {
    axios.get<todayCheers[]>('http://j8a707.p.ssafy.io:9090/api/today/n/cheers').then((response) => {
      setCheers(response.data);
    });
  }
  const getDrink = () => {
    axios.get<todayDrink[]>('http://j8a707.p.ssafy.io:9090/api/today/n/drink').then((response) => {
      setDrink(response.data);
    });
  }
  const getDish = () => {
    axios.get<todayDish[]>('http://j8a707.p.ssafy.io:9090/api/today/n/dish').then((response) => {
      setDish(response.data);
    });
  }

  useEffect(() => {
    idx == 0 ? getCheers() : idx == 1 ? getDrink() : getDish();
  }, []);

  return (
    <div>
      <div className="w-[360px] h-[360px] flex justify-center items-center ">
      <div
        className="w-[350px] h-[350px] bg-white rounded-lg hover:w-[360px] hover:h-[360px] hover:cursor-pointer shadow-lg"
          onClick={() => { 
            onOpen();
            idx == 0 ? getCheers() : idx == 1 ? getDrink() : getDish();
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
                  <span className="leading-relaxed font-preR text-[16px] text-[#7F7F7F]" key={i}>{v}    </span>
                )
              })}
            </div>
          </div>
      </div>
    </div>
      <Modal onClose={onClose} size="lg" isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader >{todayType}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="w-[460px] h-[300px]  flex-col flex  b items-center">
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
                      <div className="absolute  top-[250px] text-[25px] font-preR w-[300px]flex justify-center">
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
      </Modal>
    </div>
  );
}
