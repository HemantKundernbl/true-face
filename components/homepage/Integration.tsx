import Image from "next/image";
import React from "react";

const Integration = () => {
	return (
		<div className="mb-[10%]">
			<div className="flex gap-20 justify-center items-center">
				<div className="flex-1 ">
					<h2 className="font-bold text-[35px] text-trueface_text">
						<span className="underline  decoration-8 decoration-cta mr-2">
							On Site
						</span>
						Integration
					</h2>
					<p className="text-[14px] font-medium text-subtext mt-5 text-right">
						With the ability to connect into your current system with less
						operational management and onboard only real users, Facia offers a
						cost-effective solution.
					</p>
				</div>
				<div className="flex-1">
					<Image
						src="/images/integration/onpremises.png"
						alt="on site integration"
						height={500}
						width={500}
					/>
				</div>
			</div>
			<div className="flex flex-row-reverse gap-20 justify-center items-center mt-20">
				<div className="flex-1 ">
					<h2 className="font-bold text-[35px] text-trueface_text">
						<span className="underline  decoration-8 decoration-cta mr-2">
							SASS
						</span>
						Integration
					</h2>
					<p className="text-[14px] font-medium text-subtext mt-5 text-right">
						With the ability to connect into your current system with less
						operational management and onboard only real users, Facia offers a
						cost-effective solution.
					</p>
				</div>
				<div className="flex-1">
					<Image
						src="/images/integration/sass.png"
						alt="on site integration"
						height={500}
						width={500}
					/>
				</div>
			</div>
		</div>
	);
};

export default Integration;
