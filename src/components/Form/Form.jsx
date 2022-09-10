import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from 'react';
  
  export default function ResetPasswordForm({total, compra}){
    const [formulario,setFormulario]=useState(
       { buyer:{
            name:'',
            phoneNumber:'',
            email:''
        },
        total: total,
        items: compra,
    }
    )
    const {buyer:{email,name,phoneNumber}}=formulario;
    const handleChange=(e)=>{
        const {name, value} =e.target;
        setFormulario({
            ...formulario,
            buyer:{
                ...formulario.buyer,
                [name]:value,},
        })
    }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Checkout
          </Heading>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Name1 Name2"
              _placeholder={{ color: 'gray.500' }}
              type="Text"
            />
            
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
            />
            
          </FormControl>
          <FormControl id="phoneNumber" isRequired>
            <FormLabel>Phone number</FormLabel>
            <Input
              placeholder="+54 011 0000000000"
              _placeholder={{ color: 'gray.500' }}
              type="number"
            />
            
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
    );
  }