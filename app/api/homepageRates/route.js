const axios = require("axios");

export async function GET(request) {
<<<<<<< HEAD
	// Create data variable which will be mutated later
	let data = null;

=======
	let data;
	let dataAED = [];
	let dataUSD = [];
>>>>>>> temp
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
<<<<<<< HEAD
		{ id: "2813", symbol: "AED" },
		{ id: "2781", symbol: "USD" },
=======
		{ id: 2813, symbol: "AED" },
		{ id: 2781, symbol: "USD" },
>>>>>>> temp
	];

	let cryptoIDsString = cryptoIDs
		.map((crypto) => {
			return crypto.id;
		})
		.join(",");

<<<<<<< HEAD
	const { searchParams } = new URL(request.url);
	const chosenFiat = searchParams.get("chosenFiat");

	let chosenFiatID = fiatsIDs.filter((fiat) => {
		return fiat.symbol === chosenFiat;
	})[0].id;

	try {
		data = await axios.get(
			`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=${cryptoIDsString}&convert_id=${chosenFiatID}`,
=======
	try {
		const pricesAED = await axios.get(
			`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=${cryptoIDsString}&convert_id=${fiatsIDs[0].id}`,
>>>>>>> temp
			{
				headers: {
					"X-CMC_PRO_API_KEY": "9304a898-9414-4ffd-8f54-d9613edb66f8",
				},
			}
		);
<<<<<<< HEAD
=======

		for (let a = 0; a < 8; a++) {
			dataAED.push(pricesAED.data.data[cryptoIDs[a].id]);
		}

		const pricesUSD = await axios.get(
			`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=${cryptoIDsString}&convert_id=${fiatsIDs[1].id}`,
			{
				headers: {
					"X-CMC_PRO_API_KEY": "9304a898-9414-4ffd-8f54-d9613edb66f8",
				},
			}
		);

		for (let u = 0; u < 8; u++) {
			dataUSD.push(pricesUSD.data.data[cryptoIDs[u].id]);
		}

		data = { dataAED, dataUSD };
>>>>>>> temp
	} catch (e) {
		console.log(e);
	}
	console.log("Server was fired");
	let suka = { title: "suka" };
<<<<<<< HEAD
	return new Response(JSON.stringify(data.data.data));
=======
	console.log(data);
	return new Response(JSON.stringify(data));
>>>>>>> temp
}
