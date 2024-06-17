import React from "react";

export default function Footer() {
	return (
		<footer className="footer flex flex-col bg-gray-100">
			<div className="footer-container container min-h-28 m-auto w-full max-w-screen-xl flex flex-col items-center lg:flex-row justify-between">
				<div className="footer-logo">Logo Phụng Tiên</div>
				<div className="footer-menus">Footer Menu</div>
				<div className="footer-map">Google Map</div>
			</div>
			<div className="footer-copyright border-t border-t-gray-200 p-3 text-center">
				<p>Copyright © 2024 by Phụng Tiên </p>
			</div>
		</footer>
	);
}
