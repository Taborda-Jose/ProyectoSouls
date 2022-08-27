import React from 'react';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../components/Itemlistcontainer/ItemListContainer';
import NavBar from '../components/NavBar/NavBar'

function Rutas() {
  return (
    <BrowserRouter>
      <NavBar/>

        <Routes>
            <Route path='/' element={<ItemListContainer Width='100%'></ItemListContainer>}/>
            <Route path='/item/:id' element={<ItemDetailContainer> </ItemDetailContainer>}/>
            <Route />
        </Routes>

    </BrowserRouter>

  )
}

export default Rutas