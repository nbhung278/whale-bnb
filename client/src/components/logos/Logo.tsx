import React from "react";
import LogoImage from "../../assets/images/logovector.png";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<div className="hidden sm:flex items-center hover:cursor-pointer">
			{/* <span className="logo-text text-secondary text-2xl font-bold">
				Whalebnb
			</span> */}
			
			<Link to={"/"}>
				<img width={55} src={LogoImage} alt="logo" />
			</Link>
		</div>
	);
};

export default Logo;
