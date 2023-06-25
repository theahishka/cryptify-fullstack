import Image from "next/image";
import styles from "./mobileDetails.module.scss";

export default function MobileDetails() {
	return (
		<section className={styles["contact-us-details-wrapper"]}>
			<div className={styles["contact-us-details-for-border"]}>
				<div className={styles["contact-us-details"]}>
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
						<p className={styles["contact-anchor"]}>@cryptify</p>
					</a>
				</div>
			</div>
			<div className={styles["background-filler-7"]}></div>
		</section>
	);
}
