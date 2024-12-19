import React from "react";
import ceng from "./resources/media/personel/ceng.png";
import ece from "./resources/media/personel/ece.png";
import mete from "./resources/media/personel/mete.png";
import ShardCard from "./shard-ui/ShardCard";

export default function About(props) {
	return (
		<ShardCard>
			<img src={ceng} alt="Logo" />
			<img src={ece} alt="Logo" />
			<img src={mete} alt="Logo" />
		</ShardCard>
	);
}
