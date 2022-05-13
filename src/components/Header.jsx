import React from "react";
import Login from "./Login";
import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = ({ isLogin, setIsLogin }) => {
	return (
		<header className="flex flex-col justify-center items-center h-32 bg-sky-500">
			<Logo />
			<nav className="flex justify-between items-center w-full bg-sky-500">
				<NavBar isLogin={isLogin} />
				<Login setIsLogin={setIsLogin} />
			</nav>
		</header>
	);
};

export default Header;
