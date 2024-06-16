import React from "react";

export default function Footer() {
  return (
    <footer className="footer flex flex-col bg-gray-100">
      <div className="footer-container container flex flex-col lg:flex-row justify-between">
        <div className="footer-logo">Logo</div>
        <div className="footer-menus">Menus</div>
        <div className="footer-map">map</div>
      </div>
      <div className="footer-copyright p-3 text-center">
        <p>Copyright © 2024 by Phụng Tiên </p>
      </div>
    </footer>
  );
}
