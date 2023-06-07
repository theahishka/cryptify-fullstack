import Image from "next/image";
import styles from "./contactUsDetails.module.scss";

export default function ContactUsDetails() {
	return (
		<section className={styles["contact-us-details-wrapper"]}>
			<div className={styles["contact-us-details-for-border"]}>
				<div className={styles["contact-us-details"]}>
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
						<a className={styles["contact-anchor"]}>+971527536969</a>
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
						<a className={styles["contact-anchor"]}>@cryptify</a>
					</div>
				</div>
			</div>
            <div className={styles["background-filler-7"]}></div>
		</section>
	);
}
