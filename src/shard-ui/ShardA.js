import React, { createElement, useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function ShardA(props) {
	const classNames = `shard-a ${props.className ?? ""}`;
	const ReactElement = createElement("a", {
		href: props.href,
		style: props.style,
		className: `${classNames}`,
		children: props.children,
		onClick: props.onClick,
	});
	return ReactElement;
}
