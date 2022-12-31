import React from "react";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import discord from "../assets/discord.svg";
import send from "../assets/send.svg";
import youtube from "../assets/youtube.svg";
import close from "../assets/close.svg";
import "../styles/Cart.css";

export default function Cart({
  showSidebar,
  sidebar,
  cartItems,
  addToCart,
  removeFromCart,
  cartTotal,
}) {
  return (
    <div className={sidebar ? "cart-container cart-open" : "cart-container"}>
      <img
        className="close-cart-btn"
        onClick={showSidebar}
        src={close}
        alt="close"
      ></img>
      <div className="cart-top">
        {cartItems.length === 0 && <h3>Your Cart Is Empty</h3>}
        {cartItems.length !== 0 && (
          <RenderCartItems
            cartItems={cartItems}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        )}
      </div>
      {cartItems.length !== 0 && (
        <div className="cart-checkout">
          <div className="checkout-btn" onClick={() => alert("i am useless")}>
            {cartTotal} ETH - Checkout
          </div>
        </div>
      )}
      <SocialFooter />
    </div>
  );
}

function RenderCartItems({ addToCart, cartItems, removeFromCart }) {
  const productsInCart = cartItems.map((product) => (
    <li className="cart-item-box" key={product.sku}>
      <div className="cart-prod-info">
        <h3 className="incart">{product.title}</h3>
        <h4 className="incart">{product.price} ETH</h4>
        <div className="qty-selector">
          <button className="qty-btn" id={product.sku} onClick={removeFromCart}>
            -
          </button>
          <h3 className="incart">{product.qty}</h3>
          <button className="qty-btn" onClick={addToCart} id={product.sku}>
            +
          </button>
        </div>
      </div>
      <div className="cart-item-img">
        <img className="incart" alt={product.title} src={product.image}></img>
      </div>
    </li>
  ));
  return <ul className="cart-items">{productsInCart}</ul>;
}

function SocialFooter() {
  return (
    <div className="cart-footer">
      <ul className="incart">
        <li>
          <img className="incart" src={twitter} alt="twitter"></img>
        </li>
        <li>
          <img className="incart" src={instagram} alt="instagram"></img>
        </li>
        <li>
          <img className="incart" src={discord} alt="discord"></img>
        </li>
        <li>
          <img className="incart" src={send} alt="send"></img>
        </li>
        <li>
          <img className="incart" src={youtube} alt="youtube"></img>
        </li>
      </ul>
    </div>
  );
}
