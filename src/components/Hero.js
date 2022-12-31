import React from "react";

export default function Hero({ sidebar }) {
  return (
    <div
      className={sidebar ? "hero-container blur disabled" : "hero-container"}
    >
      <HeroText />
      <HeroSearch />
      <HeroCategories />
      <div className="background-gradient"></div>
    </div>
  );
}

const HeroText = () => {
  return (
    <div className="hero-text">
      <h1>
        <span className="hlt-text">Community</span>-centric <br></br>NFT
        marketplace
      </h1>
    </div>
  );
};

const HeroSearch = () => {
  return (
    <div className="search-container snd-gutter-top snd-gutter-bottom">
      <input
        className="search-box"
        placeholder="Search by collection, NFT, or user"
      ></input>
    </div>
  );
};

const HeroCategories = () => {
  return (
    <ul className="hero-categories main-gutter-bottom">
      <li>Ethereum</li>
      <li>Flow</li>
      <li>Solana</li>
      <li>Polygon</li>
    </ul>
  );
};
