"use client";

import { useState } from "react";
import styles from "./rates.module.scss";
import Image from "next/image";
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
	const [chosenFiat, setChosenFiat] = useState("AED");
	const [discoverMore, setDiscoverMore] = useState(false);

	function toggleDiscoverMore() {
		discoverMore ? setDiscoverMore(false) : setDiscoverMore(true);
		console.log(discoverMore);
	}

	// const fetchedCryptoRates = await fetchCryptoRates(chosenFiat);

	// console.log(fetchedCryptoRates);
	// const fetchedCryptoIDs = Object.keys(fetchedCryptoRates);
	// console.log(fetchedCryptoIDs);

	return (
		<section className={styles["rates-wrapper"]}>
			<div className={styles["title-and-default-currency-wrapper"]}>
				<div className={styles["title-and-break-wrapper"]}>
					<h3 className={styles["title"]}>Cryptocurrency Rates</h3>
					<hr className={styles["hr"]}></hr>
				</div>
				<div className={styles["default-currency-wrapper"]}>
					<input
						className={styles["input-box"]}
						placeholder="Target Currency"
					></input>
					<div className={styles["choose-default-currency-wrapper"]}>
						<div className={styles["flag-wrapper"]}>
							<Image
								src="/assets/ratesFlags/UAE.svg"
								className={styles["flag"]}
								width={44}
								height={44}
								alt="country flag"
							/>
						</div>
						<div className={styles["fiat-symbol-wrapper"]}>
							<p className={styles["symbol"]}>AED</p>
						</div>
						<div className={styles["arrow-down-wrapper"]}>
							<Image
								src="/assets/ratesFlags/arrowDown.svg"
								className={styles["arrow-down"]}
								width={20}
								height={20}
								alt="arrow down"
							/>
						</div>
					</div>
				</div>
			</div>
			<div
				className={[
					styles["rates-display-wrapper"],
					!discoverMore
						? styles["discover-more-inactive"]
						: styles["discover-more-active"],
				].join(" ")}
			>
				{/* {fetchedCryptoIDs.map((id) => {
					return (
						<Rate
							key={`coinmarketcap-${id}`}
							crypto={fetchedCryptoRates[id]}
							fiat={chosenFiat}
						/>
					);
				})} */}
			</div>
			<div
				className={styles["explore-wrapper"]}
				onClick={toggleDiscoverMore}
			>
				<Image
					src="/assets/arrows/arrowDown.svg"
					className={[
						styles["arrow-down"],
						discoverMore
							? styles["arrow-down-dropped"]
							: styles["arrow-down-not-dropped"],
					].join(" ")}
					width={24}
					height={24}
					alt="arrow down"
				/>
				<a className={styles["explore-anchor"]}>Discover More</a>
			</div>
			<div className={styles["background-filler-3"]}></div>
		</section>
	);
}
