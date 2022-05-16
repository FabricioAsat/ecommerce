import { BrowserRouter, Route, Routes } from "react-router-dom";
import dataBase from "./assets/products.json";
import "./App.css";
import Header from "./components/Header";
import ProductsPage from "./pages/ProductsPage";
import AccountPage from "./pages/AccountPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
	const [isLogin, setIsLogin] = useState(false);
	const [prodComprados, setProdComprados] = useState([]);
	const [precio, setPrecio] = useState(0);

	useEffect(() => {
		if (!isLogin) {
			setProdComprados([]);
			setPrecio(0);
		}
	}, [isLogin]);

	const handleProdComprados = (id, price) => {
		if (!isLogin) {
			return;
		}
		setProdComprados([...prodComprados, id]);
		setPrecio(Math.round((precio + parseFloat(price)) * 100) / 100);
	};

	const removeItem = (id, price) => {
		setProdComprados(prodComprados.filter((idProd) => id !== idProd));
		setPrecio(Math.round((precio - parseFloat(price)) * 100) / 100);
	};

	return (
		<BrowserRouter>
			<div className="body">
				<Header isLogin={isLogin} setIsLogin={setIsLogin} />
			</div>
			<Routes>
				<Route
					path="/"
					element={
						<HomePage
							dataBase={dataBase}
							handleProdComprados={handleProdComprados}
							prodComprados={prodComprados}
							isLogin={isLogin}
						/>
					}
				/>
				<Route
					path="/products"
					element={
						<ProductsPage
							dataBase={dataBase}
							handleProdComprados={handleProdComprados}
							prodComprados={prodComprados}
							isLogin={isLogin}
						/>
					}
				/>
				{isLogin && <Route path="/account" element={<AccountPage />} />}
				<Route path="/*" element={<ErrorPage />} />
			</Routes>
			{isLogin && (
				<Footer
					prodComprados={prodComprados}
					dataBase={dataBase}
					removeItem={removeItem}
					precio={precio}
					setPrecio={setPrecio}
					setProdComprados={setProdComprados}
				/>
			)}
		</BrowserRouter>
	);
}

export default App;
