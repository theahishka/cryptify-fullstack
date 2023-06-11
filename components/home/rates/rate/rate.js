import styles from "./rate.module.scss";
import Image from "next/image";

export default function Rate({ crypto, fiat }) {
	return (
		<div className={styles["rate-display"]}>
			<div className={styles["logo-graph-wrapper"]}>
				<div className={styles["logo-wrapper"]}>
					<Image
						src={`/assets/cryptos/${crypto["symbol"]}.png`}
						width={32}
						height={32}
						alt={crypto["symbol"]}
					/>
					<p className={styles["logo-title"]}>{crypto["symbol"]}</p>
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
						{crypto["symbol"]}
					</p>
				</div>
				<div className={styles["fiat-amount-fiat-symbol-wrapper"]}>
					<p className={styles["fiat-symbol"]}>{fiat}</p>
					<p className={styles["fiat-amount"]}>
						{/* {crypto["quote"][fiat]["price"]} */}
					</p>
				</div>
			</div>
		</div>
	);
}
