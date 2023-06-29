import Home from "@/components/home/home";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function fetchCryptoRates() {
	let data;
	let dataAED = [];
	let dataUSD = [];
	let cryptoIDs = [
		{ id: 1, symbol: "BTC" },
		{ id: 1027, symbol: "ETH" },
		{ id: 1839, symbol: "BNB" },
		{ id: 52, symbol: "XRP" },
		{ id: 1958, symbol: "TRX" },
		{ id: 6636, symbol: "DOT" },
		{ id: 5426, symbol: "SOL" },
		{ id: 825, symbol: "USDT" },
	];

	let fiatsIDs = [
		{ id: 2813, symbol: "AED" },
		{ id: 2781, symbol: "USD" },
	];

	let cryptoIDsString = cryptoIDs
		.map((crypto) => {
			return crypto.id;
		})
		.join(",");

	try {
		const pricesAEDRaw = await fetch(
			`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=${cryptoIDsString}&convert_id=${fiatsIDs[0].id}`,
			{
				headers: {
					"X-CMC_PRO_API_KEY": "9304a898-9414-4ffd-8f54-d9613edb66f8",
				},
			}
		);

		const pricesAED = await pricesAEDRaw.json();

		for (let a = 0; a < 8; a++) {
			dataAED.push(pricesAED.data[cryptoIDs[a].id]);
		}

		const pricesUSDRaw = await fetch(
			`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=${cryptoIDsString}&convert_id=${fiatsIDs[1].id}`,
			{
				headers: {
					"X-CMC_PRO_API_KEY": "9304a898-9414-4ffd-8f54-d9613edb66f8",
				},
			}
		);

		const pricesUSD = await pricesUSDRaw.json();

		for (let u = 0; u < 8; u++) {
			dataUSD.push(pricesUSD.data[cryptoIDs[u].id]);
		}

		data = { dataAED, dataUSD };
	} catch (e) {
		console.log(e);
	}

	return data;
}

async function fetchUSDTRate(crypto) {
	let cryptoRate;

	const cryptoIDs = [
		{ id: 1, symbol: "BTC" },
		{ id: 1027, symbol: "ETH" },
		{ id: 1839, symbol: "BNB" },
		{ id: 52, symbol: "XRP" },
		{ id: 1958, symbol: "TRX" },
		{ id: 6636, symbol: "DOT" },
		{ id: 5426, symbol: "SOL" },
		{ id: 825, symbol: "USDT" },
	];

	const cryptoId = cryptoIDs.filter((item) => {
		return item.symbol === crypto;
	})[0].id;

	const AEDId = 2813;

	try {
		const cryptoPriceRaw = await fetch(
			`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=${cryptoId}&convert_id=${AEDId}`,
			{
				headers: {
					"X-CMC_PRO_API_KEY": "9304a898-9414-4ffd-8f54-d9613edb66f8",
				},
			}
		);
		const cryptoPrice = await cryptoPriceRaw.json();
		cryptoRate = cryptoPrice.data[cryptoId].quote[AEDId].price;
	} catch (e) {
		console.log(e);
	}

	return cryptoRate;
}

async function fetchSpreadsAndRates() {
	let data = {
		cryptoSpreads: {},
		fiatRates: {},
	};

	try {
		await prisma.$connect();
		const cryptoSpreads = await prisma.cryptoSpreads.findMany();
		const fiatRates = await prisma.fiatRates.findMany();
		data.cryptoSpreads = cryptoSpreads;
		data.fiatRates = fiatRates;
		await prisma.$disconnect();
	} catch (e) {
		console.log(e);
	}

	let spreadsAndRates = {
		cryptoSpreads: {},
		fiatRates: {},
	};

	if (!data) {
		throw new Error("Failed to fetch spreads and rates");
	}

	let dataJSON = data;

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
	const cryptoRates = await fetchCryptoRates();
	const USDTRate = await fetchUSDTRate("USDT");
	const spreadsAndRates = await fetchSpreadsAndRates();

	return (
		<main>
			<Home
				cryptoRates={cryptoRates}
				USDTRate={USDTRate}
				spreadsAndRates={spreadsAndRates}
			/>
		</main>
	);
}
