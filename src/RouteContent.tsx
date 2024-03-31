import { Route, Routes } from "react-router-dom"
import { DemoPanel } from "./DemoPanel"

export const RouteContent = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<DemoPanel />} />
        </Routes>
    )
}