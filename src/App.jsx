import React from "react";
import 'react-toastify/dist/ReactToastify.css'; 
import Home from "./components/Home";
import LineChart from "./components/linechart";
import{Routes ,Route}from 'react-router-dom'
import MultiLineChart from "./components/multilinechart";
import Header from "./components/header";
import Product from "./components/product";
// import Product_details from "./components/product_details";
import Login from "./components/Login"
import Signup from "./components/Signup"
import Copyright from "./components/Copyright"
import CartItems from "./components/CartItems"
import Slider from "./components/Slider"
import Footer from "./components/Footer"
import Contactus from "./components/Contactus"







function App(){
  return(
    <>
    <Routes>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/" element={<Header/>}>     </Route>
      <Route path="/LineChart" element={<LineChart/>}></Route>
      <Route path="/MultiLineChart" element={<MultiLineChart/>}> </Route>
      <Route path="/Product" element={<Product/>}></Route>
      {/* <Route path="/Product_details" element={<Product_details/>}></Route> */}
      <Route path="/Login" element={<Login/>}>   </Route>
      <Route path="/Signup" element={<Signup/>}>   </Route>
      <Route path="/Copyright" element={<Copyright/>}>   </Route>
      <Route path="/CartItems" element={<CartItems/>}>   </Route>
      <Route path="/Slider" element={<Slider/>}>   </Route>4
      <Route path="/Footer" element={<Footer/>}>   </Route>
      <Route path="/Contactus" element={<Contactus/>}>   </Route>
    </Routes> 
    </>
  )
}
export default App