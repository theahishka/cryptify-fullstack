import styles from "./reason.module.scss";
import Image from "next/image";

export default function Reason({ index }) {
	const reasons = [
		{
			icon: "./assets/reasons/secureG.svg",
			title: "Secure Platform",
			text: "There are a lot of scams out there. We have seen a lot of them. With our experience you will be safe.",
		},
		{
			icon: "./assets/reasons/fastG.svg",
			title: "Fast Transactions",
			text: "We make sure that each transaction is quick. So, you won't lose time unnecessarily at our office.",
		},
		{
			icon: "./assets/reasons/noHiddenFeesG.svg",
			title: "No Hidden Fees",
			text: "We are always transparent about our fees. You will never pay extra!",
		},
		{
			icon: "./assets/reasons/easeOfUseG.svg",
			title: "Easy of Use",
			text: "We have developed an efficient protocol for transactions. It's so easy and fast!",
		},
		{
			icon: "./assets/reasons/technologicalAdvancementsG.svg",
			title: "Technological Advancements",
			text: "Slowly, but surely, we develop new technologies in our sphere. New app is coming out soon, so stay tuned!",
		},
		{
			icon: "./assets/reasons/strategicLocationG.svg",
			title: "Strategic Location",
			text: "We are located in the city center of Dubai, in Business Bay. It is easy to find us, and it is easy to find parking too.",
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
