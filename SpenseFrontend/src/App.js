import React,{useState} from 'react';
import Home from './components/Home';
// import Slider from './components/Slider';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Filter from './components/Filter';
import Viewproduct from './components/Viewproduct';
import Payment from './components/Payment';


function App() {
  const [cartDataLength, setCartDataLength] = useState(0);
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home cartDataLength={cartDataLength}/>} />
        <Route path='/cart' element={<Cart cartDataLength={cartDataLength}/>} />
        <Route path='/profile' element={<Profile cartDataLength={cartDataLength} />} />
        <Route path='/filter/:id' element={<Filter cartDataLength={cartDataLength}/>} />
        <Route path='/viewproduct/:id' element={<Viewproduct setCartDataLength={setCartDataLength} cartDataLength={cartDataLength}/>} />
        <Route path='/payment' element={<Payment cartDataLength={cartDataLength}/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
