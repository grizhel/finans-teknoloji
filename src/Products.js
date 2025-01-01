import React from "react";
import ShardP from "./shard-ui/ShardP";
import ShardList from "./shard-ui/ShardList";

export default function Products(props) {
	const projectList = [
		{
			href: "https://linkedin.com/in/emreyilmazin",
			text: "Gistron: Bir CBS projesi",
		},
		{
			href: "https://youtube.com/@finansteknoloji",
			text: "Pigeon: Genişletilmiş insan kaynakları rehber ve iletişim uygulaması",
		},
		{
			href: "https://instagram.com/emreyilmazin",
			text:
				"LaTexting: Sözlük Uygulamaları ve LaTex ile doküman üreten ve versiyon kontrolü yapan dokümantasyon uygulamaları",
		},
	];

	return <ShardList list={projectList}></ShardList>;
}
