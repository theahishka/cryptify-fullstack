import IsLoading from "@/components/utils/isLoading/isLoading";
import styles from "./loading.module.scss";

export default function Loading() {
	return (
		<div className={styles["loading-wrapper"]}>
			<div className={styles["is-loading-wrapper"]}>
				<IsLoading />
			</div>
		</div>
	);
}
