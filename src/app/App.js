import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../widgets/Navbar/Navbar";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Products from "../pages/Products/Products";
import ProductDetails from "../entities/Product/ui/ProductDetails/ProductDetails";
import ProductDetailInfo from "../entities/Product/ui/ProductDetailInfo/ProductDetailInfo";
import ProductDetailNutrition from "../entities/Product/ui/ProductDetailNutrition/ProductDetailNutrition";
import ProductDetailStorage from "../entities/Product/ui/ProductDetailStorage/ProductDetailStorage";
import Cart from "../pages/Cart/Cart";
import {Provider} from "react-redux";
import { store } from './providers/Store/store';


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/products/:id" element={<ProductDetails />}>
              <Route path="" element={<ProductDetailInfo />}></Route>
              <Route
                path="nutrition"
                element={<ProductDetailNutrition />}
              ></Route>
              <Route path="storage" element={<ProductDetailStorage />}></Route>
            </Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
