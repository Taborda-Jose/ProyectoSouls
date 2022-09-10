import { Flex, Button } from '@chakra-ui/react'
import React from 'react'
import image from '../Imagenes/609173.jpg'
import { CartContext } from '../../Context/CartContext'
import { useContext,useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartCard from '../Cart/CartCard'

function Cart() {
    const {items} = useContext(CartContext)
    const {clear} = useContext(CartContext)

    
    
  return (
    <Flex bgImage={image} bgAttachment={'fixed'} minHeight='100vh' justifyContent='center' justifyItems='center' >
        <Flex width='75%' borderRight={'2px solid black'} borderLeft={'2px solid black'} flexDir='column'
            backgroundImage={'https://wallpaperaccess.com/full/1812589.jpg'} 
            bgRepeat={'no-repeat'} bgSize={'cover'} bgPos={'center'}
            bgAttachment={'fixed'}  
            backdropContrast={'500%'}
            backdropBlur={'100%'}
            brightness={'-100%'}>
            {items===undefined||items.length===0?<Link to={'/'}><Button>Back to shop?</Button></Link>:<ul>{items.map((e,index)=><CartCard Props={e} key={index}></CartCard>)}</ul>}
            <Flex justifyContent={'center'}><Link to={'/Checkout'}><Button padding={'10px'}margin={'10px'} bgColor={'gold'} _hover={'yellow.400'}>Buy it: S$C {items.reduce((pv,cv)=> pv+(cv.price*cv.quantity),0)}</Button></Link><Button padding={'10px'}margin={'10px'} onClick={clear} bgColor={''}>Clear</Button></Flex>
        </Flex>
    </Flex>
  )
}

export default Cart