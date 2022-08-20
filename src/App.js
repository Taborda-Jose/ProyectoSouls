import './App.css';
import Navbar from './components/NavBar/NavBar.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import ItemListContainer from './components/Itemlistcontainer/ItemListContainer';
import { Flex } from '@chakra-ui/react';
import Prueba2ConsumodeApi from './components/Pruebas/Prueba2ConsumodeApi';


function App() {
  return (
    <ChakraProvider>
    <div className="App">

      <Navbar/>
      <Flex backgroundColor={'black'}>
      <ItemListContainer>
      </ItemListContainer>
      <Prueba2ConsumodeApi></Prueba2ConsumodeApi>
      </Flex>
    </div>
    </ChakraProvider> 
  );
}

export default App;
