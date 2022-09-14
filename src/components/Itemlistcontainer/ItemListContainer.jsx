import React from 'react'
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
import { Flex } from '@chakra-ui/react';
import Bgimagen from '../Imagenes/609173.jpg'
import { useParams } from 'react-router-dom';
import { collection,getDocs} from 'firebase/firestore';
import  db from '../../services/index'
export default function ItemListContainer() {

  const [productos, setProductos] = useState([]);
  const {category}=useParams()
  useEffect(() => {
          let categoryFilter = []
          const data=collection(db,'Items')
          getDocs(data).then((resolve)=>{
              let aux=resolve.docs.map((e)=>e = {id:e.id,...e.data()})
              categoryFilter = category?categoryFilter = aux.filter(items =>items.category.replace(' ','')===category):categoryFilter=aux
              setProductos(categoryFilter)
          })
  },[category])

  return (
    <Flex backgroundImage={Bgimagen} backgroundAttachment='fixed' bgPosition={'fixed'} backgroundRepeat='no-repeat' justifyContent='space-between' position={'relative'} top={'5em'}>
      {productos.length === 0 ? <Loader></Loader> : <ItemList products={productos}></ItemList>
      }
    </Flex>

  )
}
