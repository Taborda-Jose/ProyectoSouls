import React from 'react'
import { Button } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

export default function Cartwidget() {
  return (
    <Button display={{md: 'inline-flex'}} bg={'#ffcf00'} _hover={{bg:'#cc9900'}} _active={{ bg:'#b28405'}}>
    <FontAwesomeIcon icon={faCartShopping} style={{color:'black'}} />
    </Button>
  )
}
