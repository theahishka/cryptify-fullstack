import Display from "@/components/display/display";

async function getCryptoSpreadsAndRates() {
	const API_ORIGIN = process.env.API_ORIGIN;
	const data = await fetch(`${API_ORIGIN}/api/display`, {
		cache: "no-store",
	});
	const dataJSON = await data.json();

	return dataJSON;
}

export default async function DisplayPage() {
	// let cryptoSpreadsAndRates = await getCryptoSpreadsAndRates();
	// return <Display cryptoSpreadsAndRates={cryptoSpreadsAndRates} />;
	return;
}
