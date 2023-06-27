import Footer from "@/components/layout/footer/footer";
import "./globals.scss";
import Script from "next/script";
import Header from "@/components/layout/header/header";

export const metadata = {
	title: "Cryptify | Home",
	description:
		"Buy and sell cryptocurrency in UAE. Over The Counter (OTC) crypto broker.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Header />
				{children}
				<Footer />
			</body>
			<Script src="https://smtpjs.com/v3/smtp.js"></Script>
		</html>
	);
}
