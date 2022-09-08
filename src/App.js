import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Rutas from './routes/Rutas';
import CartProvider from './Context/CartContext';



function App() {
  return (
    <ChakraProvider>
     <CartProvider>
      <div className="App">
      <Rutas></Rutas>
      </div>
    </CartProvider> 
    </ChakraProvider> 
  );
}

export default App;
