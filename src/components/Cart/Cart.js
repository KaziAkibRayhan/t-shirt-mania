import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveItem }) => {
  let massage;
  if (cart.length === 0) {
    massage = <p>Please Buy at least one... item.</p>;
  } else if (cart.length === 1) {
    massage = (
      <div>
        <p>আমার জন্য একটা নাও</p>
        <p>তোমার জন্য একটা নাও</p>
        <p>
          <small>আমার জন্য আরেক টা একটা নাও</small>
        </p>
      </div>
    );
  } else {
    massage = <p>Thanks for buy items.</p>;
  }

  return (
    <div>
      <h3 className={cart.length === 2 ? "pink" : "yellowgreen"}>
        Order Summery
      </h3>
      <h5 className={`green ${cart.length === 2 ? "blue" : "pink"}`}>
        Order Quantity: {cart.length}
      </h5>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveItem(tshirt)}>X</button>
        </p>
      ))}
      {massage}
      {cart.length === 3 ? (
        <p>৩ জন কে গিফট দিবা না 🤣</p>
      ) : (
        <p>কিনো তোমাদেরি সময়</p>
      )}
      <h3>&& (AND) Operator</h3>
      {cart.length === 2 && <h2>Double Items</h2>}
      <h3>|| (OR) Operator</h3>
      {cart.length === 4 || <h2>চারটা আইটেম না</h2>}
    </div>
  );
};

export default Cart;
