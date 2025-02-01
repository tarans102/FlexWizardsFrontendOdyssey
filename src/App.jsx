import { Routes,Route } from "react-router-dom";
import Diet from "./components/diet";

function App() {
    return <Routes>
        <Route path="/diet" element={<Diet/>}></Route>
    </Routes>;
}

export default App;
