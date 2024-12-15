import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";

function App() {
	return (
		<Router>
			<RootLayout>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</RootLayout>
		</Router>
	);
}

export default App;
