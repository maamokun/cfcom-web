import Image from "next/image";

export default function Home() {
	return (
		<main>
			<div className="absolute left-[-50%] top-0 -z-10 aspect-video w-[150%] lg:inset-x-0 lg:h-screen lg:w-auto lg:translate-x-1/4 2xl:translate-x-1/3">
				<div className="relative h-full w-full before:absolute before:inset-x-0 before:inset-y-[-1px] before:z-10 before:bg-image-cover before:content-[''] lg:w-[calc(100%+2px)] lg:before:inset-x-[-1px] before:lg:bg-image-cover-lg"></div>
			</div>
		</main>
	);
}
