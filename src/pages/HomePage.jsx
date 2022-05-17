import React from "react";
import Card from "../components/Card";

const HomePage = ({ dataBase, handleProdComprados, prodComprados }) => {
	return (
		<main
			className="bg-sky-200 grid grid-cols-1
		">
			<h2 className="text-2xl text-center mt-4 font-bold ">¿Qué es esto?</h2>
			<p className="text-base text-center m-4 text-slate-700">
				Es un intento de ecommerce de gatitos
			</p>

			<h2 className="text-2xl text-center mt-4 font-bold ">Ofertas</h2>

			<article className="p-8 gridResponsive">
				{dataBase.map(
					(product) =>
						product.balance < 300 &&
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

export default HomePage;
