import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import ShardButton from "../ShardButton";

export default function ShardSidebarNavlinkItem(props) {
	const initClasses = `shard-sidebar-navlink-item ${props.className ?? ""}`;
	const location = useLocation();
	const [classNames, setClassNames] = useState(initClasses);
	useEffect(() => {
		if (location.pathname.toLowerCase().includes(`${props.href.toLowerCase()}`)) {
			setClassNames(initClasses + " shard-sidebar-navlink-item-selected");
		} else {
			setClassNames(initClasses);
		}
	}, [location]);

	const navi = useNavigate();

	return (
		<ShardButton
			onClick={() => {
				navi(props.href);
			}}
			className={classNames}>
			{props.text}
		</ShardButton>
	);
}
