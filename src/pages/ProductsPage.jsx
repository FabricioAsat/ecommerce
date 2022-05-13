import React from "react";
import Card from "../components/Card";

const ProductsPage = ({ dataBase }) => {
	return (
		<main className="bg-sky-200 grid grid-cols-1">
			<h1 className="text-2xl text-center mt-4 font-bold">Productos</h1>
			{dataBase.map((product) => (
				<Card
					key={product._id}
					url={product.picture}
					name={product.name}
					price={product.balance}
					age={product.age}
				/>
			))}
		</main>
	);
};

export default ProductsPage;
