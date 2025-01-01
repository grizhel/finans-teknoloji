import React, { createElement } from "react";

export default function ShardDiv(props) {
	const classNames = `shard-div ${props.className ?? ""}`;

	const thisProps = {
		className: classNames,
		style: props.style,
	};

	return <div {...thisProps}>{props.children}</div>;
}
