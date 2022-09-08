import React from 'react'
import Items from '../Items/Items'
import AtributesMap from '../Items/AtributesMap';
import ScaleAtributeMap from '../Items/ScaleAtributeMap';
import { Flex } from '@chakra-ui/react';

function ItemList({ products }) {


    return (
        <Flex flexDir='row' flexWrap='wrap'>
            {products.map((item, index) => <Items key={index} Props={item}></Items>)}
        </Flex>
    )
}

export default ItemList