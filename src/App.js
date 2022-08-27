import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Rutas from './routes/Rutas';



function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <Rutas></Rutas>
    </div>
    </ChakraProvider> 
  );
}

export default App;
