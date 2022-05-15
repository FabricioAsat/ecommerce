import React, { useState } from "react";
import { getMoney, setMoney } from "../assets/infoUser";
import Card from "./Card";

const Footer = ({ prodComprados, dataBase, removeItem }) => {
	const [agregar, setAgregar] = useState(false);
	const [miCarrito, setMiCarrito] = useState(false);
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

	const cerrarCarrito = () => {
		setMiCarrito(false);
	};

	const abrirCarrito = () => {
		setMiCarrito(true);
	};

	return (
		<>
			<footer className="flex fixed justify-between bottom-0 h-12 w-full bg-black/90 px-8 select-none">
				<div className="flex items-center h-full">
					<h2 className="font-bold text-2xl text-slate-300">$ {getMoney()}</h2>
					<button className="mx-4 text-lg" onClick={handleAgregar}>
						➕
					</button>
				</div>
				<button className="text-2xl" onClick={abrirCarrito}>
					🛒
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

					<button className="text-slate-300 font-bold fixed right-5" onClick={cerrar}>
						X
					</button>
				</div>
			)}
			{miCarrito && (
				<div className="fixed top-0 h-full w-full flex flex-col items-start bg-black/90 px-8 py-12 select-none overflow-y-scroll ">
					{dataBase.map(
						(product) =>
							prodComprados.includes(product._id) && (
								<Card
									key={product._id}
									id={product._id}
									url={product.picture}
									name={product.name}
									price={product.balance}
									age={product.age}
									onCarrito={false}
									removeItem={removeItem}
								/>
							)
					)}
					<button className="text-slate-300 fixed font-bold right-8" onClick={cerrarCarrito}>
						X
					</button>
				</div>
			)}
		</>
	);
};

export default Footer;
