import React from "react";
import Hero from "./Hero";
import ProductCarousel from "./ProductCarousel";
import { DownloadApp } from "./DownloadApp";
import Footer from "./Footer";

export default function Home({ sidebar, addToCart, selectProduct }) {
  return (
    <div className="home-container">
      <Hero sidebar={sidebar} />
      <ProductCarousel
        sidebar={sidebar}
        addToCart={addToCart}
        selectProduct={selectProduct}
      />
      <DownloadApp sidebar={sidebar} />
      <Footer sidebar={sidebar} />
    </div>
  );
}
