import Calculator from "@/components/utils/calculator/calculator";
import styles from "./heroBanner.module.scss";

async function fetchUSDTRate(crypto) {
	const origin = process.env.ORIGIN;
	const USDTRateData = await fetch(
		`${origin}/api/quickCalculator?crypto=${crypto}`,
		{ cache: "no-store" }
	);

	if (!USDTRateData) {
		throw new Error("Failed to fetch Crypto Rates");
	}

	let USDTRateJSON = await USDTRateData.json();

	return USDTRateJSON;
}

async function fetchSpreadsAndRates() {
	const origin = process.env.ORIGIN;
	let spreadsAndRates = {
		cryptoSpreads: {},
		fiatRates: {},
	};
	const data = await fetch(`${origin}/api/quickCalculator/spreadsAndRates`, {
		cache: "no-store",
	});

	if (!data) {
		throw new Error("Failed to fetch spreads and rates");
	}

	let dataJSON = await data.json();

	const cryptoSpreads = dataJSON.cryptoSpreads;

	for (let c = 0; c < cryptoSpreads.length; c++) {
		spreadsAndRates.cryptoSpreads[cryptoSpreads[c].symbol] = {
			buy: cryptoSpreads[c].buy,
			sell: cryptoSpreads[c].sell,
		};
	}

	const fiatRates = dataJSON.fiatRates;

	for (let f = 0; f < fiatRates.length; f++) {
		spreadsAndRates.fiatRates[fiatRates[f].symbol] = {
			buy: fiatRates[f].buy,
			sell: fiatRates[f].sell,
		};
	}

	return spreadsAndRates;
}

export default async function HeroBanner() {
	const USDTRate = await fetchUSDTRate("USDT");
	const spreadsAndRates = await fetchSpreadsAndRates();
	return (
		<section className={styles["hero-calculator"]}>
			<div className={styles["hero-wrapper"]}>
				<div className={styles["text-wrapper"]}>
					<h1 className={styles["text"]}>
						Experience{" "}
						<span className={styles["designer-words"]}>
							SEAMLESS
						</span>{" "}
						crypto trading in{" "}
						<span className={styles["designer-words"]}>Dubai</span>{" "}
						with our trusted Over The Counter (OTC) Broker.
					</h1>
				</div>
				<div className={styles["buttons-wrapper"]}>
					<div className={styles["message-us"]}>
						<a
							href="https://wa.me/971527536969"
							className={styles["anchor"]}
							target="_blank"
						>
							Message Us
						</a>
					</div>
					<div className={styles["get-directions"]}>
						<div className={styles["for-get-directions-border"]}>
							<a
								href="https://goo.gl/maps/bTKySe87TmYGPJyu6"
								className={styles["anchor"]}
								target="_blank"
							>
								Get Directions
							</a>
						</div>
					</div>
				</div>
				<div className={styles["background-filler-1"]}></div>
			</div>
			<Calculator USDTRate={USDTRate} spreadsAndRates={spreadsAndRates} />
		</section>
	);
}
