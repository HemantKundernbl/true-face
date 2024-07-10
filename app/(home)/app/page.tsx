"use client";

import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

interface DropZoneProps {
	onImageDrop: (file: File) => void;
	loading: boolean;
	preview: string | null;
}

const DropZone: React.FC<DropZoneProps> = ({
	onImageDrop,
	loading,
	preview,
}) => {
	const { getRootProps, getInputProps } = useDropzone({
		accept: "image/*" as any,
		onDrop: (acceptedFiles: File[]) => {
			const file = acceptedFiles[0];
			const previewUrl = URL.createObjectURL(file);
			onImageDrop(file);
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
			{preview ? (
				<img
					src={preview}
					alt="Dropped"
					className="absolute inset-0 w-full h-full object-contain rounded-lg"
				/>
			) : (
				<div className="w-full h-32 flex justify-center items-center bg-gray-900 rounded-lg text-gray-400 text-center">
					Drag & Drop Image Here
				</div>
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
	const [selfie, setSelfie] = useState<File | null>(null);
	const [frame, setFrame] = useState<File | null>(null);
	const [previewSelfie, setPreviewSelfie] = useState<string | null>(null);
	const [previewFrame, setPreviewFrame] = useState<string | null>(null);
	const [modalMessage, setModalMessage] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [model, setModel] = useState<string>("ArcFace");
	const [activeTab, setActiveTab] = useState<string>("verification");
	const [analysisResult, setAnalysisResult] = useState<any>(null);
	const [analyzeImage, setAnalyzeImage] = useState<File | null>(null);
	const [previewAnalyze, setPreviewAnalyze] = useState<string | null>(null);

	const handleMatch = async () => {
		if (selfie && frame) {
			setLoading(true);
			try {
				const formData = new FormData();
				formData.append("selfie", selfie);
				formData.append("frame", frame);
				formData.append("model", model);

				const response = await axios.post(
					"http://127.0.0.1:8000/verify",
					formData,
					{
						headers: {
							"Content-Type": "multipart/form-data",
						},
					}
				);
				const result = response.data;
				setLoading(false);
				if (result["verified"]) {
					setModalMessage("Matched!");
				} else {
					setModalMessage("Not Matched!");
				}
			} catch (error) {
				console.error("Error matching faces:", error);
				setModalMessage("Something went wrong, please try again!");
				setLoading(false);
			}
		} else {
			alert("Please upload images in both drop zones.");
		}
	};

	const handleAnalyze = async () => {
		if (analyzeImage) {
			setLoading(true);
			try {
				const formData = new FormData();
				formData.append("image", analyzeImage);

				const response = await axios.post(
					"http://127.0.0.1:8000/analyze",
					formData,
					{
						headers: {
							"Content-Type": "multipart/form-data",
						},
					}
				);
				const result = response.data;
				setLoading(false);
				setAnalysisResult(result);
			} catch (error) {
				console.error("Error analyzing image:", error);
				setLoading(false);
			}
		} else {
			alert("Please upload an image for analysis.");
		}
	};

	return (
		<div className="min-h-screen bg-[#12161E] flex flex-col justify-center items-center pt-10 pb-20 ">
			<div className="w-[80%] my-0 mx-auto">
				{/* <h1 className="text-slate-400 text-2xl font-medium mb-8 text-center">
					Verify Your True Identity with True Face
				</h1> */}
				<div className="flex justify-center mb-8 mt-8">
					<button
						onClick={() => setActiveTab("verification")}
						className={`px-4 py-2 rounded-l-lg ${
							activeTab === "verification"
								? "bg-gray-800 text-white"
								: "bg-gray-600 text-gray-400"
						}`}
					>
						Verification
					</button>
					<button
						onClick={() => setActiveTab("analyze")}
						className={`px-4 py-2 rounded-r-lg ${
							activeTab === "analyze"
								? "bg-gray-800 text-white"
								: "bg-gray-600 text-gray-400"
						}`}
					>
						Analyze
					</button>
				</div>
				{activeTab === "verification" && (
					<div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-center gap-8 mx-auto mt-[60px]">
						{/* Drop Zone 1 */}
						<DropZone
							onImageDrop={(file) => {
								setSelfie(file);
								setPreviewSelfie(URL.createObjectURL(file));
							}}
							loading={loading}
							preview={previewSelfie}
						/>

						{/* Text and Button */}
						<div className="text-center text-white md:mx-8">
							<div className="mb-4">
								<label htmlFor="model" className="block mb-2">
									Select Model
								</label>
								<select
									id="model"
									value={model}
									onChange={(e) => setModel(e.target.value)}
									className="bg-gray-800 text-white rounded-lg py-2 px-4"
								>
									<option value="VGG-Face">VGG-Face</option>
									<option value="Facenet">Facenet</option>
									<option value="Facenet512">Facenet512</option>
									<option value="OpenFace">OpenFace</option>
									<option value="ArcFace">ArcFace</option>
								</select>
							</div>
							<button
								onClick={handleMatch}
								className="bg-gradient-to-r from-[#FA70D3] to-[#9D27FB] text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-8"
								disabled={loading}
							>
								{loading ? "...loading" : "Verify"}
							</button>
						</div>

						{/* Drop Zone 2 */}
						<DropZone
							onImageDrop={(file) => {
								setFrame(file);
								setPreviewFrame(URL.createObjectURL(file));
							}}
							loading={loading}
							preview={previewFrame}
						/>
					</div>
				)}
				{activeTab === "analyze" && (
					<div className="w-full max-w-4xl flex flex-col justify-center items-center gap-8 mx-auto mt-[60px]">
						{/* Drop Zone for Analyze */}
						<DropZone
							onImageDrop={(file) => {
								setAnalyzeImage(file);
								setPreviewAnalyze(URL.createObjectURL(file));
							}}
							loading={loading}
							preview={previewAnalyze}
						/>

						{/* Analyze Button */}
						<div className="text-center text-white">
							<button
								onClick={handleAnalyze}
								className="bg-gradient-to-r from-[#FA70D3] to-[#9D27FB] text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-8 mb-12"
								disabled={loading}
							>
								{loading ? "...loading" : "Analyze"}
							</button>
						</div>

						{/* Analysis Results */}
						{analysisResult && (
							<div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg mt-8 w-full">
								{loading ? (
									"...processing"
								) : (
									<>
										<h2 className="text-2xl font-semibold mb-4">
											Analysis Results
										</h2>
										<ul className="bg-gray-700 p-4 rounded-lg overflow-x-auto flex flex-col gap-2 text-xl capitalize">
											<li>
												Emotion:
												<span className="ml-2 text-green-500 ">
													{analysisResult[0].dominant_emotion}
												</span>
											</li>
											<li>
												Age
												<span className="ml-2 text-green-500 ">
													{analysisResult[0].age}
												</span>
											</li>
											<li>
												Gender:
												<span className="ml-2 text-green-500 ">
													{analysisResult[0].dominant_gender}
												</span>
											</li>
											<li>
												Race:
												<span className="ml-2 text-green-500 ">
													{analysisResult[0].dominant_race}
												</span>
											</li>
										</ul>
									</>
								)}
							</div>
						)}
					</div>
				)}
				{modalMessage && (
					<Modal message={modalMessage} onClose={() => setModalMessage(null)} />
				)}
			</div>
		</div>
	);
};

export default Page;
