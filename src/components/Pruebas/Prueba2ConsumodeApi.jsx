import axios from 'axios'
import React, { useState } from 'react'
import { useEffect} from 'react'

function Prueba2ConsumodeApi() {
    const [char,setChar]=useState([])
    useEffect(() => {
      const getNameApi = async()=>{
        try{
            const weapons = await axios.get('https://eldenring.fanapis.com/api/weapons')
            setChar(weapons.data)
            console.log(char)
        }catch(error){
            console.log(error)
        }
      }
      getNameApi()
      return()=>{
        setChar([])
      }
    }, [])

}

export default Prueba2ConsumodeApi