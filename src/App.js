import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import RenderProducts from './components/RenderProducts';
import Cart from './components/Cart'

const URL = "http://localhost:8080/products";



function App() {
  const [productData, setProductData] = useState(null);

  async function getDataFromServer() {
    const files = await axios.get(URL);
    setProductData(files.data);
  }

  useEffect(() => {
    getDataFromServer();
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<RenderProducts {...{ productData }} />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

    </div>
  );
}

export default App;
