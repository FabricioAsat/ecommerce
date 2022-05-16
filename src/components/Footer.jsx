import React, { useEffect, useState } from "react";
import { getMoney, setMoney } from "../assets/infoUser";
import Card from "./Card";

const Footer = ({ prodComprados, setProdComprados, dataBase, removeItem, precio, setPrecio }) => {
	const [agregar, setAgregar] = useState(false);
	const [miCarrito, setMiCarrito] = useState(false);
	const [monto, setMonto] = useState(0);
	const [montoInsuficiente, setMontoInsuficiente] = useState(false);

	const insertarMonto = () => {
		if (monto <= 0 || !monto) return;
		setMonto(0);
		setMoney(getMoney() + monto);
		setAgregar(false);
	};

	const realizarCompra = () => {
		if (prodComprados.length === 0) return;

		if (getMoney() < precio) {
			setMontoInsuficiente(true);
			return;
		}

		setMoney(getMoney() - precio);
		setProdComprados([]);
		setMiCarrito(false);
		setPrecio(0);
		setMontoInsuficiente(false);
	};

	useEffect(() => {}, []);

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
		setMontoInsuficiente(false);
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
					{prodComprados.length > 0 ? (
						<>
							<h2 className="text-slate-300 text-4xl font-bold text-center w-11/12">
								Productos en carrito
							</h2>
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
						</>
					) : (
						<h2 className="text-slate-300 text-4xl font-bold text-center w-11/12">
							Tu carrito está vacío
						</h2>
					)}
					<div className="bg-slate-300 flex justify-around items-center fixed font-bold bottom-0 h-12 w-full left-0">
						<h2 className="font-bold">Total a pagar: $ {precio}</h2>
						<button className="font-bold border-b-2 border-slate-700" onClick={realizarCompra}>
							Comprar
						</button>
					</div>
					<button className="text-slate-300 fixed font-bold right-8" onClick={cerrarCarrito}>
						X
					</button>

					{montoInsuficiente && (
						<div className="fixed bottom-12 w-full left-0 bg-red-600">
							<h2 className="text-center font-bold text-2xl m-4 text-slate-300">
								Saldo insuficiente
							</h2>
						</div>
					)}
				</div>
			)}
		</>
	);
};

export default Footer;
