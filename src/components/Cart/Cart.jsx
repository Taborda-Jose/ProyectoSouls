import { Flex, Button } from '@chakra-ui/react'
import React from 'react'
import image from '../Imagenes/609173.jpg'
import { CartContext } from '../../Context/CartContext'
import { useContext,} from 'react'
import { Link } from 'react-router-dom'
import CartCard from '../Cart/CartCard'

function Cart() {
    const {items} = useContext(CartContext)
    const {clear} = useContext(CartContext)

    
    
  return (
    <Flex bgImage={image} bgAttachment={'fixed'} minHeight='100vh' justifyContent='center' justifyItems='center' position={'relative'} top={'5em'}>
        <Flex width='75%' borderRight={'2px solid black'} borderLeft={'2px solid black'} flexDir='column'
            backgroundImage={'https://wallpaperaccess.com/full/1812589.jpg'} 
            bgRepeat={'no-repeat'} bgSize={'cover'} bgPos={'center'}
            bgAttachment={'fixed'}  
            backdropContrast={'500%'}
            backdropBlur={'100%'}
            brightness={'-100%'}>
            {items===undefined||items.length===0?
            <Flex textAlign={'center'} justifyContent={'center'} margin='15px' minH={'80vh'}><Flex><Button><Link to={'/'}>Back to shop?</Link></Button></Flex></Flex>:
            <Flex minH={'80vh'}><ul>{items.map((e,index)=><li key={index}><CartCard Props={e}></CartCard></li>)}</ul></Flex >}
            <Flex justifyContent={'center'}>{items.reduce((pv,cv)=> pv+(cv.price*cv.quantity),0)===0?
            <Button disabled padding={'10px'}margin={'10px'} bgColor={'gold'}>Buy it: S$C {items.reduce((pv,cv)=> pv+(cv.price*cv.quantity),0)}</Button>
            :<Button padding={'10px'}margin={'10px'} bgColor={'gold'}><Link to={'/Checkout'}> Buy it: S$C {items.reduce((pv,cv)=> pv+(cv.price*cv.quantity),0)}</Link></Button>}<Button padding={'10px'}margin={'10px'} onClick={clear} bgColor={''}>Clear</Button></Flex>
        </Flex>
    </Flex>
  )
}

export default Cart