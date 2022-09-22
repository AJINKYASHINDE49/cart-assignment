import React, { useEffect, useState } from "react";
import "../App.css";

function CartList({ cart }) {
  const [MYCART, setMYCART] = useState([]);

  useEffect(() => {
    setMYCART(cart);
  }, [cart]);

  return (
    <div>
      {MYCART?.map((cartItem, cartindex) => {
        return (
          <div className="cartbox">
            <img className = "cartimg"src={cartItem.url} width={40} />
            <span> {cartItem.name} </span>
            <button className="cartbtn"
              onClick={() => {
                const NEWCART = MYCART.map((item, index) => {
                  return cartindex === index
                    ? {
                        ...item,
                        quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                      }
                    : item;
                });
                setMYCART(NEWCART);
              }}
            >
              -
            </button>
            <span> {cartItem.quantity} </span>
            <button className="cartbtn"
              onClick={() => {
                const NEWCART = MYCART.map((item, index) => {
                  return cartindex === index
                    ? { ...item, quantity: item.quantity + 1 }
                    : item;
                });
                setMYCART(NEWCART);
              }}
            >
              +
            </button>
            <span> Rs. {cartItem.price * cartItem.quantity} </span>
          </div>
        );
      })}

      <div className="carttotal">
        
        Total Amount  =  <span></span>
        {MYCART.map((item) => item.price * item.quantity).reduce(
          (total, value) => total + value,
          0
        )}
      </div>
    </div>
  );
}

export default CartList;
