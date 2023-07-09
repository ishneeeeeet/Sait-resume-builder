import "./App.css";
import Header from "./components/Header";
import Course from "./pages/Course";
import Home from "./pages/Home";
import PersonalInfo from "./pages/PersonalInfo";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/personalinfo" element={<PersonalInfo />} />
      </Routes>
    </>
  );
}

export default App;
