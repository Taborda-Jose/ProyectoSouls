import React from 'react'
import Cards from '../Cards/Cards'
import AtributesMap from '../Cards/AtributesMap';
import ScaleAtributeMap from '../Cards/ScaleAtributeMap';

function ItemList({products}) {

  return (
    <>    
    {products.map((item, index)=><Cards key={index} Id={item.id} Name={item.name} Image={item.image} Description={item.description} ReqAtributes={<AtributesMap ReqAtributesArr={item.requiredAttributes}></AtributesMap>} ScaleAtributes={<ScaleAtributeMap ScaleAtributesArr={item.scalesWith}></ScaleAtributeMap>} Categories={item.category} Weight={item.weight}></Cards>)}
    </>
  )
}

export default ItemList