import React from 'react';
import '../App.css';

function Header(props) {
  return (
    <div className="flex shopping-card">
      <div className="shopheading"onClick={() => props.handleShow(false)}>Shop</div>
      <div className="shopheading" onClick={() => props.handleShow(true)}>
        Cart
        <sup className="cart"> {props.count} </sup>
      </div>
    </div>
  );
}

export default Header;
