"use client";
import type { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";
import Header from "./components/Header";

export default function Page({ children }: { children: ReactNode }) {
	return (
		<>
			<div className="min-h-screen relative">
				<Header />
				<div className="">
					<NextUIProvider>{children}</NextUIProvider>
				</div>
			</div>
		</>
	);
}
