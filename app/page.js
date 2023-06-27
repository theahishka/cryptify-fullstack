import Home from "@/components/home/home";

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

async function fetchUSDTRate(crypto) {
	const API_ORIGIN = process.env.API_ORIGIN;
	const USDTRateData = await fetch(
		`${API_ORIGIN}/api/quickCalculator?crypto=${crypto}`,
		{ cache: "no-store" }
	);

	if (!USDTRateData) {
		throw new Error("Failed to fetch Crypto Rates");
	}

	let USDTRateJSON = await USDTRateData.json();

	return USDTRateJSON;
}

async function fetchSpreadsAndRates() {
	const API_ORIGIN = process.env.API_ORIGIN;
	let spreadsAndRates = {
		cryptoSpreads: {},
		fiatRates: {},
	};
	const data = await fetch(
		`${API_ORIGIN}/api/quickCalculator/spreadsAndRates`,
		{
			cache: "no-store",
		}
	);

	if (!data) {
		throw new Error("Failed to fetch spreads and rates");
	}

	let dataJSON = await data.json();

	const cryptoSpreads = dataJSON.cryptoSpreads;

	for (let c = 0; c < cryptoSpreads.length; c++) {
		spreadsAndRates.cryptoSpreads[cryptoSpreads[c].symbol] = {
			buy: cryptoSpreads[c].buy,
			sell: cryptoSpreads[c].sell,
		};
	}

	const fiatRates = dataJSON.fiatRates;

	for (let f = 0; f < fiatRates.length; f++) {
		spreadsAndRates.fiatRates[fiatRates[f].symbol] = {
			buy: fiatRates[f].buy,
			sell: fiatRates[f].sell,
		};
	}

	return spreadsAndRates;
}

export default async function HomePage() {
	// const cryptoRates = await fetchCryptoRates();
	// const USDTRate = await fetchUSDTRate("USDT");
	// const spreadsAndRates = await fetchSpreadsAndRates();

	return (
		<main>
			<Home
				// cryptoRates={cryptoRates}
				// USDTRate={USDTRate}
				// spreadsAndRates={spreadsAndRates}
			/>
		</main>
	);
}
