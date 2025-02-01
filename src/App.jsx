import Login from "./components/Login";
import Signup from "./components/Signup";
import { Route, Routes } from "react-router-dom";
import Diet from "./components/diet";
import Dashboard from "./pages/Dashboard";
import "./styles/base.css";
import Tutorials from "./components/Tutorials";

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
