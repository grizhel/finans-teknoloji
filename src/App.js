import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import About from "./About";
import Home from "./Home";
import ShardLayout from "./shard-ui/ShardLayout";
import Product from "./Product";
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
		{ link: "/iletisim", text: "İletişim" },
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
						<Route path="/anasayfa" element={<Home />} />
						<Route path="/urunler" element={<Product />} />
						<Route path="/hakkimizda" element={<About />} />
						<Route path="/iletisim" element={<Contact />} />
					</Routes>
				</ShardLayout>
			</BrowserRouter>
		)
	);
}
