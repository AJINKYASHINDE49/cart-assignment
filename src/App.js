import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';




function App() {
  const [product, setProduct] = useState([
    {
      url: 'https://images.pexels.com/photos/65256/pomegranate-open-cores-fruit-fruit-logistica-65256.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Pomegranate',
      category: 'Indian',
      seller: 'ABC farms',
      price: 200 ,

    },
    {
      url: 'https://images.pexels.com/photos/108059/pexels-photo-108059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Banana',
      category: 'Indian',
      seller: 'KIA FARMS',
      price: 60,
    },
    {
      url: 'https://images.pexels.com/photos/915016/pexels-photo-915016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Pineapple',
      category: 'USA',
      seller: 'NEO LTD',
      price: 150,
    },
    {
      url: 'https://images.pexels.com/photos/7382868/pexels-photo-7382868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Orange',
      category: 'Indian',
      seller: 'Nagpur farms',
      price: 300,
    },
    {
      url: 'https://images.pexels.com/photos/54370/pexels-photo-54370.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'kiwi',
      category: 'USA',
      seller: 'Neo farms',
      price: 350,
    },
    {
      url: 'https://images.pexels.com/photos/5945731/pexels-photo-5945731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Papaya',
      category: 'Indian',
      seller: 'ABF Ltd',
      price: 140 ,
    },
  ]);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handleShow = (value) => {
    setShowCart(value);
  };

  return (
    <div>
    
      <Header count={cart.length} handleShow={handleShow}></Header>

      {showCart ? (
        <CartList cart={cart}></CartList>
      ) : (
        <ProductList product={product} addToCart={addToCart}></ProductList>
      )}
      
    </div>
  );
}

export default App;

