import './App.css';
import Navbar from './components/NavBar/NavBar.jsx';
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  //Todo el codigo debe estar antes del return
  return (
    <div className="App">
    <ChakraProvider>
    <Navbar/></ChakraProvider>

    </div>
  );
}

export default App;
