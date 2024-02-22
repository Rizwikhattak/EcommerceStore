import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import Header from "./Header";
import Cart from "./Cart";
import Footer from "./Components/Footer";
import ErrorPage from "./ErrorPage";
import { ProductProvider } from "./Context/ProductContext";
function App() {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/SingleProduct/:id" element={<SingleProduct />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </ProductProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
