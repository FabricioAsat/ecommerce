import React from "react";

const Card = ({ url, name, price, age }) => {
	return (
		<div className="flex justify-between items-end mx-8">
			<figure className="flex my-4 mx-4 justify-start items-center">
				<img src={url} alt={name} />
				<div className="mx-4">
					<div>
						<h2>
							Nombre: <b>{name}</b>
						</h2>
						<small>
							Edad: <b>{age}</b>
						</small>
					</div>
					<p>
						Precio: <b>${price}</b>
					</p>
				</div>
			</figure>
			<button className="text-2xl my-8">🛒</button>
		</div>
	);
};

export default Card;
