import Calculator from "@/components/utils/calculator/calculator";
import styles from "./heroBanner.module.scss";

async function fetchUSDTRate(crypto) {
	const USDTRateData = await fetch(
		`http://localhost:3000/api/quickCalculator?crypto=${crypto}`,
		{ cache: "no-store" }
	);

	if (!USDTRateData) {
		throw new Error("Failed to fetch Crypto Rates");
	}

	let USDTRateJSON = await USDTRateData.json();

	return USDTRateJSON;
}

export default async function HeroBanner() {
	const USDTRate = await fetchUSDTRate("USDT");
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
			<Calculator USDTRate={USDTRate}/>
		</section>
	);
}
