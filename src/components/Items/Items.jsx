import CardCarousel from './CardCarousel';
import ItemCount from '../ItemCount/ItemCount';

import {
  Flex,
  Circle,
  Box,
  Badge,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWeightHanging } from '@fortawesome/free-solid-svg-icons'


const data = {
  Stock: 10,
  price: 4.5,

};

function Item({ Id, Name, Image, Description, ReqAtributes, ScaleAtributes, Categories, Weight }) {
  return (
    <Flex p={30} alignItems="center" justifyContent="center" minW='350px'maxW='450px' margin='auto'>
      <Box
        minW='350px'
        maxW='1em'
        height='850px'
        bg={useColorModeValue('#1f2424', 'gray.800')}
        borderWidth="1px"
        borderColor='gold'
        rounded="lg"
        shadow="lg"
        position="relative"
        >

        {data.isStock && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="gold"
          />
        )}
        {!data.isStock && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red"
          />
        )}
        <Box p="6">
          <Box d="flex" alignItems="baseline" paddingBottom={'2em'}>
            <Badge rounded="full" px="2" fontSize=".9em" colorScheme="yellow">
            <Link to={`/item/${Id}`}>More of: {Name}</Link>
            </Badge>
          </Box>
        
          <CardCarousel URL={Image} TEXT={Description} TITLE={Name} />
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              /*isTruncated*/
              color="gold">
              Basic Stadistic:
            </Box>
          </Flex>
          <Flex justifyContent="space-between" alignContent="center" color={'silver'}>
            <Flex direction={'row'} justifyContent="space-between" width='250px' height='100px'>
              <Flex direction={'column'}>
                {ReqAtributes}
                <Text><FontAwesomeIcon icon={faWeightHanging} /> Weight: {Weight}</Text>
              </Flex>
              <Flex direction={'column'}>
                {ScaleAtributes}
                <Text> Type: {Categories} </Text>
              </Flex>
            </Flex>
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gold'} fontSize="lg">
                <Text color={'gold'}>S$C {data.price.toFixed(2)}</Text>
              </Box>
            </Box>
          </Flex>
        </Box>
        <ItemCount stock={10} initial={1} onAdd={() => { console.log('felicitaciones') }}></ItemCount>

      </Box>
    </Flex>

  );
}

export default Item;