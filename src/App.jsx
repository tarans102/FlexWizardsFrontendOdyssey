import { Route, Routes } from "react-router-dom";
import Diet from "./components/diet.jsx";
import Login from "./components/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import "./styles/base.css";

function App() {
    return (
        <Routes>
            <Route path="/diet" element={<Diet />}></Route>
            <Route path="/Login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
    );
}

export default App;
