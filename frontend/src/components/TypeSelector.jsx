import {
    RadioGroup,
    Stack,
    Radio,
    Button
} from '@chakra-ui/react'

function TypeSelector({changeType}) {
    return (
      <Stack m={3} direction='column'>
        <Button colorScheme='blackAlpha' variant='ghost' onClick={() => {changeType("Seminovo")}}>
          Seminovos
        </Button>
        <Button colorScheme='blackAlpha' variant='ghost' onClick={() => {changeType("Usado")}}>
          Usados
        </Button>
        <Button colorScheme='blackAlpha' variant='ghost' onClick={() => {changeType("Moto")}}>
          Moto
        </Button>
      </Stack>
    )
  }

export default TypeSelector;