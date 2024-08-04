"use client";
import logo from "../assets/cfcom.png";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
} from "framer-motion";
import { tv } from "tailwind-variants";
import { useRouter } from "next/navigation";

const style = tv({
	base: "flex justify-between fixed inset-x-0 top-0 z-10 w-full items-center px-4 text-white transition-[padding-top,padding-bottom,background] duration-500 md:px-7 2xl:px-[calc((100vw-1536px)/2+5rem)]",
	variants: {
		scrolled: {
			true: "py-3 backdrop-blur-md bg-green-100 bg-opacity-20",
			false: "py-3 py-8",
		},
	},
});

export default function Header() {
	const router = useRouter();
	const { scrollY } = useScroll();
	const [scrolled, setScrolled] = useState(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		latest > 10 ? setScrolled(true) : setScrolled(false);
	});

	return (
		<header className={style({ scrolled })}>
			<div className="flex w-full justify-between lg:justify-normal lg:gap-5">
				<Link
					href="/"
					aria-label="logo"
					className="relative h-8 w-32 md:h-11 2xl:h-11 2xl:w-40"
				>
					<Image
						src={logo.src}
						fill
						style={{ objectFit: "contain" }}
						alt="logo"
						className="rounded-full"
					/>
				</Link>
				<button
					type="button"
					className="mr-2 hidden h-10 whitespace-nowrap rounded-lg border border-green-100 border-opacity-40 px-4 text-center font-poppins text-sm tracking-wider text-white sm:block lg:h-12 lg:px-6 lg:text-base"
					onClick={() => router.push("/")}
				>
					Server
				</button>
				<button
					type="button"
					className="mr-2 hidden h-10 whitespace-nowrap rounded-lg border border-green-100 border-opacity-40 px-4 text-center font-poppins text-sm tracking-wider text-white sm:block lg:h-12 lg:px-6 lg:text-base"
					onClick={() => router.push("/")}
				>
					Merch
				</button>
				<button
					type="button"
					className="mr-2 hidden h-10 whitespace-nowrap rounded-lg border border-green-100 border-opacity-40 px-4 text-center font-poppins text-sm tracking-wider text-white sm:block lg:h-12 lg:px-6 lg:text-base"
					onClick={() => router.push("/")}
				>
					Donate
				</button>
				<button
					type="button"
					className="mr-2 hidden h-10 whitespace-nowrap rounded-lg border border-green-100 border-opacity-40 px-4 text-center font-poppins text-sm tracking-wider text-white sm:block lg:h-12 lg:px-6 lg:text-base"
					onClick={() => router.push("/")}
				>
					Wiki
				</button>
			</div>
		</header>
	);
}
