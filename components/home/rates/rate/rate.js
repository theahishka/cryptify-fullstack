import styles from "./rate.module.scss";
import Image from "next/image";

export default function Rate() {
	return (
		<div className={styles["rate-display"]}>
			<div className={styles["logo-graph-wrapper"]}>
				<div className={styles["logo-wrapper"]}>
					<Image
						src={`/assets/cryptos/USDT.png`}
						width={32}
						height={32}
						alt={"USDT"}
					/>
					<p className={styles["logo-title"]}>USDT</p>
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
						{"USDT"}
					</p>
				</div>
				<div className={styles["fiat-amount-fiat-symbol-wrapper"]}>
					<p className={styles["fiat-symbol"]}>AED</p>
					<p className={styles["fiat-amount"]}>
						10000
					</p>
				</div>
			</div>
		</div>
	);
}
