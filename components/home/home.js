import ContactUs from "../utils/contactUs/contactUs";
import HeroBanner from "./heroBanner/heroBanner";
import Rates from "./rates/rates";
import Why from "./why/why";

export default function Home(props) {
	return (
		<div>
			<HeroBanner
				USDTRate={props.USDTRate}
				spreadsAndRates={props.spreadsAndRates}
			/>
			<Rates
				dataAED={props.cryptoRates.dataAED}
				dataUSD={props.cryptoRates.dataUSD}
			/>
			<Why />
			<ContactUs />
		</div>
	);
}
