import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Tag,
    Button,
    SimpleGrid,
    Wrap,
    WrapItem
  } from '@chakra-ui/react'

function NewModal(props) {
    return (
      <>
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{props.car.marca}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Wrap columns={3} spacing={2}>
                    <WrapItem>
                        <Tag>Ano: {props.car.ano}</Tag>
                    </WrapItem>
                    <WrapItem>
                        <Tag>Cor: {props.car.cor}</Tag>
                    </WrapItem>
                    <WrapItem>
                        <Tag>Combustível: {props.car.combustivel}</Tag>
                    </WrapItem>
                    <WrapItem>
                        <Tag>Localização: {props.car.localizacao}</Tag>
                    </WrapItem>
                    <WrapItem>
                        <Tag>Situação: {props.car.situacao}</Tag>
                    </WrapItem>
                    <WrapItem>
                        <Tag>Comitente: {props.car.comitente}</Tag>
                    </WrapItem>
                </Wrap>
            </ModalBody>
  
            <ModalFooter>
              <Button mr={3} onClick={props.onClose} variant="outline">
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default NewModal;