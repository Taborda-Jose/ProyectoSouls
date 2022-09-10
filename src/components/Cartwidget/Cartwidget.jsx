import React from 'react'
import { Button, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useContext} from 'react';
import { CartContext } from '../../Context/CartContext';

export default function Cartwidget() {

  const {items} =useContext(CartContext)
  let aux = items.reduce((pv,cv)=>pv+cv.quantity,0)

  

  
  return (
    <Button display={{md: 'inline-flex'}} bg={'#ffcf00'} _hover={{bg:'#cc9900'}} _active={{ bg:'#b28405'}} justifyContent={'end'}>
    <FontAwesomeIcon icon={faCartShopping} style={{color:'black'}} />
    {aux===0?<></>:<Flex position={'absolute'}  top={'-8px'} right={'-8px'} color={'black'} borderRadius='50%' justifyContent='center' bgColor={'rgb(255,0,0)'} width='20px' height='20px'>{items.reduce((pv,cv)=>pv+cv.quantity,0)}</Flex>}
    </Button>
  )
}
