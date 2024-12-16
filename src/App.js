import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import About from "./About";
import Home from "./Home";
import ShardLayout from "./shard-ui/ShardLayout";

export default function App() {
	const [flag, setFlag] = useState(false);
	const menuLinks = [
		{ link: "/anasayfa", text: "Ana Sayfa" },
		{ link: "/hakkinda", text: "Hakkında" },
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
						<Route path="/hakkinda" element={<About />} />
					</Routes>
				</ShardLayout>
			</BrowserRouter>
		)
	);
}
