const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function POST(request) {
	let data;
	const body = await request.json();
	const symbol = body.symbol;
	const type = body.type;
	const buy = body.buy;
	const sell = body.sell;

	try {
		const newCryptoSpread = await prisma.cryptoSpreads.create({
			data: {
				symbol: symbol,
				type: type,
				buy: buy,
				sell: sell,
			},
		});
		data = newCryptoSpread;
	} catch (e) {
		console.log(e);
	}

	return new Response(JSON.stringify(data));
}

export async function PUT(request) {
	let data;
	const { searchParams } = new URL(request.url);
	const symbol = searchParams.get("symbol");
	const body = await request.json();
	const buy = body.buy;
	const sell = body.sell;

	try {
		if (buy && !sell) {
			const updatedCryptoSpread = await prisma.cryptoSpreads.update({
				where: {
					symbol: symbol,
				},
				data: {
					buy: buy,
				},
			});
			data = updatedCryptoSpread;
		}
		if (!buy && sell) {
			const updatedCryptoSpread = await prisma.cryptoSpreads.update({
				where: {
					symbol: symbol,
				},
				data: {
					sell: sell,
				},
			});
			data = updatedCryptoSpread;
		}
		if (buy && sell) {
			const updatedCryptoSpread = await prisma.cryptoSpreads.update({
				where: {
					symbol: symbol,
				},
				data: {
					buy: buy,
					sell: sell,
				},
			});
			data = updatedCryptoSpread;
		}
	} catch (e) {
		console.log(e);
	}

	return new Response(JSON.stringify(data));
}
