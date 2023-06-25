import ContactUsForm from "../../contactUsForm/contactUsForm";
import styles from "./mobileForm.module.scss";

export default function MobileForm() {
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
						<ContactUsForm />
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
