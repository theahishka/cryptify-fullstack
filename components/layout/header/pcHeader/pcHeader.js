"use client";

import styles from "./pcHeader.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function PCHeader() {
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

	const pathname = usePathname();
	const currentRoute = pathname;

	return (
		<header className={styles["pc-nav"]} id={"pcNav"}>
			<Link href={"/"}>
				<div className={styles["logo-wrapper"]}>
					<Image
						className={styles["cryptify-logo"]}
						src="/logos/LogoFigma.svg"
						alt="Cryptify Logo"
						width={36.71}
						height={33.88}
						priority={true}
					></Image>
					<Image
						className={styles["cryptify-title"]}
						src="/logos/CompanyTitle.svg"
						alt="Cryptify Title"
						width={69.18}
						height={17.65}
						priority={true}
					/>
				</div>
			</Link>
			<nav className={styles["menu-wrapper"]} id={"menuWrapper"}>
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
								>
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
			</nav>
		</header>
	);
}
