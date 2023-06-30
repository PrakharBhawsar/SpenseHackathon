import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './components/Header';
import Login from './components/Login';
import Users from './components/Users';
import Home from './components/Home';
import ManageVendor from './components/ManageVendor'
import Orders from './components/Orders'
import Offer from './components/Offer'
import Couponcode from './components/Couponcode';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/Header" element={<Header />} />
          <Route exact path="/Users" element={<Users />} />
          <Route exact path="/ManageVendor" element={<ManageVendor/>} />
          <Route exact path="/Orders" element={<Orders/>} />
          <Route exact path="/Offer" element={<Offer/>} />
          <Route exact path="/Couponcode" element={<Couponcode/>} />
          
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
