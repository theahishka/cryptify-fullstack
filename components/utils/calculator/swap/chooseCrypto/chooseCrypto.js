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
		let cryptoRate;

		const cryptoIDs = [
			{ id: 1, symbol: "BTC" },
			{ id: 1027, symbol: "ETH" },
			{ id: 1839, symbol: "BNB" },
			{ id: 52, symbol: "XRP" },
			{ id: 1958, symbol: "TRX" },
			{ id: 6636, symbol: "DOT" },
			{ id: 5426, symbol: "SOL" },
			{ id: 825, symbol: "USDT" },
		];

		const cryptoId = cryptoIDs.filter((item) => {
			return item.symbol === crypto;
		})[0].id;

		const AEDId = 2813;

		try {
			const cryptoPriceRaw = await fetch(
				`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=${cryptoId}&convert_id=${AEDId}`,
				{
					headers: {
						"X-CMC_PRO_API_KEY":
							"9304a898-9414-4ffd-8f54-d9613edb66f8",
					},
				}
			);
			const cryptoPrice = await cryptoPriceRaw.json();
			cryptoRate = cryptoPrice.data[cryptoId].quote[AEDId].price;
		} catch (e) {
			console.log(e);
		}

		return cryptoRate;
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
											props.setIsLoading(true);
											const cryptoRate =
												await fetchCryptoRate(crypto);
											props.setCryptoRate(cryptoRate);
											props.setIsLoading(false);
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
