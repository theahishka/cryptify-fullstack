"use client";

import styles from "./footer.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	const pagesLinks = ["Home", "Exchange", "Market", "News", "About Us"];
	const pagesPaths = ["/", "/exchange", "/market", "/news", "/about-us"];

	const supportLinks = ["FAQS", "Contact Us"];
	const supportPaths = ["/faqs", "/contact-us"];

	const legalLinks = ["Privacy Policy", "Terms & Conditions"];
	const legalPaths = ["privacy-policy", "terms-and-conditions"];

	return (
		<footer className={styles["footer"]}>
			<div className={styles["footer-section-1-wrapper"]}>
				<div className={styles["hero-wrapper"]}>
					<Link href={"/"}>
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
					<div className={styles["text-wrapper"]}>
						<p className={styles["text"]}>
							Ya ebu sobak, vsegda gotov trahnut neskolko kotov.
						</p>
					</div>
					<div className={styles["socials-wrapper"]}>
						<a
							href="https://wa.me/971527536969"
							target="_blank"
							className={styles["whatsapp-anchor"]}
						>
							<Image
								className={styles["whatsapp-icon"]}
								src="/assets/footer/whatsapp.svg"
								alt="whatsapp Link"
								width={40}
								height={40}
							></Image>
						</a>
						<a
							href="https://t.me/cryptifyDubai"
							target="_blank"
							className={styles["telegram-anchor"]}
						>
							<Image
								className={styles["telegram-icon"]}
								src="/assets/footer/telegram.svg"
								alt="Telegram Link"
								width={40}
								height={40}
							></Image>
						</a>
						<a
							href="https://www.instagram.com/cryptify/"
							target="_blank"
							className={styles["instagram-anchor"]}
						>
							<Image
								className={styles["instagram-icon"]}
								src="/assets/footer/instagram.svg"
								alt="Instagram Link"
								width={40}
								height={40}
							></Image>
						</a>
					</div>
				</div>
				<div className={styles["links-wrapper"]}>
					<div
						className={[
							styles["links"],
							styles["pages-links"],
						].join(" ")}
					>
						<h3 className={styles["title"]}>Pages</h3>
						{pagesLinks.map((link, index) => {
							return (
								<Link
									href={pagesPaths[index]}
									key={`pages-link-${index}`}
									className={styles["link-component"]}
								>
									{link}
								</Link>
							);
						})}
					</div>
					<div
						className={[
							styles["links"],
							styles["support-links"],
						].join(" ")}
					>
						<h3 className={styles["title"]}>Support</h3>
						{supportLinks.map((link, index) => {
							return (
								<Link
									href={supportPaths[index]}
									key={`support-links-${index}`}
									className={styles["link-component"]}
								>
									{link}
								</Link>
							);
						})}
					</div>
					<div
						className={[
							styles["links"],
							styles["legal-links"],
						].join(" ")}
					>
						<h3 className={styles["title"]}>Legal</h3>
						{legalLinks.map((link, index) => {
							return (
								<Link
									href={legalPaths[index]}
									key={`legal-links-${index}`}
									className={styles["link-component"]}
								>
									{link}
								</Link>
							);
						})}
					</div>
				</div>
				<div className={styles["subscribe-us-wrapper"]}>
					<h3 className={styles["title"]}>Subscribe Us</h3>
					<p className={styles["text"]}>
						Sign up for our latest annoying emails. We give you our
						word, we will spam you like there is no tomorrow.
					</p>
					<div className={styles["input-box-wrapper"]}>
						<input
							id="input-box"
							type="text"
							placeholder="You Email Address"
							name="input-box"
							className={styles["input-box"]}
						></input>
						<button type="submit" className={styles["button"]}>
							<Image
								className={styles["subscribe-us-icon"]}
								src="/assets/footer/subscribeus.svg"
								alt="subscribe us"
								width={14.17}
								height={16.67}
							/>
						</button>
					</div>
				</div>
			</div>
			<hr className={styles["hr"]} />
			<div className={styles["copyright-wrapper"]}>
				<p className={styles["text"]}>
					Copyright © 2023 Cryptify. All rights reserved.
				</p>
			</div>
			<div className={styles["socials-wrapper-mobile"]}>
				<a
					href="https://wa.me/971527536969"
					target="_blank"
					className={styles["whatsapp-anchor"]}
				>
					<Image
						className={styles["whatsapp-icon"]}
						src="/assets/footer/whatsapp.svg"
						alt="whatsapp Link"
						width={40}
						height={40}
					></Image>
				</a>
				<a
					href="https://t.me/cryptifyDubai"
					target="_blank"
					className={styles["telegram-anchor"]}
				>
					<Image
						className={styles["telegram-icon"]}
						src="/assets/footer/telegram.svg"
						alt="Telegram Link"
						width={40}
						height={40}
					></Image>
				</a>
				<a
					href="https://www.instagram.com/cryptify/"
					target="_blank"
					className={styles["instagram-anchor"]}
				>
					<Image
						className={styles["instagram-icon"]}
						src="/assets/footer/instagram.svg"
						alt="Instagram Link"
						width={40}
						height={40}
					></Image>
				</a>
			</div>
			<div className={styles["background-filler-8-wrapper"]}>
				<div className={styles["background-filler-8"]}></div>
			</div>
			<div className={styles["background-filler-9-wrapper"]}>
				<div className={styles["background-filler-9"]}></div>
			</div>
		</footer>
	);
}
