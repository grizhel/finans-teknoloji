import React from "react";
export default function ShardButton(props) {
	const { href, className, children } = props;
	const classNames = `shard-button ${className}`;
	return (
		<button
			onClick={() => {
				if (props.onClick) {
					props.onClick();
				}
			}}
			className={classNames}>
			{children}
		</button>
	);
}
