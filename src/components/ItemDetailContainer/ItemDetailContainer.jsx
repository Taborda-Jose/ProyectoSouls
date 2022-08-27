import React from 'react'
import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Loader from '../Loader/Loader'

function ItemDetailContainer() {
    const {id} = useParams();
    const [items ,setItems] = useState({})
    useEffect(() => {
        const getNameApi = async()=>{
          try{
              const weapons = await axios.get('https://eldenring.fanapis.com/api/weapons?limit=120')
              const detailsWeapons= await weapons.data
              const product = detailsWeapons.data
              setItems(product.find((element)=>element.id===id))
          }catch(error){
              console.log(error)
          }
        }
        getNameApi()
        
      },[id])

return (
    <>
    {items===0 ? <Loader></Loader>: <ItemDetail Props={items}></ItemDetail>}
    </>
  )
}

export default ItemDetailContainer