import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ShardContext } from "./shard-ui";
import { addLayoutStyles } from "./html/media/utils";

addLayoutStyles();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<ShardContext>
		<App />
	</ShardContext>
);
