import { BrowserRouter, Routes, Route } from "react-router-dom";
import Build from "./Screens/Build";
import Home from "./Screens/Home";
import "./App.css";
import ResumeList from "./Screens/ResumeList";
import AboutUs from "./Screens/AboutUs";
import Error from "./Screens/Error";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route extact path="/" element={<Home />} />
          <Route extact path="/build" element={<Build />} />
          <Route extact path="/resumelist" element={<ResumeList />} />
          <Route extact path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
