import Experience from "@/components/homepage/Experience";
import Features from "@/components/homepage/Features";
import Hero from "@/components/homepage/Hero";
import Integration from "@/components/homepage/Integration";
import Metrics from "@/components/homepage/Metrics";
import Security from "@/components/homepage/Security";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between w-[100%] my-0 mx-auto">
			<Hero />
			<div className="w-[80%] my-0 mx-auto">
				<Metrics />
				<Features />
				<Experience />
				<Security />
				<Integration />
			</div>
		</main>
	);
}
