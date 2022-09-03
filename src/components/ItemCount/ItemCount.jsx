import { Button, Text, Flex, } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';



function Counter({ stock, initial, onAdd }) {
    const [Counter, setCounter] = useState(initial);

    function Subtract(min) {
        if (Counter > min) {
            setCounter(Counter - 1);
        }
    }
    function Add(max) {
        if (Counter < max) {
            setCounter(Counter + 1);
        }
    }
    return (
        <Flex flexDir='column' justifyContent='space-between' justifyItems='space-between' alignItems='center'>
            <Flex style={{ justifyContent: 'center' }} bgColor='gray.300' borderRadius={'10px'} flexDir='row'>
                <Button onClick={() => { Subtract(initial) }} bg={'#ffcf00'} _hover={{ bg: '#cc9900' }} _active={{ bg: '#b28405' }} transition={'all 0.5 ease'}> <FontAwesomeIcon icon={faMinus} /> </Button>
                <Text width='100px' color='gray.800' margin='auto'> {Counter} </Text>
                <Button onClick={() => { Add(stock) }} bg={'#ffcf00'} _hover={{ bg: '#cc9900' }} _active={{ bg: '#b28405' }} transition={'all 0.5 ease'}> <FontAwesomeIcon icon={faPlus} /> </Button>
            </Flex>
            <Button width='190px' bg={'gray.400'} _hover={{ bg: '#ffcf00' }} _active={{ bg: '#cc9900' }} transition={'all .5s ease'} onClick={() => { onAdd(Counter)}} margin='10px'>Add to cart<FontAwesomeIcon icon={faCircleArrowRight} style={{ position: 'relative', top: '1,5px', left: '1.5px' }} /> </Button>
        </Flex>
    )
}

export default Counter