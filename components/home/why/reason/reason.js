import styles from "./reason.module.scss";
import Image from "next/image";

export default function Reason({ index }) {
	const reasons = [
		{
			icon: "./assets/reasons/secureG.svg",
			title: "Secure Platform",
			text: "There are a lot of scams out there, with us you will safe.",
		},
		{
			icon: "./assets/reasons/fastG.svg",
			title: "Fast Transactions",
			text: "We do everything really fast. Tars Turs is our Moto",
		},
		{
			icon: "./assets/reasons/fastG.svg",
			title: "No Hidden Fees",
			text: "You only pay for sex, nothing else!",
		},
		{
			icon: "./assets/reasons/fastG.svg",
			title: "Easy of Use",
			text: "You only pay for sex, nothing else!",
		},
		{
			icon: "./assets/reasons/fastG.svg",
			title: "Technological Advancements",
			text: "You only pay for sex, nothing else!",
		},
		{
			icon: "./assets/reasons/fastG.svg",
			title: "Strategic Location",
			text: "You only pay for sex, nothing else!",
		},
	];
	return (
		<div className={styles["reason"]}>
			<div className={styles["icon-wrapper-border"]}>
				<div className={styles["icon-wrapper"]}>
					<Image
						src={reasons[index].icon}
						className={styles["icon"]}
						width={40}
						height={40}
						alt="reason"
					></Image>
				</div>
			</div>
			<h4 className={styles["title"]}>{reasons[index].title}</h4>
			<p className={styles["text"]}>{reasons[index].text}</p>
		</div>
	);
}
