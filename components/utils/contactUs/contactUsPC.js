import styles from "./contactUsPC.module.scss";
import Image from "next/image";

export default function ContactUsPC() {
	return (
		<section className={styles["contact-us-pc-wrapper"]}>
			<div className={styles["contact-us-pc-for-background-filler"]}>
				<div className={styles["contact-us-pc-for-border"]}>
					<div className={styles["contact-us-pc"]}>
						<div className={styles["details-wrapper"]}>
							<h3 className={styles["title"]}>Contact US</h3>
							<p className={styles["text"]}>
								We are always open and we welcome questions you
								have for our team. If you wish to get in touch,
								please fill out the form.{" "}
							</p>
							<div className={styles["details"]}>
								<div className={styles["contact"]}>
									<Image
										className={styles["email-svg"]}
										src="/assets/contacts/email.svg"
										width={32}
										height={32}
										alt="email icon"
									></Image>
									<a className={styles["contact-anchor"]}>
										exchange@cryptify.info
									</a>
								</div>
								<div className={styles["contact"]}>
									<Image
										className={styles["whatsapp-svg"]}
										src="/assets/contacts/whatsapp.svg"
										width={32}
										height={32}
										alt="whatsapp icon"
									></Image>
									<a className={styles["contact-anchor"]}>
										+971527536969
									</a>
								</div>
								<div className={styles["contact"]}>
									<Image
										className={styles["telegram-svg"]}
										src="/assets/contacts/telegram.svg"
										width={32}
										height={32}
										alt="telegram icon"
									></Image>
									<a className={styles["contact-anchor"]}>
										@cryptifyDubai
									</a>
								</div>
								<div className={styles["contact"]}>
									<Image
										className={styles["instagram-svg"]}
										src="/assets/contacts/instagram.svg"
										width={32}
										height={32}
										alt="instagram icon"
									></Image>
									<a className={styles["contact-anchor"]}>
										@cryptify
									</a>
								</div>
							</div>
						</div>
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
				<div className={styles["corner-conic-3"]}></div>
				<div className={styles["corner-conic-4"]}></div>
			</div>
            <div className={styles["background-filler-10-wrapper"]}>
				<div className={styles["background-filler-10"]}></div>
			</div>
            <div className={styles["background-filler-11"]}></div>
		</section>
	);
}
