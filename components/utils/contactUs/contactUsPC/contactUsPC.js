import ContactUsForm from "../contactUsForm/contactUsForm";
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
								<a
									className={styles["contact"]}
									href={"mailto:exchange@cryptify.info"}
								>
									<Image
										className={styles["email-svg"]}
										src="/assets/contacts/email.svg"
										width={32}
										height={32}
										alt="email icon"
									></Image>
									<p className={styles["contact-anchor"]}>
										exchange@cryptify.info
									</p>
								</a>
								<a
									className={styles["contact"]}
									href="https://wa.me/971527536969"
									target="_blank"
								>
									<Image
										className={styles["whatsapp-svg"]}
										src="/assets/contacts/whatsapp.svg"
										width={32}
										height={32}
										alt="whatsapp icon"
									></Image>
									<p className={styles["contact-anchor"]}>
										+971527536969
									</p>
								</a>
								<a
									className={styles["contact"]}
									href="https://t.me/cryptifyDubai"
									target="_blank"
								>
									<Image
										className={styles["telegram-svg"]}
										src="/assets/contacts/telegram.svg"
										width={32}
										height={32}
										alt="telegram icon"
									></Image>
									<p className={styles["contact-anchor"]}>
										@cryptifyDubai
									</p>
								</a>
								<a
									className={styles["contact"]}
									href="https://www.instagram.com/cryptify/"
									target="_blank"
								>
									<Image
										className={styles["instagram-svg"]}
										src="/assets/contacts/instagram.svg"
										width={32}
										height={32}
										alt="instagram icon"
									></Image>
									<p className={styles["contact-anchor"]}>
										@cryptify
									</p>
								</a>
							</div>
						</div>
						<ContactUsForm/>
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
