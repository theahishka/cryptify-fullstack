const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET(request) {
	let data = {
		cryptoSpreads: "",
		fiatRates: "",
	};

	try {
		const cryptoSpreads = await prisma.cryptoSpreads.findMany();
		const fiatRates = await prisma.fiatRates.findMany();
		data.cryptoSpreads = cryptoSpreads;
		data.fiatRates = fiatRates;
	} catch (e) {
		console.log(e);
	}

	return new Response(JSON.stringify(data));
}
