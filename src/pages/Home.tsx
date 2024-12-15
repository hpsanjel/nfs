import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Layout1 from "@/components/Layout1";
import ContactForm from "@/components/ContactForm";

const Home = () => {
	return (
		<>
			<Hero />
			<Features />
			<Layout1 />
			<Testimonials />
			<ContactForm />
		</>
	);
};

export default Home;
