import React from 'react'
import Rune from '../Imagenes/Rune.png'
import { Image } from '@chakra-ui/react'

function Loader() {
  return (
    
       <div style={{width:'100vw', height:'100vh',  display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'rgba(0,0,0,0.6)'}}><div className='App-logo' > <Image src={Rune}></Image> </div></div> 
    
  )
}

export default Loader