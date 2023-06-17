import { useState } from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import MainRoutes from "./routes/MainRoutes";

function App() {
	const [count, setCount] = useState(0);
	const { t } = useTranslation();

	return <MainRoutes />;
}

export default App;
