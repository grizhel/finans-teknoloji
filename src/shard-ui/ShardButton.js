import React from "react";
export default function ShardButton(props) {
	const { className, children } = props;
	const classNames = `shard-button ${className}`;
	return (
		<button
			onClick={() => {
				if (props.onClick) {
					props.onClick();
				}
			}}
			className={classNames}
			style={props.style}
			onMouseDown={props.onMouseDown}
			onMouseLeave={props.onMouseLeave}>
			{children}
		</button>
	);
}
