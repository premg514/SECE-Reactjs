import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Signup from "./pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fruits from "./pages/Fruits";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails/>}  />
          <Route path="/fruits/:fruitname"  element={<Fruits/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
