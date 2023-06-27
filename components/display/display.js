import styles from "./display.module.scss";
import Image from "next/image";
import Rate from "./rate/rate";

async function getCryptoSpreadsAndRates() {
	const data = await fetch("http://localhost:3000/api/display", {
		cache: "no-store",
	});
	const dataJSON = await data.json();

	return dataJSON;
}

export default async function Display() {
	let cryptoSpreadsAndRates = await getCryptoSpreadsAndRates();
	const cryptos = ["USDT", "BTC", "ETH"];

	return (
		<section className={styles["display-wrapper"]}>
			<div className={styles["logo-wrapper"]}>
				<Image
					className={styles["cryptify-logo"]}
					src="/logos/LogoFigma.svg"
					width={400}
					height={400}
					alt="Cryptify Logo"
					priority={true}
				/>
				<Image
					className={styles["cryptify-title"]}
					src="/logos/CompanyTitle.svg"
					alt="Cryptify Title"
					width={400}
					height={102}
				/>
			</div>
			<div className={styles["rates-wrapper"]}>
				{cryptos.map((symbol) => {
					return (
						<Rate
							symbol={symbol}
							cryptoSpread={
								cryptoSpreadsAndRates.cryptoSpreads[symbol]
							}
							cryptoRate={
								cryptoSpreadsAndRates.cryptoRates[symbol]
							}
							key={`${symbol}`}
						/>
					);
				})}
			</div>
			<div className={styles["background-filler-top"]}></div>
			<div className={styles["background-filler-bottom-wrapper"]}>
				<div className={styles["background-filler-bottom"]}></div>
			</div>
		</section>
	);
}
