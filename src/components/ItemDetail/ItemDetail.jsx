import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
    Button,
  } from '@chakra-ui/react';
import ItemCount from '../ItemCount/ItemCount'
import AtributesMap from '../Items/AtributesMap';
import MapingAtackDetail from '../Items/MapingAtackDetail';
import MapingDefenceDetail from '../Items/MapingDefenceDetail';
import ScaleAtributeMap from '../Items/ScaleAtributeMap';
import img from '../Imagenes/609173.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';


  export default function Simple({Props}) {
    const {addItem,itemQuantityF} = useContext(CartContext)
    const {id, name, image, description, requiredAttributes, scalesWith, category, weight, attack, defence} = Props;
    const [contador,setContador] = useState('')
    function onAdd(count){
      setContador(count)
      addItem(Props,count)
      itemQuantityF()
    }

    return (
    <Box backgroundImage={img} filter={{blur:'10em'}}>
      <Container maxW={'7xl'} bgColor={'rgba(255,255,255,0.7)'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex bgColor={'rgba(0,0,0,0.5)'}>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
                image
              }
              fit={'coven'}
              margin={'auto'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}

            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }} border={'2px solid'}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {name}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                    Type: {category}
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text fontSize={'lg'}>
                {description}
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Features

                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    aca escalados
                  {scalesWith === undefined ?<></>:<ScaleAtributeMap ScaleAtributesArr={scalesWith}></ScaleAtributeMap>}
                  </List>
                  <List spacing={2}>
                    aca requiremientos
                    {requiredAttributes=== undefined?<></>:<AtributesMap ReqAtributesArr={requiredAttributes}></AtributesMap>}
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Product Details
                </Text>
                <List spacing={2}>
                    <Flex flexDir={'row'} justifyContent={'space-around'}>
                        <Flex flexDir={'column'}>
                        {attack === undefined?<></>:<MapingAtackDetail AtackArr={attack}></MapingAtackDetail>}
                        </Flex>
                        <Flex flexDir={'column'}>
                        {defence=== undefined?<></>:<MapingDefenceDetail DefenceArr={defence}></MapingDefenceDetail>}
                        </Flex>
                    </Flex>


                  <ListItem>
                  Weigth: {weight}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>

                    </Text>{' '}

                  </ListItem>
                </List>
              </Box>
            </Stack>
              <Flex justifyContent={'center'} bgColor={'rgba(0,0,0,0.5)'} margin={'auto'} padding={'10px'}>
              {contador?<Link to={'/cart'}><Button>Go to cart</Button></Link>:<ItemCount stock={5} initial={1} onAdd={onAdd}></ItemCount>}
              </Flex>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      </Box>
    );
  }