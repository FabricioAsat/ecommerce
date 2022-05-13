import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const Login = ({ setIsLogin }) => {
	const [modalOn, setModalOn] = useState(false);
	const [textButton, setTextButton] = useState("Login");

	let navigate = useNavigate();

	const handleClick = (e) => {
		if (textButton === "Logout") {
			setTextButton("Login");
			setIsLogin(false);
			navigate("");
		}

		setModalOn(e.target.textContent === "Login");
	};

	return (
		<>
			<button
				className={`text-lg font-mono font-bold text-center mx-2 my-1 px-2 py-2 select-none bg-sky-500 ${
					textButton === "Login" ? "text-lime-400" : "text-red-500"
				}`}
				onClick={handleClick}>
				{textButton}
			</button>
			{modalOn && (
				<Modal
					handleClick={handleClick}
					setTextButton={setTextButton}
					setModalOn={setModalOn}
					setIsLogin={setIsLogin}
				/>
			)}
		</>
	);
};

export default Login;
