import { NavLink } from "react-router-dom";
const NavBar = ({ isLogin, handleClick }) => {
	return (
		<nav className="flex justify-center items-center bg-sky-500">
			<NavLink
				className={({ isActive }) => (isActive ? `active navlink` : `navlink`)}
				to="/"
				value="home"
				onClick={handleClick}>
				Home
			</NavLink>
			<NavLink
				className={({ isActive }) => (isActive ? `active navlink` : `navlink`)}
				to="/products"
				value="products"
				onClick={handleClick}>
				Products
			</NavLink>
			{isLogin && (
				<NavLink
					className={({ isActive }) => (isActive ? `active navlink` : `navlink`)}
					to="/account"
					value="account"
					onClick={handleClick}>
					Account
				</NavLink>
			)}
		</nav>
	);
};
export default NavBar;
