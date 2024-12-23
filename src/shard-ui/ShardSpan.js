import React, { createElement } from "react";

export default function ShardSpan(props) {
	const classNames = `shard-span ${props.className ?? ""}`;

	const ReactElement = createElement(`span`, {
		className: `${classNames}`,
		children: props.children,
	});

	return ReactElement;
}
