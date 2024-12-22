const ContactForm = () => {
	return (
		<section className="relative bg-cover bg-center" style={{ backgroundImage: 'url("/training.jpeg")' }}>
			<div className="absolute inset-0 bg-green-900 opacity-80"></div> {/* Overlay for darker background */}
			<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 relative z-10">
				<div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2 ">
					{/* This empty div now serves as an image background */}
					<div className="flex items-center justify-center">
						{/* Form */}
						<div className="rounded-lg bg-white p-8 shadow-lg lg:p-12 max-w-lg w-full">
							<form action="#" className="space-y-4 text-white">
								<div>
									<label className="sr-only" htmlFor="name">
										Name
									</label>
									<input className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Name" type="text" id="name" />
								</div>

								<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
									<div>
										<label className="sr-only" htmlFor="email">
											Email
										</label>
										<input className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Email address" type="email" id="email" />
									</div>

									<div>
										<label className="sr-only" htmlFor="phone">
											Phone
										</label>
										<input className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Phone Number" type="tel" id="phone" />
									</div>
								</div>

								<div>
									<label className="sr-only" htmlFor="message">
										Message
									</label>
									<textarea className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Message" rows={8} id="message"></textarea>
								</div>

								<div className="mt-4">
									<button type="submit" className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
										Send Enquiry
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className="flex flex-col justify-center items-left space-y-2 text-white">
						<h1 className="text-3xl font-bold">Let us get connected</h1>
						<h2 className="text-xl text-slate-200">We would love to hear from you</h2>
						<p className="text-slate-300">Once we recieve your message, we would love to call you back and ....</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
