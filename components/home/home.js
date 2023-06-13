import ContactUsDetails from "../utils/contactUs/contactUsDetails";
import ContactUsForm from "../utils/contactUs/contactUsForm";
import ContactUsPC from "../utils/contactUs/contactUsPC";
import HeroBanner from "./heroBanner/heroBanner";
import Rates from "./rates/rates";
import Why from "./why/why";

async function fetchCryptoRates() {
	const cryptoRatesData = await fetch(
		`http://localhost:3000/api/homepageRates`,
		{ cache: "no-store" }
	);

	if (!cryptoRatesData) {
		throw new Error("Failed to fetch Crypto Rates");
	}

	let cryptoRatesJSON = await cryptoRatesData.json();

	return cryptoRatesJSON;
}

export default async function HomePage() {
	// const cryptoRates = await fetchCryptoRates();
	return (
		<div>
			<HeroBanner />
			{/* <Rates
				dataAED={cryptoRates.dataAED}
				dataUSD={cryptoRates.dataUSD}
			/> */}
			<Why />
			<ContactUsForm />
			<ContactUsDetails />
			<ContactUsPC />
		</div>
	);
}
