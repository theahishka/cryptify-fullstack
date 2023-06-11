const axios = require("axios");

export async function GET(request) {
	// Create data variable which will be mutated later
	let data = null;

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
		{ id: "2813", symbol: "AED" },
		{ id: "2781", symbol: "USD" },
	];

	let cryptoIDsString = cryptoIDs
		.map((crypto) => {
			return crypto.id;
		})
		.join(",");

	const { searchParams } = new URL(request.url);
	const chosenFiat = searchParams.get("chosenFiat");

	let chosenFiatID = fiatsIDs.filter((fiat) => {
		return fiat.symbol === chosenFiat;
	})[0].id;

	try {
		data = await axios.get(
			`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=${cryptoIDsString}&convert_id=${chosenFiatID}`,
			{
				headers: {
					"X-CMC_PRO_API_KEY": "9304a898-9414-4ffd-8f54-d9613edb66f8",
				},
			}
		);
	} catch (e) {
		console.log(e);
	}
	let suka = { title: "suka" };
	return new Response(JSON.stringify(data.data.data));
}
