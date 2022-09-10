import React from 'react'
import Form from '../components/Form/Form'
import { Flex, Button} from '@chakra-ui/react'
import CartCard from '../components/Cart/CartCard'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'


function Checkout() {
    const {items} = useContext(CartContext)
  return (
    <Flex justifyContent={'center'}>
        <Flex bgColor={'gray.300'}>{items===undefined||items.length===0?<Link to={'/'}><Button>Back to shop?</Button></Link>:<ul>{items.map((e,index)=><CartCard Props={e} key={index}></CartCard>)}</ul>}</Flex>
        <Flex><Form></Form></Flex>
    </Flex>
  )
}

export default Checkout