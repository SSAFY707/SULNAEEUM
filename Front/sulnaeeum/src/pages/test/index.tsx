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
    <div className='absolute top-[100px]'>준비중입니다.
    <button onClick={modalOpen}>Trigger modal</button>
      <Modal w='500px' h='400px' open={open} modalOpen={modalOpen}>
        <div>이건 테스트 모달 입니당!</div>
      </Modal>

{/* <Modal onClose={onClose} isOpen={isOpen} isCentered>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Modal Title</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <Lorem count={2} />
    </ModalBody>
    <ModalFooter>
      <Button onClick={onClose}>Close</Button>
    </ModalFooter>
  </ModalContent>
</Modal> */}
    </div>
  </>
  )
}
