const axios = require("axios");

export async function GET(request) {
	let cryptoRates = null;
	
	try {
		cryptoRates = await axios.get(
			"https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=1&convert_id=2813",
			{
				headers: {
					"X-CMC_PRO_API_KEY": "9304a898-9414-4ffd-8f54-d9613edb66f8",
				},
			}
		);

		console.log(cryptoRates.data.data["1"].quote);
	} catch (e) {
		console.log(e);
	}
	let suka = { title: "suka" };
	return new Response(JSON.stringify(suka));
}
