import React from "react";
import {Routes,Route, useLocation} from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from "./pages/About.jsx"
import Blogs from "./pages/Blogs.jsx"
import Contact from "./pages/Contact.jsx"
import Creators from "./pages/Creators.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import { useAuth } from "./context/AuthProvider.jsx";
const App =()=>{
  const location = useLocation();
  const hideNavFoot = ["/dashboard","/login","/register"].includes(
    location.pathname
  )
  const {blogs} = useAuth();
  console.log(blogs);
  return(
    <div>
      {!hideNavFoot && <Navbar/>}
      <Routes>
          {/* <Route exact path="/" element={<Home/>}/> */}
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/blogs" element={<Blogs/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/creators" element={<Creators/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
      </Routes>
      {/* {!hideNavFoot && <Footer/>} */}

    </div>
   
  )
}

export default App;