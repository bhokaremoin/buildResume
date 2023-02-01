import { BrowserRouter, Routes, Route } from "react-router-dom";
import Build from "./Screens/Build";
import Home from "./Screens/Home";
import "./App.css";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import ResumeList from "./Screens/ResumeList";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route extact path="/" element={<Home />} />
          <Route extact path="/build" element={<Build />} />
          <Route extact path="/login" element={<Login />} />
          <Route extact path="/signup" element={<Signup />} />
          <Route extact path="/resumelist" element={<ResumeList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
