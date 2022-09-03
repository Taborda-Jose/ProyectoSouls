import React from 'react';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../components/Itemlistcontainer/ItemListContainer';
import NavBar from '../components/NavBar/NavBar'
import SingIn from '../components/Login/SingIn'
import SingUp from '../components/Login/SingUp'
import Cart from '../components/Cart/Cart';

function Rutas() {
  return (
    <BrowserRouter>
      <NavBar/>

        <Routes>
            <Route path='/' element={<ItemListContainer Width='100%'></ItemListContainer>}/>
            <Route path='/item/:id' element={<ItemDetailContainer> </ItemDetailContainer>}/>
            <Route path='/item/category/:category' element={<ItemListContainer Width='100%'></ItemListContainer>}/>
            <Route path='/Singin'element={<SingIn></SingIn>}></Route>
            <Route path='/Singup'element={<SingUp></SingUp>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
        </Routes>

    </BrowserRouter>

  )
}

export default Rutas