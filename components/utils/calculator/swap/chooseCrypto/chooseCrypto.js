"use client";

import { useState } from "react";
import styles from "./chooseCrypto.module.scss";

import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";

export default function ChooseCrypto(props) {
	const cryptoList = [
		"USDT",
		"BTC",
		"ETH",
		"BNB",
		"SOL",
		"XRP",
		"TRX",
		"DOT",
	];

	const [listOpened, setListOpened] = useState(false);

	async function fetchCryptoRate(crypto) {
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

	return (
		<div className={styles["choose-crypto-wrapper-wrapper"]}>
			<div
				className={[
					styles["choose-crypto-wrapper"],
					listOpened && styles["choose-crypto-wrapper-list-opened"],
				].join(" ")}
				onClick={() => {
					listOpened ? setListOpened(false) : setListOpened(true);
				}}
			>
				<div className={styles["logo"]}>
					<Image
						src={`/assets/cryptos/${props.chosenCrypto}.png`}
						width={20}
						height={20}
						alt={`${props.chosenCrypto} logo`}
					/>
				</div>
				<div className={styles["symbol"]}>
					<p>{props.chosenCrypto}</p>
				</div>
			</div>

			<AnimatePresence>
				{listOpened && (
					<motion.div
						className={styles["crypto-list-wrapper"]}
						initial={{ opacity: 0, y: "-30%" }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
						exit={{ opacity: 0, y: "-30%" }}
					>
						{cryptoList.map((crypto) => {
							return (
								props.chosenCrypto !== crypto && (
									<div
										className={styles["option-wrapper"]}
										key={`option-${crypto}`}
										onClick={async () => {
											setListOpened(false);
											props.setIsLoading(true)
											const cryptoRate = await fetchCryptoRate(crypto);
											props.setCryptoRate(cryptoRate)
											props.setIsLoading(false)
											props.setChosenCrypto(crypto);
										}}
									>
										<div className={styles["logo"]}>
											<Image
												src={`/assets/cryptos/${crypto}.png`}
												width={20}
												height={20}
												alt={`${crypto} logo`}
											/>
										</div>
										<div className={styles["symbol"]}>
											<p>{crypto}</p>
										</div>
									</div>
								)
							);
						})}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
