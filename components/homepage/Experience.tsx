import Image from "next/image";
import React from "react";

const experience = [
	{
		img: "/images/experience/exp_1.png",
		title: "Implementation",
		description:
			"With innovation at our core, we continuously enhance our offerings new features to give clients a genuinely seamless experience.",
	},
	{
		img: "/images/experience/exp_2.png",
		title: "Customized Solution",
		description:
			"We assist enterprises in their face verification journeys with the proper skill set. Industry expertise, and ability to designs domain-specific highly customized solutions.",
	},
	{
		img: "/images/experience/exp_3.png",
		title: "Support",
		description:
			"With innovation at our core, we continuously enhance our offerings new features to give clients a genuinely seamless experience.",
	},
];

const Experience = () => {
	return (
		<div className="mb-[10%]">
			<h1 className="text-trueface_text text-[30px] md:text-title font-bold text-center ">
				The Face ID <br />
				<span className="underline decoration-wavy decoration-8 decoration-cta">
					Experience
				</span>
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[8%] mt-10">
				{experience.map((exp) => {
					return (
						<div
							key={exp.title}
							className="bg-[#171E26] flex flex-col items-center gap-3 text-center border-[0.3px] border-[#59595933] rounded-xl px-8 py-8"
						>
							<Image src={exp.img} alt={exp.title} width={100} height={100} />
							<h2 className="text-trueface_text font-bold  text-[15px]  md:text-[21px]">
								{exp.title}
							</h2>
							<p className="text-subtext  text-[10px]  md:text-[14px] font-medium">
								{exp.description}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Experience;
