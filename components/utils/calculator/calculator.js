import Image from "next/image";
import styles from "./calculator.module.scss"

export default function Calculator() {
	return (
		<div className={styles["calculator-wrapper"]}>
			<div className={styles["for-calculator-border"]}>
				<div className={styles["title-wrapper"]}>
					<h3 className={styles["title"]}>Cryptify Calculator</h3>
				</div>
				<p className={styles["description"]}>
					Easily calculate the rate
				</p>
				<div className={styles["you-give-wrapper"]}>
					<p className={styles["text"]}>You Give</p>
					<div className={styles["you-give-input-wrapper"]}>
						<input
							id="you-give-input"
							className={styles["you-give-input"]}
							placeholder="Enter Amount"
						></input>
						<div className={styles["logo-symbol-wrapper"]}>
							<div className={styles["logo"]}>
								<Image
									src="/assets/flags/UAE.svg"
									width={20}
									height={20}
									alt="country flag"
								/>
							</div>
							<div className={styles["symbol"]}>
								<p>AED</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles["you-get-wrapper"]}>
					<p className={styles["text"]}>You Get</p>
					<div className={styles["you-get-input-wrapper"]}>
						<input
							id="you-get-input"
							className={styles["you-get-input"]}
							placeholder="Enter Amount"
						></input>
						<div className={styles["logo-symbol-wrapper"]}>
							<div className={styles["logo"]}>
								<Image
									src="/assets/cryptos/USDT.svg"
									width={20}
									height={20}
									alt="crypto logo"
								/>
							</div>
							<div className={styles["symbol"]}>
								<p>USDT</p>
							</div>
						</div>
					</div>
				</div>
				<p className={styles["exact-rate"]}>1 USDT = 3.65 AED</p>
				<div className={styles["arrange-wrapper"]}>
					<div className={styles["arrange"]}>
						<p className={styles["text"]}>Arrange</p>
					</div>
				</div>
			</div>
			<div className={styles["corner-conic-1"]}></div>
			<div className={styles["background-filler-2"]}></div>
		</div>
	);
}
