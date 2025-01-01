import React, { createElement } from "react";

export default function ShardSpan(props) {
	const classNames = `shard-span ${props.className ?? ""}`;

	const thisProps = {
		className: `${classNames}`,
		children: props.children,
	};

	return <span {...thisProps}>{props.children}</span>;
}
