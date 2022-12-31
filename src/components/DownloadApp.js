import React from "react";
import qrcode from "../assets/qrcode.svg";
import apple from "../assets/apple.svg";
import google from "../assets/google.svg";

function DownloadApp({ sidebar }) {
  return (
    <div className={sidebar ? "da-container blur" : "da-container"}>
      <div className="da-text-container">
        <h2>
          <span className="main-text">Download Rarible app</span> to track your
          NFT<br></br>portfolio and discover drops
        </h2>
        <AppBadges />
      </div>
      <div className="da-image">
        <img
          src="https://rarible.com/public/8d5ac97f4f8ee5413775.png"
          alt="img"
        ></img>
      </div>
      <div className="da-code-container">
        <div className="da-code">
          <img alt="qrcode" src={qrcode}></img>
        </div>
        <div className="da-code-text">
          <h3>
            Scan to<br></br>
            download<br></br>
            Rarible app
          </h3>
        </div>
      </div>
    </div>
  );
}

const AppBadges = () => {
  return (
    <div className="app-badge-container">
      <div className="app-badge">
        <img alt="apple-play" src={apple}></img>
        <h6>App Store</h6>
      </div>
      <div className="app-badge">
        <img alt="google-play" src={google}></img>
        <h6>Google Play</h6>
      </div>
    </div>
  );
};

export { DownloadApp, AppBadges };
