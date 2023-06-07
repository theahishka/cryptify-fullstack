import styles from "./contactUsForm.module.scss";

export default function ContactUsForm() {
	return (
		<section className={styles["contact-us-form-wrapper"]}>
			<div className={styles["contact-us-form-for-background-filler"]}>
				<div className={styles["contact-us-form-for-border"]}>
					<div className={styles["contact-us-form"]}>
						<h3 className={styles["title"]}>Contact US</h3>
						<p className={styles["text"]}>
							We are always open and we welcome questions you have
							for our team. If you wish to get in touch, please
							fill out the form.{" "}
						</p>
						<form className={styles["form-wrapper"]}>
							<input
								type="text"
								name="full-name"
								id="full-name"
								placeholder="Your Name"
								className={[
									styles["full-name"],
									styles["input-box"],
								].join(" ")}
							></input>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Your Email"
								className={[
									styles["email"],
									styles["input-box"],
								].join(" ")}
							></input>
							<input
								type="number"
								name="mobile-number"
								id="mobile-number"
								placeholder="Your Phone"
								className={[
									styles["mobile-number"],
									styles["input-box"],
								].join(" ")}
							></input>
							<textarea
								name="message"
								id="message"
								placeholder="Your Message"
								className={[
									styles["message"],
									styles["input-box"],
								].join(" ")}
							></textarea>
							<button
								type="button"
								id="submit"
								className={styles["submit"]}
							>
								Submit
							</button>
						</form>
					</div>
				</div>
				<div className={styles["corner-conic-2"]}></div>
			</div>
			<div className={styles["background-filler-6-wrapper"]}>
				<div className={styles["background-filler-6"]}></div>
			</div>
		</section>
	);
}
