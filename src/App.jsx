import { Route, Routes } from "react-router-dom";
import Community from "./components/community.jsx";
import Diet from "./components/diet.jsx";
import Login from "./components/Login";
import Navbar from "./components/Navbar.jsx";
import Signup from "./components/Signup";
import Tutorials from "./components/Tutorials";
import Dashboard from "./pages/Dashboard.jsx";
import "./styles/base.css";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/diet" element={<Diet />}></Route>
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Tutorials" element={<Tutorials />} />
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/community" element={<Community />}></Route>
            </Routes>
        </>
    );
}

export default App;
