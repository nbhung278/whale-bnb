import React from "react";
import Logo from "../../logos/Logo";
import HeaderMenu from "./HeaderMenu";
import HeaderInfo from "./HeaderInfo";

const Header = () => {
	return (
		<div className="flex top-0 justify-center sm:justify-between py-5 px-20 fixed w-full bg-white z-[1000]">
			<Logo />
			<HeaderMenu />
			<HeaderInfo />
		</div>
	);
};

export default Header;
