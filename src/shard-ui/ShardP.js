import React, { createElement } from "react";

export default function ShardP(props) {
	const classNames = `shard-p ${props.className ?? ""}`;

	const ReactElement = createElement("p", {
		className: `${classNames} shard-p`,
		children: props.children,
	});

	return ReactElement;
}
