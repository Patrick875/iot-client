import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="mx-0 bg-dark ">
			<header
				style={{ fontFamily: "Merriweather" }}
				className="blog-header py-3  container ">
				<div className="row flex-nowrap  align-items-center">
					<div className="col-8 start">
						<Link
							className="blog-header-logo text-capitalize text-light text-decoration-none  "
							to="/">
							Smart Jacket System
						</Link>
					</div>
					
				</div>
			</header>
		</div>
	);
}

export default Header;
