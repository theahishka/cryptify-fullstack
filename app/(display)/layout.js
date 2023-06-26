import "../(main)/globals.scss";

export const metadata = {
	title: "Cryptify | Display",
	description:
		"Buy and sell cryptocurrency in UAE. Over The Counter (OTC) crypto broker.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
