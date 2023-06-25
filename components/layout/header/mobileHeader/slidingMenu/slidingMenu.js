"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./slidingMenu.module.scss";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SlidingMenu = ({ closeMenu, showMenu }) => {
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
		<div className={styles["menu-wrapper-for-motion"]}>
			<AnimatePresence>
				{showMenu && (
					<motion.div
						className={styles["menu-wrapper"]}
						initial={{ opacity: 0, x: "100%" }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3 }}
						exit={{ opacity: 0, x: "100%" }}
					>
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
												className={
													styles["li-link-component"]
												}
												onClick={closeMenu}
											>
												<Image
													className={[
														styles["li-rectangle"],
														currentRoute ===
														menuPaths[index]
															? styles[
																	"active-rectangle"
															  ]
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
														currentRoute ===
														menuPaths[index]
															? styles[
																	"active-text"
															  ]
															: styles[
																	"non-active-text"
															  ],
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
													currentRoute ===
													legalPaths[index]
														? styles[
																"active-legal-link"
														  ]
														: styles[
																"non-active-legal-link"
														  ],
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
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default SlidingMenu;
