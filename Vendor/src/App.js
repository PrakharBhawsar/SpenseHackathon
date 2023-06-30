import './App.css';
import Login from './Login';
import Form from './Form';
import Signup from './Signup';
import Inventory from './Inventory';
import EditProduct from './EditProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [product,setProductData] = useState([]);
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Login/>} />
      <Route  path='/Signup' element={<Signup />} />
      <Route  path='/AddProduct' element={<Form />} />
      <Route  path='/Home' element={<Inventory setProductData={setProductData}/>} />
      <Route  path='/EditProduct' element={<EditProduct product={product} addproduct={setProductData}/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
