import React from 'react'
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
import axios from 'axios'
import { Flex } from '@chakra-ui/react';
import Bgimagen from '../Imagenes/609173.jpg'
export default function ItemListContainer() {

  const [productos, setProductos] = useState([]);


  useEffect(() => {
    const getNameApi = async()=>{
      try{
          const weapons = await axios.get('https://eldenring.fanapis.com/api/weapons?limit=120')
          const detailsWeapons= await weapons.data
          setProductos(detailsWeapons.data)
      }catch(error){
          console.log(error)
      }
    }
    getNameApi()
    
  },[])
  return (
    <Flex backgroundImage={Bgimagen} backgroundAttachment='fixed' backgroundRepeat='no-repeat' justifyContent='space-between'>
      {productos.length === 0 ? <Loader></Loader> : <ItemList products={productos}></ItemList>}
    </Flex>

  )
}
