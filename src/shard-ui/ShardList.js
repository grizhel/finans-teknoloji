import React from "react";
import ShardA from "./ShardA";

function ShardListItem({ item }) {
	return item.href ? (
		<li className="shard-li">
			<ShardA href={item.href}>{item.text}</ShardA>
		</li>
	) : (
		<li>{item}</li>
	);
}

export default function ShardList(props) {
	return (
		<ol className="shard-ol alternating-colors">
			{props.list.map((item, i) => (
				<ShardListItem key={i} item={item} />
			))}
		</ol>
	);
}
