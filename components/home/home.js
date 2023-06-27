import ContactUs from "../utils/contactUs/contactUs";
import HeroBanner from "./heroBanner/heroBanner";
import Rates from "./rates/rates";
import Why from "./why/why";

async function fetchCryptoRates() {
	const API_ORIGIN = process.env.API_ORIGIN;
	const cryptoRatesData = await fetch(`${API_ORIGIN}/api/homepageRates`, {
		cache: "no-store",
	});

	if (!cryptoRatesData) {
		throw new Error("Failed to fetch Crypto Rates");
	}

	let cryptoRatesJSON = await cryptoRatesData.json();

	return cryptoRatesJSON;
}

export default async function Home() {
	const cryptoRates = await fetchCryptoRates();
	return (
		<div>
			<HeroBanner />
			<Rates
				dataAED={cryptoRates.dataAED}
				dataUSD={cryptoRates.dataUSD}
			/>
			<Why />
			<ContactUs />
		</div>
	);
}
