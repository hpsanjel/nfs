const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white py-8">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:mx-6">
					<div className="space-y-2 max-w-sm">
						<img src="/nfs.jpeg" alt="Nepal Football School" className="h-12 w-auto rounded-full" />

						<h3 className="text-lg font-semibold">Nepal Football School</h3>
						<p>Developing the next generation of football talent in Nepal.</p>
					</div>
					<div className="">
						<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<a href="#" className="hover:underline">
									Home
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Programs
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									About
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Contact
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Contact Us</h3>
						<p>123 Football Street, Kathmandu, Nepal</p>
						<p>Email: info@nepalfootballschool.com</p>
						<p>Phone: +977 1 234 5678</p>
					</div>
				</div>
				<div className="mt-8 text-center">
					<p className="text-slate-400">&copy; 2024 Nepal Football School. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
