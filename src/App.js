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

	useEffect(() => {
		if (!isLogin) setProdComprados([]);
	}, [isLogin]);

	const handleProdComprados = (value) => {
		if (!isLogin) {
			return;
		}
		setProdComprados([...prodComprados, value]);
	};

	const removeItem = (id) => {
		setProdComprados(prodComprados.filter((idProd) => id !== idProd));
	};

	console.log(prodComprados);

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
				<Footer prodComprados={prodComprados} dataBase={dataBase} removeItem={removeItem} />
			)}
		</BrowserRouter>
	);
}

export default App;
