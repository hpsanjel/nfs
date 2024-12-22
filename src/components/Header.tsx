import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";
import EnrollForm from "./EnrollForm";

const Header = () => {
	const [isEnrollFormVisible, setIsEnrollFormVisible] = useState<boolean>(false);
	function handleEnrollFormToggle(): void {
		setIsEnrollFormVisible((prev) => !prev);
	}
	return (
		<>
			<header className="bg-white shadow-sm">
				<div className="container mx-auto px-4 py-4 flex justify-between items-center">
					<Link to="/">
						<div className="flex items-center">
							<img src="/nfs.png" alt="Nepal Football School" className="h-24 w-auto" />
							<span className="ml-2 text-xl font-bold text-gray-800">Nepal Football School</span>
						</div>
					</Link>
					<nav>
						<ul className="flex space-x-4">
							<li>
								<a href="#" className="text-gray-600 hover:text-gray-800">
									Home
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-600 hover:text-gray-800">
									Programs
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-600 hover:text-gray-800">
									About
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-600 hover:text-gray-800">
									Contact
								</a>
							</li>
						</ul>
					</nav>
					<Button className="text-md font-semibold" variant="destructive" onClick={handleEnrollFormToggle} size="lg">
						{isEnrollFormVisible ? "Close Enrollment Form" : "Open Enrollment Form"}
					</Button>
				</div>
			</header>
			{/* Smooth transition effect */}
			<div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isEnrollFormVisible ? "max-h-screen" : "max-h-0"}`}>
				<div className="bg-gray-100 py-6 px-4 shadow-md">
					<EnrollForm />
				</div>
			</div>{" "}
		</>
	);
};

export default Header;
