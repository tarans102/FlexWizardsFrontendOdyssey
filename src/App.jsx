import { Route, Routes } from "react-router-dom";
import Community from "./components/community.jsx";
import Diet from "./components/diet.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Tutorials from "./components/Tutorials.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import "./styles/base.css";

function App() {
    return (
        <>
            <Routes>
                <Route path="/diet" element={<Diet />}></Route>
                <Route path="/" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Tutorials" element={<Tutorials />} />
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/community" element={<Community />}></Route>
            </Routes>
        </>
    );
}

export default App;
