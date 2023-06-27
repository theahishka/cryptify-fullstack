import styles from "./display.module.scss";
import Image from "next/image";
import Rate from "./rate/rate";

export default function Display(props) {
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
					priority={true}
				/>
			</div>
			<div className={styles["rates-wrapper"]}>
				{cryptos.map((symbol) => {
					return (
						<Rate
							symbol={symbol}
							cryptoSpread={
								props.cryptoSpreadsAndRates.cryptoSpreads[
									symbol
								]
							}
							cryptoRate={
								props.cryptoSpreadsAndRates.cryptoRates[symbol]
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
