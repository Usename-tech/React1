
import './App.css'

import Products from "./pages/products/Products.jsx";
import Navbar from "./nav-bar/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
// import { Home } from "./pages/home/Home.jsx"
// import Signin from "./pages/sign-in/Signin.jsx";
// import Signup from "./pages/sign-up/Signup.jsx";
import Profile  from "./pages/profile/Profile.jsx";
import Contact from "./pages/contact/Contact.jsx";
import ProductDetails from "./pages/product-details/ProductDetails.jsx";
function App() {

  return (<div className="app">
    <Navbar />
    {/* <Route path={"/"} element={<Home />} /> */}
    <Routes>
      <Route path={"/products"} element={<Products />} />
      {/* <Route path={"/sign-in"} element={<Signin />} />
      <Route path={"/sign-up"} element={<Signup />} /> */}
      <Route path={"/profile"} element={<Profile />} />
      <Route path={"/contact"} element ={<Contact/>}/>
      <Route path={"/product-details"} element={<ProductDetails/>}/>
    </Routes>



  </div>
  );
}

export default App;
