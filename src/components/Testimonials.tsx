import KeenSlider, { KeenSliderInstance } from "keen-slider";
import { useEffect, useRef } from "react";
import "keen-slider/keen-slider.min.css";

const Testimonials = () => {
	const sliderRef = useRef<HTMLDivElement | null>(null);
	const sliderInstance = useRef<KeenSliderInstance | null>(null);

	useEffect(() => {
		if (sliderRef.current) {
			sliderInstance.current = new KeenSlider(sliderRef.current, {
				loop: true,
				slides: {
					origin: "center",
					perView: 1.25,
					spacing: 16,
				},
				breakpoints: {
					"(min-width: 1024px)": {
						slides: {
							origin: "auto",
							perView: 1.5,
							spacing: 32,
						},
					},
				},
			});

			// Cleanup slider instance on unmount
			return () => sliderInstance.current?.destroy();
		}
	}, []);

	const handlePrevClick = () => {
		sliderInstance.current?.prev();
	};

	const handleNextClick = () => {
		sliderInstance.current?.next();
	};

	return (
		<section className="bg-gray-50">
			<div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
					<div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Don't just take our word for it...</h2>
						<p className="mt-4 text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo placeat harum porro optio fugit a culpa sunt id!</p>
						<div className="hidden lg:mt-8 lg:flex lg:gap-4">
							<button aria-label="Previous slide" onClick={handlePrevClick} className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 rtl:rotate-180">
									<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
								</svg>
							</button>
							<button aria-label="Next slide" onClick={handleNextClick} className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 rtl:rotate-180">
									<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
								</svg>
							</button>
						</div>
					</div>
					<div className="-mx-6 lg:col-span-2 lg:mx-0">
						<div ref={sliderRef} className="keen-slider">
							<div className="keen-slider__slide">
								<blockquote className="bg-white p-6 shadow-sm sm:p-8 lg:p-12">
									<p className="text-lg font-medium text-gray-900">Great experience with their service!</p>
									<footer className="mt-4 text-sm text-gray-600">- John Doe</footer>
								</blockquote>
							</div>
							<div className="keen-slider__slide">
								<blockquote className="bg-white p-6 shadow-sm sm:p-8 lg:p-12">
									<p className="text-lg font-medium text-gray-900">Highly recommend this company!</p>
									<footer className="mt-4 text-sm text-gray-600">- Jane Smith</footer>
								</blockquote>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
