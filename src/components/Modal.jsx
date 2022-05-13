import React, { useEffect, useState } from "react";
import { setEmail, setName, setPass } from "../assets/infoUser";

const initialForm = { name: "", pass: "", email: "" };

const Modal = ({ handleClick, setTextButton, setModalOn, setIsLogin }) => {
	const [form, setForm] = useState(initialForm);

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	useEffect(() => {
		setName(form.name);
		setPass(form.pass);
		setEmail(form.email);
	}, [form]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!form.name || !form.pass || !form.email) {
			alert("Datos incompletos");
			return;
		}

		setTextButton("Logout");
		setIsLogin(true);
		setModalOn(false);

		handleReset();
	};

	const handleReset = (e) => {
		setForm(initialForm);
	};

	return (
		<div className="absolute w-full h-full top-0 left-0 bg-black/90">
			<form
				className="flex w-full h-full flex-col justify-center items-center "
				onSubmit={handleSubmit}>
				<h2 className="text-slate-200 text-2xl  ">Register</h2>
				<small className="text-slate-200 italic text-xs mb-4  ">
					Poner cualquier info que cumpla con lo pedido
				</small>

				<div className=" my-4">
					<input
						className={`input-form  w-72 `}
						type="text"
						name="name"
						autoComplete="off"
						onChange={handleChange}
						placeholder="Inserte su nombre"
						value={form.name}
						pattern="\b([A-Z]{1}[a-z]{1,30}[- ]{0,1}|[A-Z]{1}[- ']{1}[A-Z]{0,1}[a-z]{1,30}[- ]{0,1}|[a-z]{1,2}[ -']{1}[A-Z]{1}[a-z]{1,30}){2,5}"
						title="Ingresa un nombre válido - mayúsculas"
						required
					/>
				</div>

				<div className=" my-4">
					<input
						className={`input-form  w-72 `}
						type="password"
						name="pass"
						autoComplete="off"
						placeholder="Inserte su contraseña"
						onChange={handleChange}
						value={form.pass}
						required
						title="Cualquier contraseña"
					/>
				</div>

				<div className=" my-4">
					<input
						className={`input-form w-72 `}
						type="email"
						name="email"
						autoComplete="off"
						onChange={handleChange}
						placeholder="Inserte su email"
						value={form.email}
						pattern="^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$"
						title="Email inválido"
					/>
				</div>
				<div>
					<input className=" cursor-pointer input-form mt-4 mx-4 " type="submit" value="Login" />
					<input
						className=" cursor-pointer input-form mt-4 mx-4 "
						type="button"
						value="Exit"
						onClick={handleClick}
					/>
				</div>
			</form>
		</div>
	);
};

export default Modal;
