"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const ContactForm = () => {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormState((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log("Form submitted:", formState);
	};

	return (
		<section className="relative bg-red-900 overflow-hidden">
			<div className="absolute inset-0 bg-[url('/circuit-board.svg')] opacity-10"></div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
				<motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:w-1/2 mb-12 lg:mb-0">
					<h1 className="text-5xl font-extrabold text-white mb-6">Let's Connect</h1>
					<p className="text-xl text-purple-200 mb-8">We're excited to hear from you and explore how we can collaborate.</p>

					<div className="space-y-4">
						{[
							{ icon: Phone, text: "9861251778/9742405657" },
							{ icon: Mail, text: "contact@nepalfootballschool.com" },
							{ icon: MapPin, text: "Velocity Futsal, Ratopool, Kathmandu" },
						].map((item, index) => (
							<motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex items-center text-white">
								<item.icon className="w-6 h-6 mr-3 text-purple-300" />
								<span>{item.text}</span>
							</motion.div>
						))}
					</div>
				</motion.div>

				<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="lg:w-1/2 max-w-md w-full">
					<form onSubmit={handleSubmit} className="space-y-6">
						{[
							{ name: "name", type: "text", placeholder: "Your Name" },
							{ name: "email", type: "email", placeholder: "Your Email" },
							{ name: "phone", type: "tel", placeholder: "Your Phone" },
						].map((field) => (
							<motion.div key={field.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="relative">
								<input type={field.type} name={field.name} value={formState[field.name as keyof typeof formState]} onChange={handleInputChange} placeholder={field.placeholder} className="w-full bg-white bg-opacity-10 rounded-lg border border-red-300 focus:border-white px-4 py-3 text-white placeholder-purple-300 outline-none transition-colors duration-300" />
							</motion.div>
						))}

						<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
							<textarea name="message" value={formState.message} onChange={handleInputChange} placeholder="Your Message" rows={4} className="w-full bg-white bg-opacity-10 rounded-lg border border-red-300 focus:border-white px-4 py-3 text-white placeholder-purple-300 outline-none transition-colors duration-300"></textarea>
						</motion.div>

						<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
							<button type="submit" className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
								<span>Send Message</span>
								<Send className="w-5 h-5 ml-2" />
							</button>
						</motion.div>
					</form>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactForm;
