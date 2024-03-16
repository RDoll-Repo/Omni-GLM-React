import { Route, Routes } from "react-router-dom"
import { DemoPanel } from "./DemoPanel"

export const RouteContent = () => {
    return (
        <Routes>
            <Route
                path="demoPanel"
                element={<DemoPanel />} />
        </Routes>
    )
}