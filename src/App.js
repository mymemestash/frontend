import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>

          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup/>} />
     
        </Routes>
      </Router>
    </div>
  );
}

export default App;
