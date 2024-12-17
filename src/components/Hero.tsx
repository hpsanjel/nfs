import { Button } from "./ui/button";

const Hero = () => {
	return (
		<section className="relative">
			<div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center ">
				<div className="mx-auto max-w-5xl text-center">
					<h1 className="bg-gradient-to-r from-red-600 to-black bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
						Develop Your Football Skills at
						<span className="sm:block"> Nepal Football School</span>
					</h1>

					<p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed"> Join our world-class training programs and take your game to the next level</p>

					<div className="mt-8 flex flex-wrap justify-center gap-4">
						<Button size="lg">Get Started</Button>

						<Button variant="secondary" size="lg">
							Learn More
						</Button>
					</div>
				</div>
			</div>
			<div className="absolute inset-0 opacity-20 bg-cover bg-center bg-gradient-to-t from-[#ace] to-transparent"></div>
		</section>
	);
};

export default Hero;
