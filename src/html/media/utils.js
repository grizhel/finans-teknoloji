import logoSize50 from "./layout/logo-size-50.png";
import bannerSize50 from "./layout/banner-size-50.png";
import busCard from "./layout/business-card-part.png";
import busCardContact from "./layout/business-card-part-contact.png";
import logo from "./layout/logo.png";

export function addLayoutStyles() {
	const sheet = new CSSStyleSheet();
	sheet.replaceSync(`
@media screen and (max-width: 500px) {
	.shard-layout-banner {
		background: url("${logoSize50}") no-repeat;
	}
}
@media screen and (max-width: 700px) and (min-width: 500px) {
	.shard-layout-banner {
		background: url("${bannerSize50}") no-repeat;
	}
}
@media screen and (min-width: 700px) {
	.shard-layout-banner {
		background: url("${bannerSize50}") no-repeat;
	}
}

@media screen and (max-width: 500px) {
	.shard-layout-footer-business-card {
		background: url("${busCardContact}") no-repeat;
	}
}
@media screen and (max-width: 700px) and (min-width: 500px) {
	.shard-layout-footer-business-card {
		background: url("${busCard}") no-repeat;
	}
}
@media screen and (min-width: 700px) {
	.shard-layout-footer-business-card {
		background: url("${busCard}") no-repeat;
	}
}
`);

	document.adoptedStyleSheets = [sheet];
}
