import { Flex, Button } from '@chakra-ui/react'
import React from 'react'
import image from '../Imagenes/609173.jpg'

function Cart() {
  return (
    <Flex bgImage={image} height='100vh' justifyContent='center' justifyItems='center' >
        <Flex bg={'rgba(255,255,255,0.7)'} width='80%' borderRight={'2px solid black'} borderLeft={'2px solid black'} flexDir='column'>
            <Flex width={'100%'} height={'90%'}>Contenedor de items</Flex>
            <Flex justifyContent={'center'}><Button>Vaciar la plaza</Button></Flex>
        </Flex>
    </Flex>
  )
}

export default Cart