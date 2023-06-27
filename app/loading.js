import IsLoading from "@/components/utils/isLoading/isLoading";

export default function Loading() {
	return (
		<div className={"loading-wrapper"}>
			<div className={"is-loading-wrapper"}>
				<IsLoading />
			</div>
		</div>
	);
}
