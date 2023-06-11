"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./slidingMenu.module.scss";
import Image from "next/image";

function SlidingMenu({ closeMenu }) {
	const menuLinks = [
		"Home",
		"Exchange",
		"Market",
		"News",
		"FAQs",
		"About Us",
		"Contact Us",
	];

	const menuPaths = [
		"/",
		"/exchange",
		"/market",
		"/news",
		"/faqs",
		"/about-us",
		"/contact-us",
	];

	const legalLinks = ["Privacy Policy", "Terms & Conditions"];

	const legalPaths = ["/privacy-policy", "/terms-and-conditions"];

	const pathname = usePathname();
	const currentRoute = pathname;

	return (
		<div className={styles["menu-wrapper"]} id={"menuWrapper"}>
			<div className={styles["menu"]}>
				<ul className={styles["menu-ul"]}>
					{menuLinks.map((link, index) => {
						return (
							<li
								className={styles["ul-li"]}
								key={`menu-link-${index}`}
							>
								<Link
									href={menuPaths[index]}
									className={styles["li-link-component"]}
									onClick={closeMenu}
								>
									<Image
										className={[
											styles["li-rectangle"],
											currentRoute === menuPaths[index]
												? styles["active-rectangle"]
												: styles[
														"non-active-rectangle"
												  ],
										].join(" ")}
										src="/assets/header/mobile/MenuRectangle.svg"
										width={4}
										height={24}
										alt="active-route"
									/>
									<p
										className={[
											styles["li-text"],
											currentRoute === menuPaths[index]
												? styles["active-text"]
												: styles["non-active-text"],
										].join(" ")}
									>
										{link}
									</p>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
			<div className={styles["legal"]}>
				<ul className={styles["legal-ul"]}>
					{legalLinks.map((link, index) => {
						return (
							<li
								className={styles["legal-li"]}
								key={`legal-li-${index}`}
							>
								<Link
									href={legalPaths[index]}
									className={[
										styles["legal-link"],
										currentRoute === legalPaths[index]
											? styles["active-legal-link"]
											: styles["non-active-legal-link"],
									].join(" ")}
									onClick={closeMenu}
								>
									{link}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default SlidingMenu;
