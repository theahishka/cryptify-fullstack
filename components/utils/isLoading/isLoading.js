import styles from "./isLoading.module.scss";

export default function IsLoading() {
	return (
		<div className={styles["lds-ripple"]}>
			<div className={styles["first-child"]}></div>
			<div className={styles["second-child"]}></div>
		</div>
	);
}
