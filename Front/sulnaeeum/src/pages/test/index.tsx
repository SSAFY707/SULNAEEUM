import React, { useState } from 'react'
import { Modal } from '@/components/common/modal'
import {
  // Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

export default function index() {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const [open, setOpen] = useState<boolean>(false)
  const modalOpen = () => {
    setOpen(!open)
  }
  return (<>
    <div className='h-[200px] bg-sky-200'>
      
      준비중입니다.
    </div>
    <div className='h-[800px] p-40'>
    </div>
  </>
  )
}
