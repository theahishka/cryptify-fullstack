import styles from "./rate.module.scss";
import Image from "next/image";

export default function Rate(props) {
	const symbol = props.symbol;
	const spread = props.cryptoSpread;
	const rate = props.cryptoRate;
	const decimal = symbol === "USDT" ? 3 : 0;
	return (
		<div className={styles["rate-wrapper"]}>
			<div className={styles["logo-symbol-wrapper"]}>
				<Image
					className={styles["logo"]}
					src={`/assets/cryptos/${symbol}.png`}
					width={32}
					height={32}
					alt={`crypto logo`}
				/>
				<h3 className={styles["symbol"]}>{symbol}</h3>
			</div>
			<div className={styles["we-buy-wrapper"]}>
				<p className={styles["title"]}>We Buy</p>
				<p className={styles["text"]}>
					{(
						Math.round(rate * spread.buy * 1000000000) / 1000000000
					).toFixed(decimal)}
				</p>
			</div>
			<div className={styles["we-sell-wrapper"]}>
				<p className={styles["title"]}>We Sell</p>
				<p className={styles["text"]}>
					{(
						Math.round(rate * spread.sell * 1000000000) / 1000000000
					).toFixed(decimal)}
				</p>
			</div>
		</div>
	);
}
