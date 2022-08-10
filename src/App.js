import './App.css';
import Navbar from './components/NavBar/NavBar.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import ItemListContainer from './components/Itemlistcontainer/ItemListContainer';
function App() {
  return (
    <ChakraProvider>
    <div className="App">

      <Navbar/>
      <ItemListContainer greeting={'Hola soy un ItemlistContainer'}/>

    </div>
    </ChakraProvider> 
  );
}

export default App;
