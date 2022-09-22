import React from 'react';
import '../App.css';

function ProductList({ product, addToCart }) {
  return (
    <div className="flex">
      {product.map((Item) => {
        return (
          <div className="productbox" style={{ width: '33%' }}>
            <div className="product-item">
              <img className="productimg" src={Item.url} width="100%" />
              <p>
                {Item.name} | {Item.category}{' '}
              </p>
              <p> {Item.seller} </p>
              <p> Rs. {Item.price} /-</p>
              <button onClick={() => addToCart(Item)}>
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;