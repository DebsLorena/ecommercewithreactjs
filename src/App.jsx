import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Terms from "./pages/Terms";
import Notfound from "./pages/Notfound";
import MyAccount from "./pages/MyAccount";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/notfound" element={<Notfound />} />
        <Route path="/myaccount" element={<MyAccount />} />
      </Routes>
    </Router>
  )
};

export default App;