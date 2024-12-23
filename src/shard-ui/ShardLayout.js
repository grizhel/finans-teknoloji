import React, { useEffect, useState } from "react";
import ShardSidebarContainer from "./ShardLayout/ShardSidebarContainer";
import ShardSidebarNavlinkItem from "./ShardLayout/ShardSidebarNavlinkItem";
import ShardDiv from "./ShardDiv";

export default function ShardLayout(props) {
	return (
		<ShardDiv className="shard-layout-template">
			<ShardDiv className="shard-border-header shard-layout-header shard-layout-banner">
				&nbsp;
			</ShardDiv>
			{/* <ShardDiv className="shard-nav shard-border-left shard-layout-floating-div shard-layout-floating-div-left"> */}
			<ShardDiv className="shard-nav shard-nav-top shard-border">
				{/* <ShardSidebarContainer className="shard-sidebar-left-container"> */}
				<ShardSidebarContainer className="shard-sidebar-top-container">
					{props.menuLinks.map((q) => (
						<ShardSidebarNavlinkItem
							key={q.text}
							text={q.text}
							href={q.link}
							description={q.description}
						/>
					))}
				</ShardSidebarContainer>
			</ShardDiv>
			{/* <ShardDiv className="shard-border-right shard-layout-floating-div shard-layout-floating-div-right"> */}
			<ShardDiv className="shard-layout-floating-div">
				<ShardDiv className="shard-layout-content">{props.children}</ShardDiv>
			</ShardDiv>
			<ShardDiv className="shard-border-footer shard-layout-footer-business-card shard-layout-footer">
				&nbsp;
			</ShardDiv>
		</ShardDiv>
	);
}
