import React from "react";
import Card from "../components/Card";

const ProductsPage = ({ dataBase, handleProdComprados, prodComprados }) => {
	return (
		<main className="bg-sky-200 grid grid-cols-1">
			<h1 className="text-2xl text-center mt-4 font-bold">Productos</h1>
			<article className="p-8 gridResponsive">
				{dataBase.map(
					(product) =>
						!prodComprados.includes(product._id) && (
							<Card
								handleProdComprados={handleProdComprados}
								key={product._id}
								id={product._id}
								url={product.picture}
								name={product.name}
								price={product.balance}
								age={product.age}
							/>
						)
				)}
			</article>
		</main>
	);
};

export default ProductsPage;
