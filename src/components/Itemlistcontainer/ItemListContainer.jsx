import React from 'react'
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
export default function ItemListContainer({greeting}) {
  
  const [productos, setProductos]=useState([]);
  const data = [{
      id: "17f695c42f0l0i1ohb4cao0qxackpu",
      name: "Forked Hatchet",
      image: "https://eldenring.fanapis.com/images/weapons/17f695c42f0l0i1ohb4cao0qxackpu.png",
      description: "Peculiar hatchet wielded by imps. The gently undulating forked blade is known as an imps tongue and causes blood loss",
      scalesWith: [{
          name: "Str",
          scaling: "D"
        },
        {
          name: "Dex",
          scaling: "D"
        }
      ],
      requiredAttributes: [{
          name: "Str",
          amount: 9
        },
        {
          name: "Dex",
          amount: 14
        }
      ],
      category: "Axe",
      weight : 2.5
    },
    
      {id:"17f69dcccffl0i1ojske3hc4ernauj",
      name:"Horn Bow",
      image:"https://eldenring.fanapis.com/images/weapons/17f69dcccffl0i1ojske3hc4ernauj.png",
      description:"Longbow made from animal horn. Wielded by the master hunters of the ancestral followers.  Imbues arrows fired with magic damage. Reveals its true worth when used magic-infused arrows. ",
      scalesWith:[{"name":"Str","scaling":"E"},{"name":"Dex","scaling":"D"}],
      requiredAttributes:[{"name":"Str","amount":10},{"name":"Dex","amount":14},{"name":"Int","amount":12}],
      category:"Bow",
      weight:4.5}
  ]
  
  useEffect(()=>{
      const task = new Promise ((resolve, rejected)=>{
          setTimeout(() => {
              resolve(data)
          }, 2000);
      }) 
      task.then(resultado=> setProductos(resultado))
      console.log('componente ya se cargo! está listo ')
      return()=>{
          console.log('componente se destruyo o se murio')

      }

      
  },[])
  console.log('componente se cargo pero no está listo')
  useEffect(() => {
        
      
      return () => {
        
      }
    }, [productos])

  return (
    <>
    {productos.length<0?<Loader></Loader>:<ItemList products={productos}></ItemList>}
    </>

  )
}
