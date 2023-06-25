"use client";

import styles from "./reciprocate.module.scss";

import Image from "next/image";

export default function Reciprocate(props) {
	function swapIconAnimation(e) {
		const swapIconWrapper = e.target;
		const swapIcon = e.target.children[0];

		const swapIconWrapperAttribute =
			swapIconWrapper.getAttribute("swapped");

		if (swapIconWrapperAttribute === "false") {
			swapIconWrapper.setAttribute("swapped", "true");
			return (swapIcon.style.animation =
				"rotateIconFirstTime 0.6s cubic-bezier(0,.91,.81,.95)");
		}

		swapIconWrapper.setAttribute("swapped", "false");
		return (swapIcon.style.animation =
			"rotateIconSecondTime 0.6s cubic-bezier(0,.91,.81,.95)");
	}

	function changeSellPosition(sellCrypto, setSellCrypto) {
		sellCrypto ? setSellCrypto(false) : setSellCrypto(true);
	}

	function swapAmounts(
		sellCrypto,
		youGiveAmount,
		setYouGiveAmount,
		setYouGetAmount,
		cryptoBuyPrice,
		cryptoSellPrice
	) {
		if (sellCrypto) {
			setYouGetAmount(Number(youGiveAmount));
			setYouGiveAmount(
				(
					Math.round(
						(Number(youGiveAmount) / cryptoBuyPrice) * 1000000000
					) / 1000000000
				).toFixed(6)
			);
		} else {
			setYouGetAmount(Number(youGiveAmount));
			setYouGiveAmount(
				(
					Math.round(
						Number(youGiveAmount) * cryptoSellPrice * 1000000000
					) / 1000000000
				).toFixed(6)
			);
		}

		if (youGiveAmount === "") {
			setYouGetAmount("");
			setYouGiveAmount("");
		}
	}

	return (
		<div
			className={styles["swap-icon-wrapper"]}
			onClick={(e) => {
				swapIconAnimation(e);
				changeSellPosition(props.sellCrypto, props.setSellCrypto);
				swapAmounts(
					props.sellCrypto,
					props.youGiveAmount,
					props.setYouGiveAmount,
					props.setYouGetAmount,
					props.cryptoBuyPrice,
					props.cryptoSellPrice
				);
			}}
			swapped="false"
		>
			<Image
				className={styles["swap-icon"]}
				src="/assets/arrows/swap.svg"
				width={24}
				height={24}
				alt="swap icon"
			/>
		</div>
	);
}
