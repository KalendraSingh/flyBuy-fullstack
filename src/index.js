import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import Header from './Header';
import About from './About';
import Contact from './Contact';
import Product from './Product';
import Dashboard  from './admin/Dashboard';
import Category from './admin/Category';
import Adproduct from './admin/Adproduct';
import Adlogin from './admin/Adlogin';
import Ulogin from './Ulogin';
import Usignup from './Usignup';
import Cart from './Cart';
import Myorder from './Myorder';
import Searchproduct from './Searchproduct';

//import Footer from './Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
   
      <Routes>
        <Route path='/' element ={<App/>} />
        <Route path='/About' element ={<About/>} />
        <Route path='/Contact' element ={<Contact/>} />
        <Route path='/product' element ={<Product/>} />
        <Route path='/category' element ={<Category/>} />
        <Route path='/dashboard' element ={<Dashboard/>} />
        <Route path='/adproduct' element ={<Adproduct/>} />
        <Route path='/admin' element ={<Adlogin/>} />
        
        <Route path='/cart' element ={<Cart/>} />
        <Route exact path='/ulogin' element={<Ulogin />} />
        <Route exact path='/usignup' element={<Usignup />} />
        <Route exact path = "/myorder" element={<Myorder/>} />
        <Route exact path = "/searchproduct/:id" element = {<Searchproduct/>} />


        
       
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);


reportWebVitals();
