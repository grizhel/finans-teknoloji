import React, { createElement, useEffect, useState } from "react";

export default function ShardA(props) {
	const classNames = `shard-a ${props.className ?? ""}`;
	const thisProps = {
		href: props.href,
		style: props.style,
		className: `${classNames}`,
		onClick: props.onClick,
		target: props.target ?? "_blank",
	};
	return <a {...thisProps}>{props.children}</a>;
}
