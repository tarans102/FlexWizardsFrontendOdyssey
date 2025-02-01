import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./styles/base.css";

function App() {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
    );
}

export default App;
