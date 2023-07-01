import Display from "@/components/display/display";

// const API_ORIGIN = "http://localhost:3001";
const API_ORIGIN = "https://www.thecryptify.io";

async function getCryptoSpreads() {
	const cryptoSpreadsRaw = await fetch(
		`${API_ORIGIN}/api/cryptify-info/display/spreads`,
		{
			cache: "no-store",
		}
	);

	const cryptoSpreads = await cryptoSpreadsRaw.json();

	return cryptoSpreads;
}

async function getCryptoRates() {
	const cryptoRatesRaw = await fetch(
		`${API_ORIGIN}/api/cryptify-info/display/rates`,
		{
			cache: "no-store",
		}
	);

	const cryptoRates = await cryptoRatesRaw.json();

	return cryptoRates;
}

export default async function DisplayPage() {
	const cryptoRates = await getCryptoRates();
	const cryptoSpreads = await getCryptoSpreads();

	let cryptoSpreadsAndRates = {
		cryptoRates: cryptoRates,
		cryptoSpreads: cryptoSpreads,
	};

	return <Display cryptoSpreadsAndRates={cryptoSpreadsAndRates} />;
}
