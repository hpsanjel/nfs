const Hero = () => {
	return (
		<section className="relative">
			<div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center ">
				<div className="mx-auto max-w-5xl text-center">
					<h1 className="bg-gradient-to-r from-red-600 via-blue-600 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
						Develop Your Football Skills at
						<span className="sm:block"> Nepal Football School</span>
					</h1>

					<p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed"> Join our world-class training programs and take your game to the next level</p>

					<div className="mt-8 flex flex-wrap justify-center gap-4">
						<a className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto" href="#">
							Get Started
						</a>

						<a className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-black hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" href="#">
							Learn More
						</a>
					</div>
				</div>
			</div>
			<div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundColor: " #aceace" }}></div>
		</section>
	);
};

export default Hero;
