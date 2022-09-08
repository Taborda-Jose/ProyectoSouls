import { Flex, Button } from '@chakra-ui/react'
import React from 'react'
import image from '../Imagenes/609173.jpg'
import { CartContext } from '../../Context/CartContext'
import { useContext,useEffect } from 'react'
import Loader from '../Loader/Loader'
import CartCard from '../Cart/CartCard'

function Cart() {
    const {items} = useContext(CartContext)
    const {clear} = useContext(CartContext)


    
  return (
    <Flex bgImage={image} bgAttachment={'fixed'} minHeight='100vh' justifyContent='center' justifyItems='center' >
        <Flex width='80%' borderRight={'2px solid black'} borderLeft={'2px solid black'} flexDir='column'
            backgroundImage={'https://wallpaperaccess.com/full/1812589.jpg'} 
            bgRepeat={'no-repeat'} bgSize={'cover'} bgPos={'center'}
            bgAttachment={'fixed'}
            backdropContrast={'500%'}
            backdropBlur={'100%'}
            brightness={'-100%'}>
            <Flex width={'100%'} minHeight={'90%'}>
                <ul>
                    {items===undefined?<Loader></Loader>:items.map((e,index)=><CartCard Props={e} key={index}></CartCard>)}
                </ul>
            </Flex>
            <Flex justifyContent={'center'}><Button onClick={clear}>Vaciar la plaza</Button></Flex>
        </Flex>
    </Flex>
  )
}

export default Cart