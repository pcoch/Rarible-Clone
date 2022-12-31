import React from "react";
import products from "../assets/products";
import { Link } from "react-router-dom";

export default function ProductCarousel({ sidebar, addToCart, selectProduct }) {
  return (
    <ul
      className={
        sidebar ? "product-carousel blur disabled" : "product-carousel"
      }
    >
      <ProductCard addToCart={addToCart} selectProduct={selectProduct} />
    </ul>
  );
}

function ProductCard({ addToCart, selectProduct }) {
  const productList = products.map((product) => (
    <Link to="product" key={product.sku} style={{ textDecoration: "none" }}>
      <li
        className="pc-box"
        onClick={selectProduct}
        id={product.sku}
        key={product.sku}
      >
        <div className="pc-image-box no-click">
          <img
            className="pc-image no-click"
            alt={product.title}
            src={product.image}
          ></img>
          <div className="atc-btn click" id={product.sku} onClick={addToCart}>
            Add To Cart
          </div>
        </div>
        <div className="pc-title-box no-click">
          <h4 className="no-click">{product.type}</h4>
          <h5 className="no-click">{product.title}</h5>
        </div>
        <div className="pc-detail-box no-click">
          <div className="pc-price snd-gutter-right no-click">
            <h4 className="no-click">Price</h4>
            <h4 className="no-click">{product.price} ETH</h4>
          </div>
          <div className="pc-bid no-click">
            <h4 className="no-click">Highest Bid</h4>
            <h4 className="no-click">{product.bid}</h4>
          </div>
        </div>
      </li>
    </Link>
  ));

  return <div className="pc-container">{productList}</div>;
}
