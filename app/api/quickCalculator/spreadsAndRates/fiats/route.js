const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function POST(request) {
	let data;
	const body = await request.json();
	const symbol = body.symbol;
	const buy = body.buy;
	const sell = body.sell;

	try {
		await prisma.$connect();
		const fiatRates = await prisma.fiatRates.create({
			data: { symbol: symbol, buy: buy, sell: sell },
		});
		data = fiatRates;
		await prisma.$disconnect();
	} catch (e) {
		console.log(e);
	}

	return new Response(JSON.stringify(data));
}

export async function PUT(request) {
	const { searchParams } = new URL(request.url);
	const symbol = searchParams.get("symbol");
	let data;
	const body = await request.json();
	const buy = body.buy;
	const sell = body.sell;

	try {
		await prisma.$connect();
		if (buy && !sell) {
			const updatedFiatRate = await prisma.fiatRates.update({
				where: {
					symbol: symbol,
				},
				data: {
					buy: buy,
				},
			});
			data = updatedFiatRate;
		}
		if (!buy && sell) {
			const updatedFiatRate = await prisma.fiatRates.update({
				where: {
					symbol: symbol,
				},
				data: {
					sell: sell,
				},
			});
			data = updatedFiatRate;
		}
		if (buy && sell) {
			const updatedFiatRate = await prisma.fiatRates.update({
				where: {
					symbol: symbol,
				},
				data: {
					buy: buy,
					sell: sell,
				},
			});
			data = updatedFiatRate;
		}
		await prisma.$disconnect();
	} catch (e) {
		console.log(e);
	}

	return new Response(JSON.stringify(data));
}

export async function DELETE(request) {
	const { searchParams } = new URL(request.url);
	const symbol = searchParams.get("symbol");
	let data;

	try {
		await prisma.$connect();
		const deletedFiatRate = await prisma.fiatRates.delete({
			where: {
				symbol: symbol,
			},
		});
		data = deletedFiatRate;
		await prisma.$disconnect();
	} catch (e) {
		console.log(e);
	}

	return new Response(JSON.stringify(data));
}
