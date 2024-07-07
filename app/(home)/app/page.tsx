"use client";

import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

interface DropZoneProps {
	onImageDrop: (base64: string) => void;
	loading: boolean;
}

const DropZone: React.FC<DropZoneProps> = ({ onImageDrop, loading }) => {
	const [image, setImage] = useState<string | null>(null);

	const { getRootProps, getInputProps } = useDropzone({
		accept: "image/*",
		onDrop: (acceptedFiles: File[]) => {
			const file = acceptedFiles[0];
			const reader = new FileReader();
			reader.onload = (event: ProgressEvent<FileReader>) => {
				if (event.target && event.target.result) {
					let base64 = event.target.result as string;
					if (base64.startsWith("data:image/")) {
						base64 = base64.split(",")[1];
					}
					setImage(base64);
					onImageDrop(base64);
				}
			};
			reader.readAsDataURL(file);
		},
	});

	return (
		<div
			{...getRootProps()}
			className="relative w-full md:w-1/3 bg-transparent rounded-lg p-8 flex flex-col justify-center items-center border-dashed border-2 border-gray-600 cursor-pointer h-[500px]"
			style={{ position: "relative", overflow: "hidden" }}
		>
			<input {...getInputProps()} />
			<video
				className={`scan-overlay ${
					loading ? "active" : ""
				} absolute top-0 left-0 w-full h-full object-cover z-[-1]`}
				autoPlay
				loop
				muted
			>
				<source src="/scan2.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			{image ? (
				<img
					src={`data:image/jpeg;base64,${image}`}
					alt="Dropped"
					className="absolute inset-0 w-full h-full object-contain rounded-lg"
				/>
			) : (
				<>
					<div className="w-full h-32 flex justify-center items-center bg-gray-800 rounded-lg text-gray-400 text-center">
						Drag & Drop Image Here
					</div>
				</>
			)}
		</div>
	);
};

const Modal: React.FC<{ message: string; onClose: () => void }> = ({
	message,
	onClose,
}) => {
	const isMatched = message === "Matched!";
	const modalStyles = isMatched
		? "text-green-400 neon-green"
		: "text-red-400 neon-red";

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg relative flex flex-col items-center">
				<h2 className={`text-2xl font-semibold mb-4 ${modalStyles}`}>
					{message}
				</h2>
				<button
					onClick={onClose}
					className="bg-gradient-to-r from-[#FA70D3] to-[#9D27FB] text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 mt-4"
				>
					Close
				</button>
			</div>
		</div>
	);
};

const Page: React.FC = () => {
	const [selfie, setSelfie] = useState<string | null>(null);
	const [frame, setFrame] = useState<string | null>(null);
	const [modalMessage, setModalMessage] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	const handleMatch = async () => {
		if (selfie && frame) {
			setLoading(true);
			try {
				const response = await axios.post("http://127.0.0.1:8000/verify", {
					selfie,
					frame,
				});
				const result = response.data;
				setLoading(false);
				if (result["verified"]) {
					setModalMessage("Matched!");
				} else {
					setModalMessage("Not Matched!");
				}
			} catch (error) {
				console.error("Error matching faces:", error);
				setModalMessage("something went wrong please try again!");
				setLoading(false);
			}
		} else {
			alert("Please upload images in both drop zones.");
		}
	};

	return (
		<div className="min-h-screen bg-[#12161E] flex justify-center items-center">
			<div className="w-[80%] my-0 mx-auto">
				<h1 className="text-slate-400 text-2xl font-medium mb-8 text-center">
					Verify Your True Identity with True Face
				</h1>
				<div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-center gap-8 mx-auto mt-[60px]">
					{/* Drop Zone 1 */}
					<DropZone onImageDrop={setSelfie} loading={loading} />

					{/* Text and Button */}
					<div className="text-center text-white md:mx-8">
						<button
							onClick={handleMatch}
							className="bg-gradient-to-r from-[#FA70D3] to-[#9D27FB] text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-8"
							disabled={loading}
						>
							{loading ? "...loading" : "Match"}
						</button>
					</div>

					{/* Drop Zone 2 */}
					<DropZone onImageDrop={setFrame} loading={loading} />
				</div>
				{modalMessage && (
					<Modal message={modalMessage} onClose={() => setModalMessage(null)} />
				)}
			</div>
		</div>
	);
};

export default Page;
