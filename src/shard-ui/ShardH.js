import React, { createElement } from "react";

export default function ShardH(props) {
	const classNames = `shard-h shard-h-${props.level} ${props.className ?? ""}`;

	const ReactElement = createElement(`h${props.level}`, {
		className: `${classNames}`,
		children: props.children,
	});

	return ReactElement;
}
