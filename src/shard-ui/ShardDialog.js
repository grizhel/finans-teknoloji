import React, { useEffect, useState } from "react";
export default function ShardDialog(props) {
	const initClasses = `shard-dialog ${props.className ?? ""}`;
	const [classNames, setClassNames] = useState(initClasses);

	useEffect(() => {
		if (props.initiallyOpen) {
			setClassNames(`${initClasses} shard-dialog-show`);
		} else if (classNames.includes("shard-dialog-show")) {
			setClassNames(`${initClasses}`);
		} else {
			setClassNames(`${initClasses} shard-dialog-show`);
		}
	}, []);
	return (
		<div className={classNames}>
			<div className="shard-dialog-inner">{props.children}</div>
		</div>
	);
}
