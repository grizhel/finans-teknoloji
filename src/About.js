import React from "react";
import ceng from "./html/media/personel/ceng.png";
import ece from "./html/media/personel/ece.png";
import mete from "./html/media/personel/mete.png";
import ShardSlide from "./shard-ui/ShardSlide";
import ShardSpan from "./shard-ui/ShardSpan";

export default function About(props) {
	return (
		<ShardSlide
			slides={[
				{
					title: "Bilgisayar Mühendisi",
					img: ceng,
					content: (
						<>
							<ShardSpan className="shard-span-bold">Bilgisayar Mühendisi</ShardSpan>
							<br />
							<ShardSpan>
								Emre Yılmaz, Çankaya Üniversitesi 2014 bilgisayar mühendisliği
								mezunudur.
							</ShardSpan>
							<br />
							<ShardSpan>
								Finans Teknik bünyesinde yönetim kurulu başkanıdır.
							</ShardSpan>
						</>
					),
				},
				{
					title: "Elektronik ve Haberleşme Mühendisi",
					img: ece,
					content: (
						<>
							<ShardSpan className="shard-span-bold">
								Elektronik ve Haberleşme Mühendisi
							</ShardSpan>
							<br />
							<ShardSpan>
								Emre Yılmaz, Çankaya Üniversitesi 2014 elektronik ve haberleşme
								mühendisliği mezunudur.
							</ShardSpan>
							<br />
							<ShardSpan>Finans Teknik bünyesinde yönetim kurulu üyesidir.</ShardSpan>
						</>
					),
				},
				{
					title: "Yüksek Metalurji ve Malzeme Mühendisi",
					img: mete,
					content: (
						<>
							<ShardSpan className="shard-span-bold">
								Yüksek Metalurji ve Malzeme Mühendisi
							</ShardSpan>
							<br />
							<ShardSpan>
								Emre Yılmaz yüksek lisansını ODTÜ Üniversitesi metalurji ve malzeme
								mühendisliğinde 2018 yılında tamamlamıştır.
							</ShardSpan>
							<br />
							<ShardSpan>
								Finans Teknik bünyesinde baş mühendis olarak görev yapmaktadır.
							</ShardSpan>
						</>
					),
				},
			]}></ShardSlide>
	);
}
