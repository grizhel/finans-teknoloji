import React from "react";
import ceng from "./html/media/personel/ceng.png";
import ece from "./html/media/personel/ece.png";
import mete from "./html/media/personel/mete.png";
import ShardSlide from "./shard-ui/ShardSlide";
import ShardSpan from "./shard-ui/ShardSpan";
import ShardP from "./shard-ui/ShardP";
import ShardH from "./shard-ui/ShardH";
import ShardA from "./shard-ui/ShardA";

export default function About(props) {
	return (
		<ShardSlide
			slides={[
				{
					title: "Bilgisayar Mühendisi",
					img: ceng,
					content: (
						<>
							<ShardP className="shard-span-bold">
								Uzman Bilgisayar Mühendisi (Özgeçmiş)
							</ShardP>
							<ShardP>
								Emre Yılmaz, Çankaya Üniversitesi 2014 bilgisayar mühendisliği
								mezunudur.
								<br />
								Finans Teknik yönetim kurulu başkanıdır.
							</ShardP>
							<ShardA className="shard-span-bold" href="/files/cv/emre-yilmaz-cv.pdf">
								CV
							</ShardA>
						</>
					),
					contentBelow: (
						<>
							<ShardP className="shard-span-bold shard-span-big">Yazıları</ShardP>
							<ShardP className="shard-span-bold">
								Mühendislik Hakkında (2025-01-01 18-11-37)
							</ShardP>
							<ShardP>
								İngilizce kısaltması ile CI/CD yani Sürekli Entegrasyon ve Sürekli
								Teslimat artık herkesin dilindedir. Burada şöyle bir nüktedan yorumumuz
								var. Sürekli entegrasyon yaptıktan sonra teslim etmemeye CI mı denir
								peki.
								<br />
								Agile yöntem de yine aynı şekilde herkes tarafından konuşuluyor. Agile
								çeviklik olarak Türkçe'ye çevriliyor. Sürekli olarak değişen bir sisteme
								hemen reaksiyon gösterip, ona göre yazılımın şekillendirilmesi
								diyebiliriz.
								<br />
								Peki temel bilimler, teoriler sürekli değişir mi? Bir istatistik kuramı
								yarın farklı şekilde mi formülize edilecektir. Gaus numerik yöntemleri
								veya Planck sabiti değişir mi? Burada da nüktedan bir yorum yapabilirim.
								Zamanında elektromanyetik ile ilgilenen bir profesör hocam Planck
								sabitinin eksik olduğuna dair hiç kimsenin bilmediği bir dergide makale
								yazmıştı. Tabi ki bir kaç güne bu makale geri çekildi.
								<br />
								Agile yöntem ve CI/CD operasyonları her bir projenin gereksinimi
								değildir. Hatta tam tersine, bazı yazılımlar geliştirilirken WaterFall
								model yani şelale yöntemi gereklidir. Ya da birden çok waterfall aşaması
								geliştirilip bazen paralel olarak bazen de ardışık olarak evolutionary
								model yani evrimsel bir model de proje için uygun olabilir.
								<br />
								Yine nüktedan ancak biraz da cesur bir yorumla, "ünlü yöntemlerden
								ziyade proje bazlı çalışma yapıp kullanılacak yöntemleri belirlemeye" de
								mühendislik diyoruz ve ekibimiz bütün mühendislik dallarıyla ayrı bir
								vizyona sahip olmasının yanı sıra hem sisteminizi analiz etmek hem de
								buna uygun projeler geliştirmek için vardır. Ekibimiz sanal dünyada
								yaşamayıp, gerçek dünyada yaşayarak gerçek dünyayı sanal dünyaya
								taşımaktadır.
							</ShardP>
						</>
					),
				},
				{
					title: "Elektronik ve Haberleşme Mühendisi",
					img: ece,
					content: (
						<>
							<ShardP className="shard-span-bold">
								Elektronik ve Haberleşme Mühendisi (Özgeçmiş)
							</ShardP>
							<ShardP>
								Emre Yılmaz, Çankaya Üniversitesi 2014 elektronik ve haberleşme
								mühendisliği mezunudur.
								<br />
								Finans Teknik yönetim kurulu üyesidir.
							</ShardP>
							<ShardA className="shard-span-bold" href="/files/cv/emre-yilmaz-cv.pdf">
								CV
							</ShardA>
						</>
					),
				},
				{
					title: "Yüksek Metalurji ve Malzeme Mühendisi",
					img: mete,
					content: (
						<>
							<ShardP className="shard-span-bold">
								Yüksek Metalurji ve Malzeme Mühendisi (Özgeçmiş)
							</ShardP>
							<ShardP>
								Emre Yılmaz yüksek lisansını ODTÜ metalurji ve malzeme mühendisliğinde
								2018 yılında tamamlamıştır.
								<br />
								Finans Teknik bünyesinde baş mühendis olarak görev yapmaktadır.
							</ShardP>
							<ShardA className="shard-span-bold" href="/files/cv/emre-yilmaz-cv.pdf">
								CV
							</ShardA>
						</>
					),
				},
			]}></ShardSlide>
	);
}
