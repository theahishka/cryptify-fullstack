"use client";

import { useState } from "react";
import styles from "./rates.module.scss";
import Image from "next/image";
<<<<<<< HEAD
import Rate from "./rate/rate";

// async function fetchCryptoRates(chosenFiat) {
// 	const cryptoRatesData = await fetch(
// 		`http://localhost:3001/api/homepageRates?chosenFiat=${chosenFiat}`,
// 		{ cache: "no-store" }
// 	);
// 	if (!cryptoRatesData) {
// 		throw new Error("Failed to fetch Crypto Rates");
// 	}
// 	let cryptoRatesJSON = await cryptoRatesData.json();
// 	return cryptoRatesJSON;
// }

export default async function Rates() {
=======
import DefaultCurrency from "./defaultCurrency/defaultCurrency";

export default function Rates(props) {
>>>>>>> temp
	const [chosenFiat, setChosenFiat] = useState("AED");
	const [discoverMore, setDiscoverMore] = useState(false);

	function toggleDiscoverMore() {
		discoverMore ? setDiscoverMore(false) : setDiscoverMore(true);
	}

<<<<<<< HEAD
	// const fetchedCryptoRates = await fetchCryptoRates(chosenFiat);

	// console.log(fetchedCryptoRates);
	// const fetchedCryptoIDs = Object.keys(fetchedCryptoRates);
	// console.log(fetchedCryptoIDs);
=======
	let cryptoData = chosenFiat === "AED" ? props.dataAED : props.dataUSD;
	console.log(cryptoData);
>>>>>>> temp

	return (
		<section className={styles["rates-wrapper"]}>
			<div className={styles["title-and-default-currency-wrapper"]}>
				<div className={styles["title-and-break-wrapper"]}>
					<h3 className={styles["title"]}>Cryptocurrency Rates</h3>
					<hr className={styles["hr"]}></hr>
				</div>
				<DefaultCurrency
					chosenFiat={chosenFiat}
					setChosenFiat={setChosenFiat}
				/>
			</div>
			<div
				className={[
					styles["rates-display-wrapper"],
					!discoverMore && styles["rate-display-wrapper-shortened"],
				].join(" ")}
			>
<<<<<<< HEAD
				<Rate />
				<Rate />
				<Rate />
				<Rate />
				<Rate />
				<Rate />
				<Rate />
				<Rate />
				{/* {fetchedCryptoIDs.map((id) => {
					return (
						<Rate
							key={`coinmarketcap-${id}`}
							crypto={fetchedCryptoRates[id]}
							fiat={chosenFiat}
						/>
					);
				})} */}
=======
				{cryptoData.map((crypto) => {
					return (
						<Rate
							key={`crypto-with-id-${crypto.id}`}
							crypto={crypto}
							chosenFiat={chosenFiat}
						/>
					);
				})}
>>>>>>> temp
			</div>
			<div
				className={styles["explore-wrapper"]}
				onClick={toggleDiscoverMore}
			>
				<Image
					src="/assets/arrows/arrowDown.svg"
					className={[
						styles["arrow-down"],
						discoverMore && styles["arrow-up"],
					].join(" ")}
					width={24}
					height={24}
					alt="arrow down"
				/>
				<div className={styles["explore-button"]}>Discover More</div>
			</div>
			<div className={styles["background-filler-3"]}></div>
		</section>
	);
}
