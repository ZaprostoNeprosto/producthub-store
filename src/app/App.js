import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from '../widgets/Navbar/Navbar';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Products from '../pages/Products/Products';
import ProductDetails from '../entities/Product/ui/ProductDetails/ProductDetails';
import ProductDetailInfo from '../entities/Product/ui/ProductDetailInfo/ProductDetailInfo';
import ProductDetailNutrition from '../entities/Product/ui/ProductDetailNutrition/ProductDetailNutrition';
import ProductDetailStorage from '../entities/Product/ui/ProductDetailStorage/ProductDetailStorage';
import Cart from '../pages/Cart/Cart';
import { store } from './providers/Store/store';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/products/:id" element={<ProductDetails />}>
                            <Route path="" element={<ProductDetailInfo />} />
                            <Route
                                path="nutrition"
                                element={<ProductDetailNutrition />}
                            />
                            <Route path="storage" element={<ProductDetailStorage />} />
                        </Route>
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
