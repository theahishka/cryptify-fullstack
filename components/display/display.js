import styles from "./display.module.scss";
import Image from "next/image";

export default function DisplayPage() {
	return (
		<section className={styles["display-wrapper"]}>
			<div className={styles["logo-wrapper"]}>
				<Image
					className={styles["cryptify-logo"]}
					src="/logos/LogoFigma.svg"
					width={400}
					height={400}
					alt="Cryptify Logo"
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
				<div className={styles["rate-wrapper"]}>
					<div className={styles["logo-symbol-wrapper"]}>
						<Image
							className={styles["logo"]}
							src={`/assets/cryptos/USDT.png`}
							width={32}
							height={32}
							alt={`crypto logo`}
						/>
						<h3 className={styles["symbol"]}>USDT</h3>
					</div>
					<div className={styles["we-buy-wrapper"]}>
						<p className={styles["title"]}>We Buy</p>
						<p className={styles["text"]}>3.65</p>
					</div>
					<div className={styles["we-sell-wrapper"]}>
						<p className={styles["title"]}>We Sell</p>
						<p className={styles["text"]}>3.68</p>
					</div>
				</div>
				<div className={styles["rate-wrapper"]}>
					<div className={styles["logo-symbol-wrapper"]}>
						<Image
							className={styles["logo"]}
							src={`/assets/cryptos/USDT.png`}
							width={32}
							height={32}
							alt={`crypto logo`}
						/>
						<h3 className={styles["symbol"]}>USDT</h3>
					</div>
					<div className={styles["we-buy-wrapper"]}>
						<p className={styles["title"]}>We Buy</p>
						<p className={styles["text"]}>3.65</p>
					</div>
					<div className={styles["we-sell-wrapper"]}>
						<p className={styles["title"]}>We Sell</p>
						<p className={styles["text"]}>3.68</p>
					</div>
				</div>
				<div className={styles["rate-wrapper"]}>
					<div className={styles["logo-symbol-wrapper"]}>
						<Image
							className={styles["logo"]}
							src={`/assets/cryptos/USDT.png`}
							width={32}
							height={32}
							alt={`crypto logo`}
						/>
						<h3 className={styles["symbol"]}>USDT</h3>
					</div>
					<div className={styles["we-buy-wrapper"]}>
						<p className={styles["title"]}>We Buy</p>
						<p className={styles["text"]}>3.65</p>
					</div>
					<div className={styles["we-sell-wrapper"]}>
						<p className={styles["title"]}>We Sell</p>
						<p className={styles["text"]}>3.68</p>
					</div>
				</div>
			</div>
		</section>
	);
}
