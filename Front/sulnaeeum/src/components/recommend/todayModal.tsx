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
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import Image from "next/image";

export default function todayModal(props: {
  todayType: string;
  image: string;
  todayText: string[];
}) {
  
  const { image, todayType,todayText } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <div>
      <div className="w-[360px] h-[360px] flex justify-center items-center ">
      <div
        className="w-[350px] h-[350px] bg-white rounded-lg hover:w-[360px] hover:h-[360px] hover:cursor-pointer shadow-lg"
        onClick={onOpen}
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
            <div className="w-[460px] h-[300px]  flex-col flex  bg-red-200 items-center">
              <div className=" w-[200px] h-[50px] bg-yellow-200 flex justify-center">
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
              <div className="w-[400px] h-[400px] bg-pink-300 flex justify-center">
                여기다가 데이터를 받아서 넣으슈
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button >다시 돌리기</Button>
            <Button colorScheme='orange' className="ml-[15px]" onClick={onClose}>확인</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
