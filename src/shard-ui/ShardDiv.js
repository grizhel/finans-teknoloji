import React, { createElement } from "react";

export default function ShardDiv(props) {
	const classNames = `shard-div ${props.className ?? ""}`;

	const ReactElement = createElement("div", {
		className: classNames,
		children: props.children,
	});

	return ReactElement;
}
