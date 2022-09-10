import { Stack, Text, Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

export default function SimpleCookiePreference({Props}) {
   const {id, name,description,quantity,price} = Props;
   const {removeItem} = useContext(CartContext)
  return (
    <Stack p="10" boxShadow="lg" m="4" borderRadius="sm" 
    bgColor={'rgba(255,255,255,0.5)'}>
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold" color={'yellow.600'}>{name}</Text>
      </Stack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between">
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'1xl'} color={'gray.900'} fontWeight={'bold'}>
            {description} 
            <Text padding={'5px'} fontWeight={'bold'} color={'yellow.600'}>
                s$c {price}
            </Text>
        </Text>

        <Stack direction={{ base: 'column', md: 'row' }}>
         <Link to={`/item/${id}`}> <Button variant="outline" colorScheme="green" _hover={{backgroundColor:'green.300'}}>
            X{quantity} Buy More
          </Button>
         </Link> 
          <Button colorScheme="red" onClick={()=>removeItem(id)}>Cancel</Button>
        </Stack>
      </Stack>
    </Stack>
  );
}