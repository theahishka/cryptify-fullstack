import Display from "@/components/display/display";

const axios = require("axios");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// export const revalidate = 0;

// export const dynamic = "force-dynamic";

async function getCryptoSpreads() {
	let data = {};

	try {
		await prisma.$connect();
		const cryptoSpreads = await prisma.cryptoSpreads.findMany();
		await prisma.$disconnect();

		for (let c = 0; c < cryptoSpreads.length; c++) {
			data[cryptoSpreads[c].symbol] = {
				buy: cryptoSpreads[c].buy,
				sell: cryptoSpreads[c].sell,
			};
		}
	} catch (e) {
		console.log(e);
	}

	return data;
}

async function getCryptoRates() {
	let data = {};

	const cryptoIDs = [
		{ id: 825, symbol: "USDT" },
		{ id: 1, symbol: "BTC" },
		{ id: 1027, symbol: "ETH" },
	];

	let cryptoIDsString = cryptoIDs
		.map((crypto) => {
			return crypto.id;
		})
		.join(",");

	const AEDId = 2813;

	try {
		const cryptoRatesRaw = await fetch(
			`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=${cryptoIDsString}&convert_id=${AEDId}`,
			{
				headers: {
					"X-CMC_PRO_API_KEY": "9304a898-9414-4ffd-8f54-d9613edb66f8",
				},
			}
		);

		const cryptoRates = await cryptoRatesRaw.json();

		for (let r = 0; r < cryptoIDs.length; r++) {
			data[cryptoRates.data[`${cryptoIDs[r].id}`].symbol] =
				cryptoRates.data[`${cryptoIDs[r].id}`].quote[AEDId].price;
		}
	} catch (e) {
		console.log(e);
	}

	return data;
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
