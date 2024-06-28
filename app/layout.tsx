import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "True Face",
	description: "Face Recoginition software",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body
					className={`${plus_jakarta_sans.className} bg-gradient-to-b from-[#0E1118] to-[#1D2330] relative`}
				>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
