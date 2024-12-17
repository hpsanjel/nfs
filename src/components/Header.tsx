import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
	return (
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
				<Button variant="destructive" size="lg">
					Enroll Now
				</Button>
			</div>
		</header>
	);
};

export default Header;
