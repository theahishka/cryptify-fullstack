"use client";

import { useState } from "react";
import styles from "./rates.module.scss";
import Image from "next/image";
import DefaultCurrency from "./defaultCurrency/defaultCurrency";
import Rate from "./rate/rate";

export default function Rates(props) {
	const [chosenFiat, setChosenFiat] = useState("AED");
	const [discoverMore, setDiscoverMore] = useState(false);

	function toggleDiscoverMore() {
		discoverMore ? setDiscoverMore(false) : setDiscoverMore(true);
	}

	let cryptoData = chosenFiat === "AED" ? props.dataAED : props.dataUSD;
	console.log(cryptoData);

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
				{cryptoData.map((crypto) => {
					return (
						<Rate
							key={`crypto-with-id-${crypto.id}`}
							crypto={crypto}
							chosenFiat={chosenFiat}
						/>
					);
				})}
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
