import { 
    Card, 
    CardBody, 
    CardFooter,
    IconButton,
    Image,
    Stack,
    Heading,
    Divider,
    Tag,
    Center,
    Spacer
} from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react'
import NewModal from './Modal';

import { 
    TriangleUpIcon
} from '@chakra-ui/icons'

function CarCard(props){

    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <Stack>
            <Card maxW='sm' m={5}>
                <CardBody>
                    <Stack direction="row" mb='4' spacing='1'>
                        <Tag>{props.tipo}</Tag>
                        <Tag>{props.ano}</Tag>
                    </Stack>
                    <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{props.marca}</Heading>
                    </Stack >
                </CardBody>
                <Divider colorScheme='blue'/>
                <CardFooter>
                    <Stack direction='row'>
                        <Center><Heading size='md'>{props.valor_atual}</Heading></Center>
                        <Spacer/>
                        <IconButton
                        colorScheme='gray'
                        aria-label='Search database'
                        icon={<TriangleUpIcon boxSize={3}/>}
                        onClick={onOpen}
                        />
                    </Stack>
                </CardFooter>
            </Card>
            <NewModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} car={props.car}/>
        </Stack>
    );
}

export default CarCard;