import { Spinner } from "@nextui-org/spinner";
import React from "react";

export default function Loading({
	loadingText,
	className,
}: {
	loadingText?: string;
	className?: string;
}) {
	return (
		<div className={`loading flex justify-center items-center ${className}`}>
			<Spinner color="primary" label={loadingText || "Loading..."} />
		</div>
	);
}
