import Display from "@/components/display/display";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getCryptoSpreadsAndRates() {
	let data = {
		cryptoSpreads: {},
		cryptoRates: {},
	};

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
		await prisma.$connect();
		const cryptoSpreads = await prisma.cryptoSpreads.findMany();
		await prisma.$disconnect();

		for (let c = 0; c < cryptoSpreads.length; c++) {
			data.cryptoSpreads[cryptoSpreads[c].symbol] = {
				buy: cryptoSpreads[c].buy,
				sell: cryptoSpreads[c].sell,
			};
		}

		const cryptoRatesRaw = await fetch(
			`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=${cryptoIDsString}&convert_id=${AEDId}`,
			{
				cache: "no-store",
				headers: {
					"X-CMC_PRO_API_KEY": "9304a898-9414-4ffd-8f54-d9613edb66f8",
				},
			}
		);

		const cryptoRates = await cryptoRatesRaw.json();

		for (let r = 0; r < cryptoIDs.length; r++) {
			data.cryptoRates[cryptoRates.data[`${cryptoIDs[r].id}`].symbol] =
				cryptoRates.data[`${cryptoIDs[r].id}`].quote[AEDId].price;
		}
	} catch (e) {
		console.log(e);
	}

	return data;
}

export default async function DisplayPage() {
	let cryptoSpreadsAndRates = await getCryptoSpreadsAndRates();
	return <Display cryptoSpreadsAndRates={cryptoSpreadsAndRates} />;
}
