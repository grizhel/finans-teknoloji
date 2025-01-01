import React from "react";
import ShardA from "./shard-ui/ShardA";
import ShardP from "./shard-ui/ShardP";
import ShardDiv from "./shard-ui/ShardDiv";
import ShardList from "./shard-ui/ShardList";

export default function Contact(props) {
	const contactList = [
		{
			href: "https://linkedin.com/in/emreyilmazin",
			text: "LinkedIn",
		},
		{
			href: "https://youtube.com/@finansteknoloji",
			text: "Youtube",
		},
		{
			href: "https://instagram.com/emreyilmazin",
			text: "Instagram: @emreyilmazin",
		},
		{
			href: "https://instagram.com/finansteknolojiofficial",
			text: "Instagram: @finansteknolojiofficial",
		},
		{
			href: "https://researchgate.net/profile/Emre-Yilmaz-7",
			text: "Research Gate",
		},
		{ href: "https://github.com/orgs/grizhla", text: "github: grizhla" },
		{ href: "https://github.com/grizhel", text: "github: grizhel" },
		{ href: "https://npmjs.com/~emreyilmazin", text: "npm: emreyilmazin" },
		{ href: "https://npmjs.com/org/grizhla", text: "npm: grizhla" },
		{ href: "https://www.nuget.org/profiles/grizhla", text: "nuget:grizhla" },
	];
	return <ShardList list={contactList}></ShardList>;
}
