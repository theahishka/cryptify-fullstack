"use client";

import styles from "./mobileHeader.module.scss";
import SlidingMenu from "./slidingMenu/slidingMenu";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

function MobileHeader() {
	const languages = [
		{ locale: "en", language: "ENG" },
		{ locale: "ru", language: "RUS" },
		{ locale: "ar", language: "ARA" },
	];

	const [showMenu, setShowMenu] = useState(false);

	function openMenu() {
		setShowMenu(true);
		document.documentElement.style.overflow = "hidden";
	}

	function closeMenu() {
		setShowMenu(false);
		document.documentElement.style.overflow = "scroll";
	}

	return (
		<nav className={styles["mobile-nav"]} id={"mobileNav"}>
			<Link href="/">
				<div className={styles["logo-wrapper"]}>
					<Image
						className={styles["cryptify-logo"]}
						src="/logos/LogoFigma.svg"
						alt="Cryptify Logo"
						width={36.71}
						height={33.88}
					></Image>
					<Image
						className={styles["cryptify-title"]}
						src="/logos/CompanyTitle.svg"
						alt="Cryptify Title"
						width={69.18}
						height={17.65}
					/>
				</div>
			</Link>
			<div className={styles["buttons-wrapper"]}>
				{!showMenu && (
					<Image
						className={[
							styles["menu-button-open"],
							styles["buttons"],
						].join(" ")}
						id={"menuButtonOpen"}
						src="/assets/header/mobile/MenuButtonOpen.svg"
						alt="Open menu button"
						onClick={openMenu}
						width={42}
						height={42}
					/>
				)}
				{showMenu && (
					<Image
						className={[
							styles["menu-button-close"],
							styles["buttons"],
						].join(" ")}
						id={"menuButtonClose"}
						src="/assets/header/mobile/MenuButtonClose.svg"
						alt="Close menu button"
						onClick={closeMenu}
						width={42}
						height={42}
					/>
				)}
			</div>

			<SlidingMenu closeMenu={closeMenu} showMenu={showMenu} />
		</nav>
	);
}

export default MobileHeader;
