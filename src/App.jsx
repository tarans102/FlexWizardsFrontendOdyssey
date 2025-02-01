import { Route, Routes,Route } from "react-router-dom";
import Diet from "./components/diet";
import Dashboard from "./pages/Dashboard";
import "./styles/base.css";

function App() {
    return (
        <Routes>
        <Route path="/diet" element={<Diet/>}></Route>
    
            <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
    );
}

export default App;
