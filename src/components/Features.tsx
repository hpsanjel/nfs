import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

const features = [
	{
		title: "Expert Coaches",
		description: "Learn from experienced professionals with international coaching licenses.",
	},
	{
		title: "State-of-the-art Facilities",
		description: "Train in our modern facilities with the latest equipment and technology.",
	},
	{
		title: "Personalized Training",
		description: "Receive tailored training programs to suit your individual needs and goals.",
	},
	{
		title: "Competitive Matches",
		description: "Participate in regular matches and tournaments to apply your skills.",
	},
];

const Features = () => {
	return (
		<section className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">Why Choose Nepal Football School?</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature, index) => (
						<Card key={index}>
							<CardHeader>
								<CardTitle>{feature.title}</CardTitle>
								<CardDescription>{feature.description}</CardDescription>
							</CardHeader>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
