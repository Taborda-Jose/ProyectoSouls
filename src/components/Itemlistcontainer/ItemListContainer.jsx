import React from 'react'
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
import axios from 'axios'
import { Flex } from '@chakra-ui/react';
import Bgimagen from '../Imagenes/609173.jpg'
import { useParams } from 'react-router-dom';
export default function ItemListContainer() {

  const [productos, setProductos] = useState([]);
  const {category}=useParams()
  useEffect(() => {
    const getNameApi = async()=>{
      try{
          const weapons = await axios.get('https://eldenring.fanapis.com/api/weapons?limit=120')
          const detailsWeapons= await weapons.data
          detailsWeapons.data.map((item)=>{item.price = Math.floor(Math.random()*(5-1)+1); item.stock = 10})
          let categoryFilter = []
          
          categoryFilter = category?categoryFilter = detailsWeapons.data.filter(items =>items.category.replace(' ','')===category):categoryFilter=detailsWeapons.data
          setProductos(categoryFilter)
      }catch(error){
          console.log(error)
      }
    }
    getNameApi()
    
  },[category])
 
// {    if(category === undefined){
//       categoryFilter=detailsWeapons.data
//       setProductos(categoryFilter)
//     }
//     else{
//       categoryFilter=detailsWeapons.data.filter(items=>items.category.toLowerCase()===category)
//       setProductos(categoryFilter)
//     }


  return (
    <Flex backgroundImage={Bgimagen} backgroundAttachment='fixed' backgroundRepeat='no-repeat' justifyContent='space-between'>
      {productos.length === 0 ? <Loader></Loader> : <ItemList products={productos}></ItemList>}
    </Flex>

  )
}
