"use client";

import { useEffect, useState } from "react";
import Reciprocate from "./reciprocate/reciprocate";
import styles from "./swap.module.scss";
import ChooseFiat from "./chooseFiat/chooseFiat";
import ChooseCrypto from "./chooseCrypto/chooseCrypto";
import IsLoading from "../../isLoading/isLoading";

export default function Swap(props) {
	const [isLoading, setIsLoading] = useState(false);
	const [sellCrypto, setSellCrypto] = useState(true);
	const [youGiveAmount, setYouGiveAmount] = useState("");
	const [youGetAmount, setYouGetAmount] = useState("");
	const [chosenCrypto, setChosenCrypto] = useState("USDT");
	const [chosenFiat, setChosenFiat] = useState("AED");

	// Will fetch this from database so that there will be spread control from database.
	const [cryptoSpread, setCryptoSpread] = useState({
		USDT: {
			buy: 0.995,
			sell: 1.005,
		},
		ETH: {
			buy: 0.99,
			sell: 1.01,
		},
		rest: {
			buy: 0.985,
			sell: 1.015,
		},
	});
	const cryptoSpreadChooser = cryptoSpread[chosenCrypto]
		? chosenCrypto
		: "rest";

	const [fiatSpread, setFiatSpread] = useState({
		AED: {
			buy: 1,
			sell: 1,
		},
		USD: {
			buy: 3.65,
			sell: 3.68,
		},
	});

	// This will be fetched from coinmarketcap
	const [cryptoRate, setCryptoRate] = useState(null);
	const USDTRate = props.USDTRate;
	!cryptoRate && setCryptoRate(USDTRate);

	const cryptoSellPrice =
		(Number(cryptoRate) * cryptoSpread[cryptoSpreadChooser].sell) /
		fiatSpread[chosenFiat].buy;

	const cryptoBuyPrice =
		(Number(cryptoRate) * cryptoSpread[cryptoSpreadChooser].buy) /
		fiatSpread[chosenFiat].sell;

	useEffect(() => {
		if (sellCrypto) {
			setYouGetAmount(
				(
					Math.round(
						(Number(youGiveAmount) / cryptoSellPrice) * 1000000000
					) / 1000000000
				).toFixed(6)
			);
		} else {
			setYouGetAmount(
				(
					Math.round(Number(youGiveAmount) * cryptoBuyPrice * 1000000000) /
					1000000000
				).toFixed(6)
			);
		}

		if (youGiveAmount === "") {
			setYouGetAmount("");
		}
	}, [chosenCrypto, chosenFiat]);

	function changeYouGive(e, sellCrypto, cryptoBuyPrice, cryptoSellPrice) {
		const regex = /^(([0-9.]?)*)+$/;
		const youGiveValue = e.target.value;

		if (youGiveValue.match(regex)) {
			setYouGiveAmount(youGiveValue);

			if (sellCrypto) {
				setYouGetAmount(
					(
						Math.round(
							(Number(youGiveValue) / cryptoSellPrice) * 1000000000
						) / 1000000000
					).toFixed(6)
				);
			} else {
				setYouGetAmount(
					(
						Math.round(
							Number(youGiveValue) * cryptoBuyPrice * 1000000000
						) / 1000000000
					).toFixed(6)
				);
			}
		}

		if (youGiveValue === "") {
			setYouGetAmount("");
		}
	}

	function changeYouGet(e, sellCrypto, cryptoBuyPrice, cryptoSellPrice) {
		const regex = /^(([0-9.]?)*)+$/;
		const youGetValue = e.target.value;

		if (youGetValue.match(regex)) {
			setYouGetAmount(youGetValue);

			if (sellCrypto) {
				setYouGiveAmount(
					(
						Math.round(
							Number(youGetValue) * cryptoSellPrice * 1000000000
						) / 1000000000
					).toFixed(6)
				);
			} else {
				setYouGiveAmount(
					(
						Math.round(
							(Number(youGetValue) / cryptoBuyPrice) * 1000000000
						) / 1000000000
					).toFixed(6)
				);
			}
		}

		if (youGetValue === "") {
			setYouGiveAmount("");
		}
	}

	return (
		<div className={styles["swap-wrapper-wrapper-wrapper"]}>
			<div
				className={[
					styles["swap-wrapper-wrapper"],
					isLoading && styles["swap-wrapper-wrapper-blurred"],
				].join(" ")}
			>
				<div className={styles["swap-wrapper"]}>
					<div className={styles["you-give-wrapper"]}>
						<p className={styles["text"]}>You Give</p>
						<div className={styles["you-give-input-wrapper"]}>
							<input
								type="tel"
								id="you-give-input"
								name="you-give"
								inputMode="numeric"
								pattern="[0-9]*"
								className={styles["you-give-input"]}
								placeholder="Enter Amount"
								value={youGiveAmount}
								onChange={(e) => {
									changeYouGive(
										e,
										sellCrypto,
										cryptoBuyPrice,
										cryptoSellPrice
									);
								}}
							></input>
							{sellCrypto ? (
								<ChooseFiat
									chosenFiat={chosenFiat}
									setChosenFiat={setChosenFiat}
								/>
							) : (
								<ChooseCrypto
									chosenCrypto={chosenCrypto}
									setChosenCrypto={setChosenCrypto}
									setCryptoRate={setCryptoRate}
									setIsLoading={setIsLoading}
								/>
							)}
						</div>
					</div>
					<Reciprocate
						setSellCrypto={setSellCrypto}
						sellCrypto={sellCrypto}
						youGiveAmount={youGiveAmount}
						setYouGiveAmount={setYouGiveAmount}
						setYouGetAmount={setYouGetAmount}
						cryptoBuyPrice={cryptoBuyPrice}
						cryptoSellPrice={cryptoSellPrice}
					/>
					<div className={styles["you-get-wrapper"]}>
						<p className={styles["text"]}>You Get</p>
						<div className={styles["you-get-input-wrapper"]}>
							<input
								type="tel"
								name="you-get"
								id="you-get-input"
								inputMode="numeric"
								pattern="[0-9]*"
								value={youGetAmount}
								onChange={(e) => {
									changeYouGet(
										e,
										sellCrypto,
										cryptoBuyPrice,
										cryptoSellPrice
									);
								}}
								className={styles["you-get-input"]}
								placeholder="Enter Amount"
							></input>
							{sellCrypto ? (
								<ChooseCrypto
									chosenCrypto={chosenCrypto}
									setChosenCrypto={setChosenCrypto}
									setCryptoRate={setCryptoRate}
									setIsLoading={setIsLoading}
								/>
							) : (
								<ChooseFiat
									chosenFiat={chosenFiat}
									setChosenFiat={setChosenFiat}
								/>
							)}
						</div>
					</div>
				</div>
				<p className={styles["exact-rate"]}>{`1 ${chosenCrypto} = ${(
					Math.round(
						(sellCrypto ? cryptoSellPrice : cryptoBuyPrice) * 10000
					) / 10000
				).toFixed(3)} ${chosenFiat}`}</p>
			</div>
			{isLoading && (
				<div className={styles["is-loading-wrapper"]}>
					<IsLoading />
				</div>
			)}
		</div>
	);
}
