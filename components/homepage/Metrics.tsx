import React from "react";
import { useMedia } from "react-use";

const metrics = [
	{
		title: "1300+",
		text: "Hours of AI Modeling",
	},
	{
		title: "5",
		text: "Second Verification",
	},
	{
		title: "15k+",
		text: "AI model deployed",
	},
	{
		title: "250k",
		text: "Attacks Defended",
	},
];

const Metrics = () => {
	const isMobile = useMedia("(max-width: 720px)");
	const isTab = useMedia("(max-width: 720px)");

	return (
		<div
			className={`bg-[#171E26] flex flex-col md:flex-row justify-between items-center w-full shadow-custom rounded-3xl px-20 py-12 mt-10 `}
		>
			{metrics.map((metric) => {
				return (
					<div key={metric.title} className={`flex flex-col items-center `}>
						<h3 className="text-trueface_text text-[30px] md:text-[48px] font-bold">
							{metric.title}
						</h3>
						<p className="text-subtext font-medium text-[10px] md:text-[15px]">
							{metric.text}
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default Metrics;
