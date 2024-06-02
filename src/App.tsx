import { LocalizationProvider } from "@mui/x-date-pickers"
import "./App.css"
import { RouteContent } from "./RouteContent"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<RouteContent />
		</LocalizationProvider>
	)
}

export default App
