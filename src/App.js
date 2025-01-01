import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import About from "./About";
import LandingPage from "./LandingPage";
import ShardLayout from "./shard-ui/ShardLayout";
import Products from "./Products";
import Contact from "./Contact";

export default function App() {
	const [flag, setFlag] = useState(false);
	const menuLinks = [
		{ link: "/anasayfa", text: "Ana Sayfa" },
		{
			link: "/urunler",
			text: "Ürünler",
		},
		{ link: "/hakkimizda", text: "Hakkımızda" },
		{ link: "/iletisim", text: "İletişim - Linkler" },
	];

	useEffect(() => {
		setFlag(true);
	}, []);

	return (
		flag && (
			<BrowserRouter>
				<ShardLayout menuLinks={menuLinks}>
					<Routes>
						<Route path="/" element={<Navigate to={"/anasayfa"} />} />
						<Route path="/anasayfa" element={<LandingPage />} />
						<Route path="/urunler" element={<Products />} />
						<Route path="/hakkimizda" element={<About />} />
						<Route path="/iletisim" element={<Contact />} />
					</Routes>
				</ShardLayout>
			</BrowserRouter>
		)
	);
}
