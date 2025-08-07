

import Header from "./components/header"
import Home from "./pages/home"
import Footer from "./components/footer"
import {Route, Routes } from "react-router-dom"
import About from "./pages/about"
import Contact from "./pages/contact"
import Cart from "./pages/cart"

function App(){
  return <div>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/cart" element={<Cart/>} />
   </Routes>
  
   <Footer/>
 

  </div>
}

export default App