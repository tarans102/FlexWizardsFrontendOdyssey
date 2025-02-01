import { Route, Routes } from "react-router-dom";
import Diet from "./components/diet.jsx";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Tutorials from "./components/Tutorials";
import Dashboard from "./pages/Dashboard.jsx";
import "./styles/base.css";

function App() {
    return (
        <Routes>
            <Route path="/diet" element={<Diet />}></Route>
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Tutorials" element={<Tutorials />} />
            <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
    );
}

export default App;
