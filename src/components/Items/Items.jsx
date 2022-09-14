import CardCarousel from './CardCarousel';
import ItemCount from '../ItemCount/ItemCount';

import {
  Flex,
  Circle,
  Box,
  Badge,
  useColorModeValue,
  Text,
  Button
} from '@chakra-ui/react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWeightHanging } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import ScaleAtributeMap from './ScaleAtributeMap';
import AtributesMap from './AtributesMap';


const data = {
 isStock:'true'
};

function Item({Props}) {
  const {id, name, image, description, requiredAttributes, scalesWith, category, weight, attack, defence, price, stock} = Props;
  const [contador,setContador]=useState()
  const {addItem} = useContext(CartContext)

  function onAdd(count){
    console.log(`Esta cantidad de items que la persona va a comprar ${count}`)
    setContador(count)
    addItem(Props,count)
  }
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
            <Link to={`/item/${id}`}>More of: {name}</Link>
            </Badge>
          </Box>
        
          <CardCarousel URL={image} TEXT={description} TITLE={name} />
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
                {requiredAttributes=== undefined?<></>:<AtributesMap ReqAtributesArr={requiredAttributes}></AtributesMap>}
                <Text><FontAwesomeIcon icon={faWeightHanging} /> Weight: {weight}</Text>
              </Flex>
              <Flex direction={'column'}>
                {scalesWith === undefined ?<></>:<ScaleAtributeMap ScaleAtributesArr={scalesWith}></ScaleAtributeMap>}
                <Text> Type: {category} </Text>
              </Flex>
            </Flex>
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gold'} fontSize="lg">
                <Text color={'gold'}>S$C {price
                }</Text>
              </Box>
            </Box>
          </Flex>
        </Box>
        {contador?<Link to={'/cart'}><Button>Go to cart</Button></Link>:<ItemCount stock={stock} initial={1} onAdd={onAdd}></ItemCount>}

      </Box>
    </Flex>

  );
}

export default Item;