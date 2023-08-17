import "./App.css";
import Loginpage from "./Loginpage";
import Signuppage from "./Signuppage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import { useState } from "react";
import { productdata } from "./Data";
import { myContext } from "./Context";
import Apparels from "./Apparels";
import Products from "./Products";
import Viewmore from "./Viewmore";
import Cart from "./Cart";
import { Dummy } from "./Dummy";
import User from "./User";
import Adminlogin from "./Adminlogin";
import Adminapparels from "./Adminapparels";
import Adminproduct from "./Adminproduct";
import Adminaddproduct from "./Adminaddproduct"
import Admineditproduct from "./Admineditproduct";
import Adminusersec from "./Adminusersec";
import AdminHome from "./AdminHome";

function App() {
  const [product,setProduct] = useState(productdata);
  const [cart, setCart] = useState([]);
  const [userData, setUserData] = useState(Dummy);
  const [search, setSearch] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logindUser,setLogindUser] = useState ("")
  return (
    <div className="App">
      <myContext.Provider
        value={{
          product,
          setCart,
          cart,
          userData,
          setUserData,
          search,
          setSearch,
          isLoggedIn,
          setIsLoggedIn,
          setProduct,
          logindUser,setLogindUser
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<Signuppage />} />
          <Route path="/apparels" element={<Apparels />} />
          <Route path="/products" element={<Products />} />
          <Route path="/viewmore/:id" element={<Viewmore />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/user" element={<User />} />
          <Route path="/Adminlogin" element={<Adminlogin />} />
          <Route path="/Adminhome" element={<AdminHome />} />
          <Route path="/Adminapparels" element={<Adminapparels />} />
          <Route path="/Adminproduct" element={<Adminproduct />} />
          <Route path="/Adminaddproduct" element={<Adminaddproduct />} />
          <Route path="/Admineditproduct/:id" element={<Admineditproduct />} />
          <Route path="/Adminusersec" element={<Adminusersec />} />
        </Routes>
      </myContext.Provider>
    </div>
  );
}

export default App;
