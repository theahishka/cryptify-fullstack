const axios = require("axios");

export async function GET(request) {
	const { searchParams } = new URL(request.url);
	const crypto = searchParams.get("crypto");

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
		const cryptoPrice = await axios.get(
			`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=${cryptoId}&convert_id=${AEDId}`,
			{
				headers: {
					"X-CMC_PRO_API_KEY": "9304a898-9414-4ffd-8f54-d9613edb66f8",
				},
			}
		);
		cryptoRate = cryptoPrice.data.data[cryptoId].quote[AEDId].price;
	} catch (e) {
		console.log(e);
	}
	console.log("Server was fired");
	let suka = { title: "suka" };

	return new Response(JSON.stringify(cryptoRate));
}
