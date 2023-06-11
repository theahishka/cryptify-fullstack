import ContactUsDetails from "../utils/contactUs/contactUsDetails";
import ContactUsForm from "../utils/contactUs/contactUsForm";
import ContactUsPC from "../utils/contactUs/contactUsPC";
import HeroBanner from "./heroBanner/heroBanner";
import Rates from "./rates/rates";
import Why from "./why/why";

export default function HomePage() {
	return (
		<div>
			<HeroBanner />
			<Rates />
			<Why />
			<ContactUsForm />
			<ContactUsDetails />
			<ContactUsPC />
		</div>
	);
}
