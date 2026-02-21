
import './App.css'

import Products from "./pages/products/Products.jsx";
import Navbar from "./nav-bar/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
// import { Home } from "./pages/home/Home.jsx"
// import Signin from "./pages/sign-in/Signin.jsx";
// import Signup from "./pages/sign-up/Signup.jsx";
function App() {

  return (<div className="app">
    <Navbar />
    {/* <Route path={"/"} element={<Home />} /> */}
    <Routes>
      <Route path={"/products"} element={<Products />} />
      {/* <Route path={"/sign-in"} element={<Signin />} />
      <Route path={"/sign-up"} element={<Signup />} /> */}
    </Routes>



  </div>
  );
}

export default App;
