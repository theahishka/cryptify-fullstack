import Calculator from "@/components/utils/calculator/calculator";
import styles from "./heroBanner.module.scss";
import Image from "next/image";

export default function HeroBanner() {
	return (
		<section className={styles["hero-calculator"]}>
			<div className={styles["hero-wrapper"]}>
				<div className={styles["text-wrapper"]}>
					<h1 className={styles["text"]}>
						Experience{" "}
						<span className={styles["designer-words"]}>
							SEAMLESS
						</span>{" "}
						crypto trading in{" "}
						<span className={styles["designer-words"]}>Dubai</span>{" "}
						with our trusted Over The Counter (OTC) Broker.
					</h1>
				</div>
				<div className={styles["buttons-wrapper"]}>
					<div className={styles["message-us"]}>
						<a
							href="https://wa.me/971527536969"
							className={styles["anchor"]}
							target="_blank"
						>
							Message Us
						</a>
					</div>
					<div className={styles["get-directions"]}>
						<div className={styles["for-get-directions-border"]}>
							<a
								href="https://goo.gl/maps/bTKySe87TmYGPJyu6"
								className={styles["anchor"]}
								target="_blank"
							>
								Get Directions
							</a>
						</div>
					</div>
				</div>
				<div className={styles["background-filler-1"]}></div>
			</div>
			<Calculator/>
		</section>
	);
}
