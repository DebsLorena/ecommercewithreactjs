import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";

import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Terms from "./pages/Terms";
import Notfound from "./pages/Notfound";
import MyAccount from "./pages/MyAccount";
import { useSelector } from "react-redux";



const App = () => {

  const user = useSelector((state) => state.user.currentUser);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/login" element={user ? (<Navigate replace to="/" />) : (<Login />)}  />  */}
        <Route path="/login" element={<Login />}  />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/register" element={<Register />}  />
        {/* <Route path="/register" element={user ? (<Navigate replace to="/" />) : (<Register />)}  /> */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </Router>
  )
};

export default App;