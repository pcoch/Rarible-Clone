import React from "react";
import "../styles/ProductPage.css";
import "../styles/App.css";

export default function ProductPage({ sidebar, addToCart, productSelection }) {
  return (
    <div
      className={
        sidebar
          ? "product-page-container blur disabled"
          : "product-page-container"
      }
    >
      <div className="background-gradient-pdp"></div>
      <div className="product-image-container">
        <img
          className="product-img"
          src={productSelection.image}
          alt="prod-img"
        ></img>
      </div>
      <div className="product-details-container">
        <div className="product-details-box">
          <h5>{productSelection.title}</h5>
          <h4>
            Price <span>{productSelection.price} ETH</span> · 1 of 1 available ·
            Highest bid <span>{productSelection.bid} ETH</span>
          </h4>
        </div>
        <div className="product-details-box-bottom">
          <div className="product-details">
            <h4>Collection</h4>
            <div>
              <img
                className="img-thumbnail"
                alt="img2"
                src={productSelection.image}
              ></img>
              <h3>{productSelection.type}</h3>
            </div>
          </div>
          <div className="product-details">
            <h4>Blockchain</h4>
            <div>
              <img
                className="img-thumbnail"
                alt="img2"
                src="https://raw.githubusercontent.com/rarible/public-assets/main/blockchains/ETHEREUM.svg"
              ></img>
              <h3>Ethereum</h3>
            </div>
          </div>
        </div>
        <div className="atc-box">
          <button
            id={productSelection.sku}
            onClick={addToCart}
            className="checkout-btn"
          >
            Buy for {productSelection.price} ETH
          </button>
          <button
            onClick={() => alert("I do nothing, sorry ¯_(ツ)_/¯")}
            className="checkout-btn"
          >
            Place Bid
          </button>
        </div>
      </div>
    </div>
  );
}
