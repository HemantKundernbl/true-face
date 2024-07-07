import Image from "next/image";
import React from "react";

const features = [
	{
		img: "/images/feature_1.png",
		range: "1:1",
		text: "Image to Image",
	},
	{
		img: "/images/feature_2.png",
		range: "1:N",
		text: "Image to Database",
	},
	{
		img: "/images/feature_3.png",
		range: "1:1",
		text: "Image to Video",
	},
	{
		img: "/images/feature_4.png",
		range: "1:1",
		text: "Video to Database",
	},
];

const Features = () => {
	return (
		<div className="my-[10%]">
			<div className="flex flex-col items-center gap-2 text-center">
				<p className="text-[15px] md:text-[22px] text-subtext font-medium">
					Your Security, Your Convenience
				</p>
				<h2 className="text-[30px] md:text-[49px] font-bold text-trueface_text text-center">
					Facial
					<span className="underline decoration-wavy decoration-8 decoration-cta">
						Recognition <br />
					</span>
					That Works With
				</h2>
				<small className="text-subtext text-[10px] md:text-[14px] font-medium leading-6">
					Our cutting-edge facial recognition technology seamlessly <br />
					integrates with a wide range of applications and industries.
				</small>
			</div>
			<div className="grid grid-cols-1  md:grid-cols-4 gap-5 mt-[5%] ">
				{features.map((feature) => {
					return (
						<div
							key={feature.text}
							className="bg-[#171E26] rounded-xl px-8 py-14 flex flex-col items-center gap-3"
						>
							<Image
								src={feature.img}
								alt={feature.text}
								width={500}
								height={500}
							/>
							<small className="text-[15px] md:text-[20px] font-bold text-trueface_text">
								{feature.range}
							</small>
							<p className="text-subtext text-12px md:text-[17px] font-medium">
								{feature.text}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Features;
