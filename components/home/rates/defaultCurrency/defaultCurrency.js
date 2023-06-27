"use client";

import { useState } from "react";
import styles from "./defaultCurrency.module.scss";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function DefaultCurrency(props) {
	const [chooseFiat, setChooseFiat] = useState(false);
	let chosenFlag = props.chosenFiat === "AED" ? "UAE" : "USA";

	function toggleChooseFiat() {
		chooseFiat ? setChooseFiat(false) : setChooseFiat(true);
	}

	function changeFiat() {
		setChooseFiat(false);
		props.chosenFiat === "AED"
			? props.setChosenFiat("USD")
			: props.setChosenFiat("AED");
	}
	return (
		<div className={styles["default-currency-wrapper-wrapper"]}>
			<div
				className={styles["default-currency-wrapper"]}
				onClick={toggleChooseFiat}
			>
				<div className={styles["choose-default-currency-wrapper"]}>
					<div className={styles["flag-wrapper"]}>
						<Image
							src={`/assets/ratesFlags/${chosenFlag}.png`}
							className={styles["flag"]}
							width={44}
							height={30}
							alt="country flag"
						/>
					</div>
					<div className={styles["fiat-symbol-wrapper"]}>
						<p className={styles["symbol"]}>{props.chosenFiat}</p>
					</div>
					<div className={styles["arrow-down-wrapper"]}>
						<Image
							src="/assets/ratesFlags/arrowDown.svg"
							className={[
								styles["arrow-down"],
								chooseFiat && styles["arrow-up"],
							].join(" ")}
							width={20}
							height={20}
							alt="arrow down"
						/>
					</div>
				</div>
			</div>

			<AnimatePresence>
				{chooseFiat && (
					<motion.div
						className={styles["choose-fiat-wrapper"]}
						initial={{ opacity: 0, y: "-50%" }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
						exit={{ opacity: 0, y: "-50%" }}
						onClick={changeFiat}
					>
						<div className={styles["flag-wrapper"]}>
							<Image
								src={`/assets/ratesFlags/${
									chosenFlag === "UAE" ? "USA" : "UAE"
								}.png`}
								className={styles["flag"]}
								width={44}
								height={30}
								alt="country flag"
							/>
						</div>
						<div className={styles["fiat-wrapper"]}>
							<p className={styles["symbol"]}>
								{props.chosenFiat === "AED" ? "USD" : "AED"}
							</p>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
