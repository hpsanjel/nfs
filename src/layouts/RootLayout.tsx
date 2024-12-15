import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface RootLayoutProps {
	children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
	return (
		<div className="max-w-[1440px] mx-auto flex flex-col min-h-screen">
			<Header />
			<main className="flex-grow">{children}</main>
			<Footer />
		</div>
	);
};

export default RootLayout;
