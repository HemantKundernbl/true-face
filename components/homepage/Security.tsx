import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";

const Security = () => {
	return (
		<div className="mb-[10%] flex flex-col gap-3">
			<h1 className="text-[30px] md:text-title text-trueface_text text-center font-bold">
				Extreme
				<span className="underline decoration-wavy decoration-8 decoration-cta">
					Security
				</span>
			</h1>
			<p className="text-subtext text-[14px] md:text-[12px] font-medium text-center mt-6">
				Combat Biometric Fraud With Liveness Check and <br />
				Facial Recognition
			</p>
			<div className="grid grid-cols-1 md:grid-cols-3 m-[5%]">
				<div className="flex flex-col gap-6 justify-center md:justify-start">
					<small className="text-subtext font-medium text-[18px] border-[0.3px] border-[#59595933] p-4 w-fit rounded-lg">
						Spoofing
					</small>
					<small className="text-subtext font-medium text-[18px] border-[0.3px] border-[#59595933] p-4 w-fit rounded-lg">
						Face2Face Attacks
					</small>
					<small className="text-subtext font-medium text-[18px] border-[0.3px] border-[#59595933] p-4 w-fit rounded-lg">
						Deepfake
					</small>
				</div>
				<div>
					<Image
						src="/images/shield.png"
						alt="shield"
						height={400}
						width={400}
					/>
				</div>
				<div className="flex flex-col justify-start items-end gap-6">
					<small className="text-subtext font-medium text-[18px] md:text-[14px] border-[0.3px] border-[#59595933] p-4 w-fit rounded-lg">
						Lookalikes
					</small>
					<small className="text-subtext font-medium text-[18px] md:text-[14px] border-[0.3px] border-[#59595933] p-4 w-fit rounded-lg">
						Hyper-realistic masks
					</small>
					<small className="text-subtext font-medium text-[18px] md:text-[14px] border-[0.3px] border-[#59595933] p-4 w-fit rounded-lg">
						Face swaps
					</small>
				</div>
			</div>
			<div className="flex justify-center items-center">
				<button className="text-[13px] md:text-[10px] font-semibold flex justify-center items-center gap-2 uppercase bg-cta outline outline-8 outline-cta_outline text-trueface_text w-fit px-4 py-2 rounded-lg">
					try now <Play fill="#fff" size={16} />
				</button>
			</div>
		</div>
	);
};

export default Security;
