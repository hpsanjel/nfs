"use client";

import { useState } from "react";

export default function EnrollForm() {
	const [formData, setFormData] = useState({
		name: "",
		yearofbirth: "",
		email: "",
		phone: "",
		sport: "", // "futsal" or "football"
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Handle form submission here, e.g., send data to the server
		console.log("Form Data Submitted:", formData);
	};

	return (
		<section className="max-w-3xl mx-auto px-4 py-10">
			<h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Enroll for Futsal or Football Training</h2>
			<form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
				<div className="grid grid-cols-1 gap-6 mb-6">
					{/* Name Field */}
					<div>
						<label htmlFor="name" className="block text-sm font-medium text-gray-700">
							Full Name
						</label>
						<input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your full name" />
					</div>

					{/* yearofbirth Field */}
					<div>
						<label htmlFor="yearofbirth" className="block text-sm font-medium text-gray-700">
							Birth Year
						</label>
						<input type="number" id="yearofbirth" name="yearofbirth" value={formData.yearofbirth} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your Birth Year" min="1" />
					</div>

					{/* Email Field */}
					<div>
						<label htmlFor="email" className="block text-sm font-medium text-gray-700">
							Email Address
						</label>
						<input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your email address" />
					</div>

					{/* Phone Field */}
					<div>
						<label htmlFor="phone" className="block text-sm font-medium text-gray-700">
							Phone Number
						</label>
						<input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your phone number" />
					</div>

					{/* Sport Selection */}
					<div>
						<label htmlFor="sport" className="block text-sm font-medium text-gray-700">
							Select Training Type
						</label>
						<div className="mt-1 flex space-x-4">
							<div className="flex items-center">
								<input type="radio" id="futsal" name="sport" value="futsal" onChange={handleChange} required className="h-4 w-4 text-blue-500 focus:ring-blue-500" />
								<label htmlFor="futsal" className="ml-2 text-sm text-gray-700">
									Futsal
								</label>
							</div>
							<div className="flex items-center">
								<input type="radio" id="football" name="sport" value="football" onChange={handleChange} required className="h-4 w-4 text-blue-500 focus:ring-blue-500" />
								<label htmlFor="football" className="ml-2 text-sm text-gray-700">
									Football
								</label>
							</div>
						</div>
					</div>
				</div>

				{/* Submit Button */}
				<div className="flex justify-center">
					<button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500">
						Submit Enrollment
					</button>
				</div>
			</form>
		</section>
	);
}
