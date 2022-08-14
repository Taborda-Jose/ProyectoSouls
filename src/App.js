import './App.css';
import Navbar from './components/NavBar/NavBar.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import ItemListContainer from './components/Itemlistcontainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <ChakraProvider>
    <div className="App">

      <Navbar/>
      <ItemListContainer greeting={'Hola soy un ItemlistContainer'}>
      </ItemListContainer>
      <div style={{margin:'auto'}}> <ItemCount/>   </div>
    </div>
    </ChakraProvider> 
  );
}

export default App;
