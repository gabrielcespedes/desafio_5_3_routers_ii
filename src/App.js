import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './views/Home';
import Pokemones from './views/Pokemones';
import Pokemon from './views/Pokemon';

import MyContext from './my_context';
import { useEffect, useState } from 'react';

function App() {
  const endpoint = "https://pokeapi.co/api/v2/pokemon";
  const [data, setData] = useState([]);
  const estadoCompartido = {data};

  useEffect(() => {
    dataNames()
  }, [])

  const dataNames = async () => {
    const responseNames = await fetch(endpoint);
    const dataNames = await responseNames.json();
    setData([...dataNames.results])
  }

  return (
    <MyContext.Provider value={estadoCompartido}>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/desafio_5_3_routers_ii' element={<Home></Home>}></Route>
          <Route path='/pokemones' element={<Pokemones></Pokemones>}></Route>
          <Route path='/pokemones/:id' element={<Pokemon></Pokemon>}></Route>
        </Routes>                      
      </BrowserRouter>
    </MyContext.Provider>    
  );
}

export default App;
