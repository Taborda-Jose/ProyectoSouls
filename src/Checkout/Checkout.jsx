import React from 'react'
import { useState } from 'react';
import {
    Button,Flex,FormControl,FormLabel,Heading,Input,Stack,useColorModeValue,
  } from '@chakra-ui/react';
import CartCard from '../components/Cart/CartCard'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import db from '../services'
import {collection, addDoc} from 'firebase/firestore'


function Checkout() {

    const {items,clear} = useContext(CartContext)
    const [formulario,setFormulario]=useState(
        { buyer:{
             Fname:'',
             Lname:'',
             phoneNumber:'',
             email:''
         },
         total:'',
         items:''
     }
     )
     const {buyer:{email,Fname,Lname,phoneNumber},} = formulario;
     const handleChange=(e)=>{
        const {name, value} =e.target;
        setFormulario({
            ...formulario,
            buyer:{
                ...formulario.buyer,
                [name]:value,},total: items.reduce((pv,cv)=>pv+cv.quantity,0),items:items
        })
    }

    const setInFirebase = async(order)=>{
      if(order.buyer.Fname===''||order.buyer.email===''||order.buyer.Lname===''||order.buyer.phoneNumber===''){
        alert('Debe completar los campos')
      }
      else{
        try { 
          const col = collection(db,'orders')
          const createOrder = await addDoc(col,order)
          alert(`Su codigo orden ${createOrder.id} se generó correctamente`)
          clear()
        } catch (error) {
        }
      }
    }
  return (
    <Flex justifyContent={'center'} position={'relative'} top={'5em'} flexDir={'column'} minH={'95vh'} backgroundColor={'gray.800'}>
        <Flex bgColor={'gray.800'} justifyContent={'center'}>{items===undefined||items.length===0?<Flex><Link to={'/'}><Button>Back to shop?</Button></Link></Flex>:<ul>{items.map((e,index)=><CartCard Props={e} key={index}></CartCard>)}</ul>}</Flex>
        <Flex>
        <Flex
        minH={'20vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.800', 'gray.800')}
        w={'full'}
        >
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
            <FormLabel>First name</FormLabel>
            <Input
              placeholder="Last name"
              _placeholder={{ color: 'gray.500' }}
              onChange={handleChange}
              type="Text"
              name='Fname'
              value = {Fname}
            />
            
          </FormControl>
          <FormControl id="name" isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input
              placeholder="Last name"
              _placeholder={{ color: 'gray.500' }}
              type="Text"
              name='Lname'
              value = {Lname}
              onChange={handleChange}
            />
            
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
              name='email'
              value={email}
              onChange={handleChange}
            />
            
          </FormControl>
          <FormControl id="phoneNumber" isRequired>
            <FormLabel>Phone number</FormLabel>
            <Input
              placeholder="+54 011 0000000000"
              _placeholder={{ color: 'gray.500' }}
              type="number"
              name='phoneNumber'
              value={phoneNumber}
              onChange={handleChange}
            />   
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              onClick={()=>setInFirebase(formulario)}>
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Flex>
</Flex>
  )
}

export default Checkout