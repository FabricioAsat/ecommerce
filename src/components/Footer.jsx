import React, { useState } from "react";
import { getMoney, setMoney } from "../assets/infoUser";

const Footer = () => {
	const [agregar, setAgregar] = useState(false);
	const [monto, setMonto] = useState(0);

	const insertarMonto = () => {
		if (monto <= 0 || !monto) return;
		setMonto(0);
		setMoney(getMoney() + monto);
		setAgregar(false);
	};

	const handleChange = (e) => {
		try {
			setMonto(parseInt(e.target.value));
		} catch (error) {}
	};

	const handleAgregar = () => {
		setAgregar(!agregar);
	};
	const cerrar = () => {
		setAgregar(false);
	};

	return (
		<>
			<footer className="fixed bottom-0 h-12 w-full flex items-center bg-black/90 px-8 select-none">
				<h2 className="font-bold text-2xl text-slate-300">$ {getMoney()}</h2>
				<button className="mx-4 text-lg" onClick={handleAgregar}>
					➕
				</button>
			</footer>
			{agregar && (
				<div className="fixed bottom-12 h-40  w-full flex flex-col items-start bg-black/90 px-8 select-none pt-4">
					<h2 className="text-slate-300 text-xl mx-auto mb-4 text-center">
						Agregar desde #### #### #### #123
					</h2>
					<h2 className="text-slate-300">Cuánto dinero desea depositar:</h2>
					<div className=" mx-auto my-auto">
						<input
							className="input-form "
							type="number"
							max="1000000"
							placeholder="Ingresar monto "
							onChange={handleChange}
						/>
						<button className=" mx-4 py-1 px-4 bg-slate-300/90" onClick={insertarMonto}>
							Agregar
						</button>
					</div>

					<button className="text-slate-300 fixed right-5" onClick={cerrar}>
						X
					</button>
				</div>
			)}
		</>
	);
};

export default Footer;
