"use client";

import styles from "./calculator.module.scss";
import rippleEffect from "../rippleEffect/rippleEffect";
import Swap from "./swap/swap";

export default function Calculator(props) {
	return (
		<div className={styles["calculator-wrapper"]}>
			<div className={styles["for-calculator-border"]}>
				<div className={styles["title-wrapper"]}>
					<h3 className={styles["title"]}>Quick Calculator</h3>
				</div>
				<p className={styles["description"]}>
					Easily calculate the rate
				</p>
				<Swap
					USDTRate={props.USDTRate}
					spreadsAndRates={props.spreadsAndRates}
				/>
				<div className={styles["arrange-wrapper"]}>
					<a
						className={styles["arrange"]}
						onClick={(e) => {
							rippleEffect(e);
						}}
						href="https://wa.me/971527536969"
						target="_blank"
					>
						<p className={styles["text"]}>Arrange</p>
					</a>
				</div>
			</div>
			<div className={styles["corner-conic-1"]}></div>
			<div className={styles["background-filler-2"]}></div>
		</div>
	);
}
