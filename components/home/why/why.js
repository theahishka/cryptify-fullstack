import Reason from "./reason/reason";
import styles from "./why.module.scss";

export default function Why() {
	return (
		<section className={styles["why-wrapper"]}>
			<h3 className={styles["title"]}>
				Why Choose{" "}
				<span className={styles["gradient-text"]}>Cryptify?</span>
			</h3>
			<hr className={styles["hr"]}></hr>
			<p className={styles["text"]}>
				Welcome to Cryptify, we do everything on a top notch level. We
				make sure that none of our customers are getting scammed. We
				give competitive prices and we process transactions blazingly
				fast. Come and check it out for yourself!
				<span className={styles["background-filler-4"]}></span>
			</p>
			<div className={styles["reasons-wrapper"]}>
				<Reason index={0} />
				<Reason index={1} />
				<Reason index={2} />
				<Reason index={3} />
				<Reason index={4} />
				<Reason index={5} />
			</div>
			<div className={styles["background-filler-5-wrapper"]}>
				<div className={styles["background-filler-5"]}></div>
			</div>
		</section>
	);
}
