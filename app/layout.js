import Footer from "@/components/layout/footer/footer";
import "./globals.scss";
import PCHeader from "@/components/layout/header/pc/pcHeader";
import MobileHeader from "@/components/layout/header/mobile/mobileHeader";

export const metadata = {
	title: "Cryptify | Home",
	description:
		"Buy and sell cryptocurrency in UAE. Over The Counter (OTC) crypto broker.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<PCHeader />
				<MobileHeader />
				{children}
				<Footer />
			</body>
		</html>
	);
}
