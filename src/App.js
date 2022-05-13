import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';

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
      <h2>Ecommerce</h2>
      <div className='product-container'>
        {productData && productData.map(prod => <Product {...prod} key={prod.id} />)}
      </div>
    </div>
  );
}

export default App;
