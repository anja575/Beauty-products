import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';
import Contact from './Contact';

function App() {
  const [products, setProducts] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json');
            const nyxProducts = response.data.filter(product => product.brand === 'nyx' && product.description !== "" );
            setProducts(nyxProducts);
            console.log(nyxProducts);
        } catch (error) {
            console.error('Error loading data:', error);
        }
    };

    fetchProducts();
  }, []);

  const updateCart = (newProduct) => {
    setCartProducts([...cartProducts, newProduct]);
    toast.success(<div>Product <strong>{newProduct.name}</strong> added to cart!</div>);
  };

  const addToCart = (id) => {
    const selectedProduct = products.find((product) => product.id === id);
  
    const isProductInCart = cartProducts.some((product) => product.id === id);
  
    if (selectedProduct && !isProductInCart) {
      console.log('id: ', selectedProduct.id);
      updateCart(selectedProduct);
    } else {
      console.log('Product is already in the cart.');
      toast.success(<div>Product <strong>{selectedProduct.name}</strong> is already in the cart!</div>);
    }
  };

  const removeFromCart = (id) => {
    const selectedProduct = cartProducts.find((product) => product.id === id);
    const updatedCart = cartProducts.filter((product) => product.id !== id);
    setCartProducts(updatedCart);
    toast.success(<div>Product <strong>{selectedProduct.name}</strong> removed from cart!</div>);
  };

  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <NavBar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/shop' element = {<Shop products={products} onAdd={addToCart}/>}/>
        <Route path='/cart' element = {<Cart cartProducts={cartProducts} onRemove={removeFromCart}/>}/>
        <Route path='/contact' element = {<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
