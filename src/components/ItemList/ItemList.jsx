import React from 'react'
import Items from '../Items/Items'
import AtributesMap from '../Items/AtributesMap';
import ScaleAtributeMap from '../Items/ScaleAtributeMap';
import { Flex } from '@chakra-ui/react';

function ItemList({ products }) {

    return (
        <Flex flexDir='row' flexWrap='wrap'>
            {products.map((item, index) => <Items key={index} Id={item.id} Name={item.name} Image={item.image} Description={item.description} ReqAtributes={<AtributesMap ReqAtributesArr={item.requiredAttributes}></AtributesMap>} ScaleAtributes={<ScaleAtributeMap ScaleAtributesArr={item.scalesWith}></ScaleAtributeMap>} Categories={item.category} Weight={item.weight}></Items>)}
        </Flex>
    )
}

export default ItemList