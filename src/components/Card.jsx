import React from "react";

const Card = ({ id, url, name, price, age, handleProdComprados, removeItem, onCarrito = true }) => {
	const handleClick = (e) => {
		handleProdComprados(id);
	};

	return (
		<div className="flex justify-between items-end mx-8">
			<figure className="flex my-4 mx-4 justify-start items-center">
				<img src={url} alt={name} />
				<div className="mx-4">
					<div>
						<h2 className={!onCarrito ? "text-slate-300" : ""}>
							Nombre: <b className={!onCarrito ? "text-slate-300" : ""}>{name}</b>
						</h2>
						<small className={!onCarrito ? "text-slate-300" : ""}>
							Edad: <b className={!onCarrito ? "text-slate-300" : ""}>{age}</b>
						</small>
					</div>
					<p className={!onCarrito ? "text-slate-300" : ""}>
						Precio: <b className={!onCarrito ? "text-slate-300" : ""}>${price}</b>
					</p>
				</div>
			</figure>
			{onCarrito ? (
				<button className="text-2xl my-8" onClick={handleClick}>
					🛒
				</button>
			) : (
				<button
					className="text-slate-300 text-xl my-auto font-bold text-center"
					onClick={() => removeItem(id)}>
					X
				</button>
			)}
		</div>
	);
};

export default Card;
