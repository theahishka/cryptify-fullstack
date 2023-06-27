"use client";

import styles from "./rate.module.scss";
import Image from "next/image";

export default function Rate(props) {
	let fiatID = props.chosenFiat === "AED" ? 2813 : 2781;
	return (
		<div className={styles["rate-display"]}>
			<div className={styles["logo-graph-wrapper"]}>
				<div className={styles["logo-wrapper"]}>
					<Image
						src={`/assets/cryptos/${props.crypto.symbol}.png`}
						className={styles["logo-image"]}
						width={32}
						height={32}
						alt={props.crypto.symbol}
					/>
					<p className={styles["logo-title"]}>
						{props.crypto.symbol}
					</p>
				</div>
				<div className={styles["graph-wrapper"]}>
					<Image
						src="/assets/graphs/graphUp.svg"
						className={styles["graph"]}
						width={58}
						height={22}
						alt="graph"
					/>
				</div>
			</div>
			<div className={styles["crypto-amount-fiat-amount-wrapper"]}>
				<div className={styles["crypto-amount-crypto-symbol-wrapper"]}>
					<p className={styles["crypto-amount"]}>1</p>
					<p className={styles["crypto-symbol"]}>
						{props.crypto.symbol}
					</p>
				</div>
				<div className={styles["fiat-amount-fiat-symbol-wrapper"]}>
					<p className={styles["fiat-symbol"]}>{props.chosenFiat}</p>
					<p className={styles["fiat-amount"]}>
						{(
							Math.round(props.crypto.quote[fiatID].price * 100) /
							100
						).toFixed(2)}
					</p>
				</div>
			</div>
		</div>
	);
}
