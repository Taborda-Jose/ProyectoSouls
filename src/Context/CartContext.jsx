import { render } from '@testing-library/react';
import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';

export const CartContext = createContext();
export default function CartProvider({children}) {
    const [items, setItems] = useState([])
   function addItem(item, quantity){

        if(isInCart(item.id)){
            let aux = items;
            let aux_2 = items.find((element)=>element.id === item.id)      
            let itemIndex = aux.indexOf(aux_2)
            aux[itemIndex].quantity += quantity;
            setItems(aux)
        }else{
            setItems([...items,{...item,quantity}])
        }
   }
   function removeItem(itemId){
    let aux = items;
    let aux2 = items.find((element)=> element.id === itemId)
    let itemIndex = aux.indexOf(aux2)
    console.log(itemIndex)
    aux.splice(itemIndex,1)
    setItems([...aux])
   }
   function clear(){
        setItems([])
   }
   function isInCart(itemId){
    return items.find(element=>element.id === itemId)
   }
    return (
    <CartContext.Provider value={{addItem, removeItem, clear, isInCart, items}}>
        {children}
    </CartContext.Provider>
  )
}
