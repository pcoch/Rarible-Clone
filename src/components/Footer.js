import React from "react";

export default function Footer({ sidebar }) {
  return (
    <div className={sidebar ? "footer-container blur" : "footer-container"}>
      <ul>
        <li>© Rarible, Inc. All rights reserved.</li>
        <li>Community guidelines</li>
        <li>Terms</li>
        <li>Privacy policy</li>
      </ul>
    </div>
  );
}
