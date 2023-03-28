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
}) {
  const { image, todayType } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <div
        className="w-[350px] h-[350px] bg-red-300 rounded-lg"
        onClick={onOpen}
      >
        <div className="absolute mt-[50px]">
          <div className="ml-[50px]">
            <Image src={image} alt="" width={70} height={70}></Image>
          </div>
          <div className=" ml-[50px] mt-[10px] text-[25px] font-preSB">
            {todayType}
          </div>
        </div>
      </div>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
