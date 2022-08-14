import { Button, Text, Flex,} from '@chakra-ui/react';
import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';



function Counter() {
    const [Counter, setCounter] = useState(0);
    const [num, setNum] = useState([0]);

    useEffect(()=>{
        console.log(num)
    },[num])
    
    function Subtract(){
        if(Counter>0){
            setCounter(Counter-1);
        }
    }
    function Add(max){
        if (Counter<=max){
            setCounter(Counter+1);
        }
    }
    function Send(param){
        setNum(param)
        setCounter(0)
    }
    //Do#m sol#m fa#m 
    return (
        <Flex flexDir='column' justifyContent='center' justifyItems='center' alignItems='center' alignContent='center'>
            <Flex style={{justifyContent:'center'}} bgColor='gray.300' borderRadius={'10px'} flexDir='row' >
                <Button onClick={()=>{Subtract()}} bg={'#ffcf00'} _hover={{bg:'#cc9900'}} _active={{ bg:'#b28405'}} transition={'all 0.5 ease'}> <FontAwesomeIcon icon={faMinus} /> </Button>
                <Text width='100px' color='gray.800' margin='auto'> {Counter} </Text>
                <Button onClick={()=>{Add(3/*Numero limite de prueba*/)}}  bg={'#ffcf00'} _hover={{bg:'#cc9900'}} _active={{ bg:'#b28405'}} transition={'all 0.5 ease'}> <FontAwesomeIcon icon={faPlus} /> </Button>
            </Flex>
            <br/>
            <Button width='190px'  bg={'gray.400'} _hover={{bg:'#ffcf00'}} _active={{ bg:'#cc9900'}} transition={'all .5s ease'} onClick={()=>{Send(Counter)}}>Add to cart<FontAwesomeIcon icon={faCircleArrowRight} style={{position:'relative', top:'1,5px', left:'1.5px'}}/> </Button>
        </Flex>
    )
}

export default Counter