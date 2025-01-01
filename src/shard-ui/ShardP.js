import React, { createElement } from "react";

export default function ShardP(props) {
	const classNames = `shard-p ${props.className ?? ""}`;

	const thisProps = {
		className: `${classNames}`,
		children: props.children,
	};

	return <p {...thisProps}>{props.children}</p>;
}
