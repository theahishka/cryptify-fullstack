"use client";

import { useState } from "react";
import styles from "./contactUsForm.module.scss";
import rippleEffect from "../../rippleEffect/rippleEffect";
import IsLoading from "../../isLoading/isLoading";

export default function ContactUsForm() {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "",
		message: "",
	});

	const [validate, setValidate] = useState({
		fullName: false,
		email: false,
		phone: false,
		message: false,
	});

	const [isLoading, setIsLoading] = useState(false);
	const [messageSent, setMessageSent] = useState(false);

	// Validate Full Name
	function validateFullName(e) {
		setFormData((prevState) => ({
			...prevState,
			fullName: e.target.value,
		}));

		setValidate((prevState) => ({
			...prevState,
			fullName: true,
		}));

		const fullNameInputElement = e.target;
		fullNameInputElement.style.border = "";

		const fullNameRequirement = e.target.previousElementSibling;
		fullNameRequirement.style.display = "none";

		if (
			fullNameInputElement.value.length < 4 &&
			fullNameInputElement.value.length > 0
		) {
			fullNameInputElement.style.border = "1px solid red";
			fullNameRequirement.style.display = "block";

			setValidate((prevState) => ({
				...prevState,
				fullName: false,
			}));
		}
	}

	// Validate Email
	function validateEmail(e) {
		setFormData((prevState) => ({
			...prevState,
			email: e.target.value,
		}));

		setValidate((prevState) => ({
			...prevState,
			email: false,
		}));

		const emailRegex =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

		const emailInputElement = e.target;
		emailInputElement.style.border = "1px solid red";

		const emailRequirement = e.target.previousElementSibling;
		emailRequirement.style.display = "block";

		if (e.target.value.match(emailRegex)) {
			setValidate((prevState) => ({
				...prevState,
				email: true,
			}));
			emailInputElement.style.border = "";
			emailRequirement.style.display = "none";
		}
	}

	// Validate Phone
	function validatePhone(e) {
		setFormData((prevState) => ({
			...prevState,
			phone: e.target.value,
		}));

		setValidate((prevState) => ({
			...prevState,
			phone: true,
		}));

		const phoneInputElement = e.target;
		phoneInputElement.style.border = "";

		const phoneRequirement = e.target.previousElementSibling;
		phoneRequirement.style.display = "none";

		if (
			phoneInputElement.value.length < 4 &&
			phoneInputElement.value.length > 0
		) {
			phoneInputElement.style.border = "1px solid red";
			phoneRequirement.style.display = "block";

			setValidate((prevState) => ({
				...prevState,
				phone: false,
			}));
		}
	}

	// Validate Message
	function validateMessage(e) {
		setFormData((prevState) => ({
			...prevState,
			message: e.target.value,
		}));

		setValidate((prevState) => ({
			...prevState,
			message: true,
		}));

		const messageInputElement = e.target;
		messageInputElement.style.border = "";

		const messageRequirement = e.target.previousElementSibling;
		messageRequirement.style.display = "none";

		if (
			messageInputElement.value.length < 20 &&
			messageInputElement.value.length > 0
		) {
			messageInputElement.style.border = "1px solid red";
			messageRequirement.style.display = "block";

			setValidate((prevState) => ({
				...prevState,
				message: false,
			}));
		}
	}

	function submitForm(e) {
		async function sendRequest(formData) {
			try {
				setIsLoading(true);

				const response = await Email.send({
					SecureToken: "33e34cf5-bc6d-45ac-ace7-e84637e8b8fc",
					To: "exchange@cryptify.info",
					From: "exchange@cryptify.info",
					Subject: "Contact Form",
					Body: `Hello, my name is ${formData.fullName}. My email is ${formData.email}. My phone is ${formData.phone}.\n ${formData.message}`,
				});
				console.log("Email has been sent!");

				setIsLoading(false);

				setFormData({
					fullName: "",
					email: "",
					phone: "",
					message: "",
				});

				setMessageSent(true);
			} catch (e) {
				console.log(e);
			}
		}

		if (
			validate.fullName &&
			validate.email &&
			validate.phone &&
			validate.message
		) {
			return sendRequest(formData);
		}

		const fullNameText = e.target.parentElement.children[0].children[0];
		const fullNameInput = e.target.parentElement.children[0].children[1];

		const emailText = e.target.parentElement.children[1].children[0];
		const emailInput = e.target.parentElement.children[1].children[1];

		const phoneText = e.target.parentElement.children[2].children[0];
		const phoneInput = e.target.parentElement.children[2].children[1];

		const messageText = e.target.parentElement.children[3].children[0];
		const messageInput = e.target.parentElement.children[3].children[1];

		if (!validate.fullName) {
			fullNameText.style.display = "block";
			fullNameInput.style.border = "1px solid red";
		}

		if (!validate.email) {
			emailText.style.display = "block";
			emailInput.style.border = "1px solid red";
		}

		if (!validate.phone) {
			phoneText.style.display = "block";
			phoneInput.style.border = "1px solid red";
		}

		if (!validate.message) {
			messageText.style.display = "block";
			messageInput.style.border = "1px solid red";
		}

		const validationTimeout = setTimeout(() => {
			fullNameText.style.display = "none";
			fullNameInput.style.border = "";

			emailText.style.display = "none";
			emailInput.style.border = "";

			phoneText.style.display = "none";
			phoneInput.style.border = "";

			messageText.style.display = "none";
			messageInput.style.border = "";
		}, 1500);
	}

	return (
		<div className={styles["form-wrapper-wrapper"]}>
			<form
				className={[
					styles["form-wrapper"],
					isLoading && styles["form-wrapper-blurred"],
					messageSent && styles["form-wrapper-blurred"],
				].join(" ")}
			>
				<div className={styles["input-wrapper"]}>
					<p
						className={[
							styles["requirements"],
							styles["full-name-requirement"],
						].join(" ")}
						id="full-name-requirement"
					>
						* Minimum 3 characters.
					</p>
					<input
						type="text"
						name="full-name"
						id="full-name"
						value={formData.fullName}
						onChange={validateFullName}
						onBlur={(e) => {
							e.target.style.border = "";
							e.target.previousElementSibling.style.display =
								"none";
						}}
						onFocus={(e) => {
							if (
								e.target.value.length < 4 &&
								e.target.value.length > 0
							) {
								e.target.style.border = "1px solid red";
								e.target.previousElementSibling.style.display =
									"block";
							}
						}}
						minLength={3}
						maxLength={50}
						required
						placeholder="Your Name"
						className={[
							styles["full-name"],
							styles["input-box"],
						].join(" ")}
					></input>
				</div>
				<div className={styles["input-wrapper"]}>
					<p
						className={[
							styles["requirements"],
							styles["email-requirement"],
						].join(" ")}
						id="email-requirement"
					>
						* Please enter correct email.
					</p>
					<input
						type="email"
						name="email"
						id="email"
						value={formData.email}
						onChange={validateEmail}
						onBlur={(e) => {
							e.target.style.border = "";
							e.target.previousElementSibling.style.display =
								"none";
						}}
						onFocus={(e) => {
							const emailRegex =
								/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

							e.target.style.border = "1px solid red";

							const emailRequirement =
								e.target.previousElementSibling;
							emailRequirement.style.display = "block";

							if (e.target.value.match(emailRegex)) {
								e.target.style.border = "";

								emailRequirement.style.display = "none";
							}
						}}
						minLength={3}
						maxLength={50}
						required
						placeholder="Your Email"
						className={[styles["email"], styles["input-box"]].join(
							" "
						)}
					></input>
				</div>
				<div className={styles["input-wrapper"]}>
					<p
						className={[
							styles["requirements"],
							styles["phone-requirement"],
						].join(" ")}
						id="phone-requirement"
					>
						* Minimum 3 numbers.
					</p>
					<input
						type="tel"
						name="mobile-number"
						id="mobile-number"
						inputMode="numeric"
						pattern="[0-9]*"
						value={formData.phone}
						onChange={validatePhone}
						onBlur={(e) => {
							e.target.style.border = "";
							e.target.previousElementSibling.style.display =
								"none";
						}}
						onFocus={(e) => {
							if (
								e.target.value.length < 4 &&
								e.target.value.length > 0
							) {
								e.target.style.border = "1px solid red";
								e.target.previousElementSibling.style.display =
									"block";
							}
						}}
						minLength={3}
						maxLength={50}
						required
						placeholder="Your Phone"
						className={[
							styles["mobile-number"],
							styles["input-box"],
						].join(" ")}
					></input>
				</div>
				<div className={styles["input-wrapper"]}>
					<p
						className={[
							styles["requirements"],
							styles["message-requirement"],
						].join(" ")}
						id="message-requirement"
					>
						* Minimum 20 characters.
					</p>
					<textarea
						name="message"
						id="message"
						placeholder="Your Message"
						value={formData.message}
						onChange={validateMessage}
						onBlur={(e) => {
							e.target.style.border = "";
							e.target.previousElementSibling.style.display =
								"none";
						}}
						onFocus={(e) => {
							if (
								e.target.value.length < 20 &&
								e.target.value.length > 0
							) {
								e.target.style.border = "1px solid red";
								e.target.previousElementSibling.style.display =
									"block";
							}
						}}
						minLength={20}
						maxLength={250}
						required
						className={[
							styles["message"],
							styles["input-box"],
						].join(" ")}
					></textarea>
				</div>
				<button
					type="button"
					id="submit"
					className={styles["submit"]}
					onClick={(e) => {
						rippleEffect(e);
						submitForm(e);
					}}
				>
					Submit
				</button>
			</form>
			{isLoading && (
				<div className={styles["is-loading-wrapper"]}>
					<IsLoading />
				</div>
			)}
			{messageSent && (
				<div className={styles["message-sent-wrapper"]}>
					<p className={styles["message-sent"]}>
						Your message has been sent! We will reply within 24
						hours.
					</p>
				</div>
			)}
		</div>
	);
}
