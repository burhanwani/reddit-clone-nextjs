import { authModalState } from "@/src/atoms/authModalAtom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { Preahvihear } from "@next/font/google";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
  //const { isOpen, onOpen, onClose } = useDisclosure()
  const [modalState, setmodalState] = useRecoilState(authModalState);
  const handleClose = () => {
    setmodalState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Here is the modal body</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
