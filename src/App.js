import { BrowserRouter, Route, Routes } from "react-router-dom";
import dataBase from "./assets/products.json";
import "./App.css";
import Header from "./components/Header";
import ProductsPage from "./pages/ProductsPage";
import AccountPage from "./pages/AccountPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
	const [isLogin, setIsLogin] = useState(false);

	return (
		<BrowserRouter>
			<div className="body">
				<Header isLogin={isLogin} setIsLogin={setIsLogin} />
			</div>
			<Routes>
				<Route path="/" element={<HomePage dataBase={dataBase} />} />
				<Route path="/products" element={<ProductsPage dataBase={dataBase} />} />
				{isLogin && <Route path="/account" element={<AccountPage />} />}
				<Route path="/*" element={<ErrorPage />} />
			</Routes>
			{isLogin && (
				<div>
					<Footer />
				</div>
			)}
		</BrowserRouter>
	);
}

export default App;
