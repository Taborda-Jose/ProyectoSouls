import React from 'react'
import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import db from '../../services'
import {useParams} from 'react-router-dom'
import Loader from '../Loader/Loader'
import { collection,getDocs } from 'firebase/firestore'

function ItemDetailContainer() {
    const {id} = useParams();
    const [items ,setItems] = useState({})
    useEffect(() => {
              const product = collection(db,'Items')
              getDocs(product).then((item)=>{
              let aux=item.docs.map((e)=>e={id:e.id,...e.data()})
              setItems(aux.find((e)=>e.id===id))
              })
      },[id])

return (
    <>
    {items===0 ? <Loader></Loader>: <ItemDetail Props={items}></ItemDetail>}
    </>
  )
}

export default ItemDetailContainer