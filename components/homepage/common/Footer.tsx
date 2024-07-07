import { Facebook, InstagramIcon, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const organization_details = [
	{
		title: "true face",
		desc: "Building trust in people throughout the world",
		social: [
			{
				icon: <Linkedin color="#d2d3ff66" size={18} />,
				url: "/",
			},
			{
				icon: <Facebook color="#d2d3ff66" size={18} />,
				url: "/",
			},
			{
				icon: <InstagramIcon color="#d2d3ff66" size={18} />,
				url: "",
			},
		],
	},
];

const footer_links = [
	{
		title: "Quick Links",
		links: [
			{
				label: "Face Recognition",
				url: "/",
			},
			{
				label: "Industry ",
				url: "/",
			},
			{
				label: "Integration",
				url: "/",
			},
			{
				label: "About Us",
				url: "/",
			},
		],
	},
	{
		title: "Industries",
		links: [
			{
				label: "Retail",
				url: "/",
			},
			{
				label: "Government  ",
				url: "/",
			},
			{
				label: "Banking",
				url: "/",
			},
			{
				label: "Banking",
				url: "/",
			},
		],
	},
	{
		title: "Company",
		links: [
			{
				label: "Contact Us",
				url: "/",
			},
			{
				label: "Try Now ",
				url: "/",
			},
			{
				label: "Careers",
				url: "/",
			},
			{
				label: "Privacy Policy",
				url: "/",
			},
		],
	},
];

const Footer = () => {
	return (
		<div className="bg-[#171E26] px-10 py-16">
			<div className="flex flex-col items-start justify-between gap-20 w-[80%] my-0 mx-auto md:flex-row ">
				{organization_details.map((details) => {
					return (
						<div key={details.title} className="flex flex-col gap-5">
							<h2 className="text-[20px] font-bold uppercase text-trueface_text">
								{details.title}
							</h2>
							<p className="text-subtext text-[13px] font-medium">
								{details.desc}
							</p>
							<div className="flex gap-2">
								{details.social.map((social) => {
									return (
										<Link href={social.url} key={social.url}>
											{social.icon}
										</Link>
									);
								})}
							</div>
						</div>
					);
				})}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
					{footer_links.map((links) => {
						return (
							<div key={links.title}>
								<h2 className="font-medium text-[17px] text-trueface_text capitalize">
									{links.title}
								</h2>
								<div className="flex flex-col gap-4 mt-5">
									{links.links.map((l) => {
										return (
											<Link
												key={l.label}
												href={l.url}
												className="font-medium text-[14px] text-subtext"
											>
												{l.label}
											</Link>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Footer;
