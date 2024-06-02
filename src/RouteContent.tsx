import { Route, Routes } from "react-router-dom"
import { DemoPanel } from "./views/demoPanel/DemoPanel"

export const RouteContent = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<DemoPanel />} />
        </Routes>
    )
}
