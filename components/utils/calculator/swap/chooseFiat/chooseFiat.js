"use client";

import { useEffect, useState } from "react";
import styles from "./chooseFiat.module.scss";

import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";

export default function ChooseFiat(props) {
	const [listOpened, setListOpened] = useState(false);

	const fiatList = ["AED", "USD"];

	return (
		<div className={styles["choose-fiat-wrapper-wrapper"]}>
			<div
				className={[
					styles["choose-fiat-wrapper"],
					listOpened && styles["choose-fiat-wrapper-list-opened"],
				].join(" ")}
				onClick={() => {
					listOpened ? setListOpened(false) : setListOpened(true);
				}}
			>
				<div className={styles["logo"]}>
					<Image
						className={styles["logo-image"]}
						src={`/assets/flags/${props.chosenFiat}.png`}
						width={20}
						height={20}
						alt={`${props.chosenFiat} flag`}
					/>
				</div>
				<div className={styles["symbol"]}>
					<p>{props.chosenFiat}</p>
				</div>
			</div>

			<AnimatePresence>
				{listOpened && (
					<motion.div
						className={styles["fiat-list-wrapper"]}
						initial={{ opacity: 0, y: "-30%" }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
						exit={{ opacity: 0, y: "-30%" }}
					>
						{fiatList.map((fiat) => {
							return (
								props.chosenFiat !== fiat && (
									<div
										className={styles["option-wrapper"]}
										key={`option-${fiat}`}
										onClick={() => {
											props.setChosenFiat(fiat);
											setListOpened(false);
										}}
									>
										<div className={styles["logo"]}>
											<Image
												src={`/assets/flags/${fiat}.png`}
												width={20}
												height={20}
												alt={`${fiat} logo`}
											/>
										</div>
										<div className={styles["symbol"]}>
											<p>{fiat}</p>
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
