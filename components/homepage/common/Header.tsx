import Link from "next/link";
import React from "react";

const Header = () => {
	const links = [
		{ label: "Company", path: "/", version: 0 },
		{ label: "Pricing", path: "/", version: 0 },
		{ label: "Resources", path: "/", version: 1 },
		{ label: "Blog", path: "/", version: 0 },
	];

	return (
		<div className="bg-black w-full my-0 mx-auto  absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-trueface_text ">
			<div className="w-[80%] my-0 mx-auto flex justify-between py-3 flex justify-center items-center">
				<span className="uppercase font-logo text-xl text-white ">
					True Face
				</span>

				<div className="flex justify-center items-center gap-10">
					{links.map((link) => {
						return (
							<Link key={link.label} href={link.path} className="">
								{link.label}
								{link.version === 1 && (
									<span className=" bg-badge align-bottom text-badge p-1 rounded-3xl text-pretty text-center ml-1 uppercase font-medium">
										new
									</span>
								)}
							</Link>
						);
					})}
				</div>

				<button className="uppercase rounded-md bg-cta px-5 py-2 text-sm font-medium">
					Contact Us
				</button>
			</div>
		</div>
	);
};

export default Header;
