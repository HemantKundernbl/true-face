import { Mouse, Play } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero = () => {
	return (
		<div className="w-full min-h-screen flex justify-between items-center relative">
			<video
				className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
				autoPlay
				muted
				loop
			>
				<source src="hero-video2.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className="video-overlay"></div>
			<div className="w-auto my-0 mx-auto text-trueface_text h-full flex flex-col justify-center items-center text-center gap-5">
				<h1 className="font-extrabold text-3xl md:text-6xl leading-[1.2]">
					Verify{" "}
					<span className="bg-gradient-to-l from-[#FA70D3] to-[#9D27FB] bg-clip-text text-transparent">
						8 Billion+
					</span>
					<br />
					Faces with us!
				</h1>
				<p className="text-subtext text-lg md:text-xl font-medium">
					Face Liveness Verification Technology
				</p>
				<Link
					href="/app"
					target="_blank"
					className="button-49 
        "
				>
					try now
				</Link>
			</div>
			<Mouse
				size={60}
				strokeWidth={1.25}
				color="#fff"
				className="absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce hidden lg:block"
			/>
		</div>
	);
};

export default Hero;
