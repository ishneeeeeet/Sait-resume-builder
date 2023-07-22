import Header from "./components/Header";
import Course from "./pages/Course";
import Home from "./pages/Home";
import PersonalInfo from "./pages/PersonalInfo";
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import TemplateSelection from "./pages/TemplateSelection";

import TemplateOne from "./templates/TemplateOne";
import TemplateTwo from "./templates/TemplateTwo";
import TemplateThree from "./templates/TemplateThree";
import Loading from "./pages/Loading";
import { useState } from "react";

function App() {
 
  return (
    <>
     
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/templateselection" element={<TemplateSelection />} />
        <Route path="/personalinfo" element={<PersonalInfo />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/templateone" element={<TemplateOne />} />
        <Route path="/templateTwo" element={<TemplateTwo />} />
        <Route path="/templateThree" element={<TemplateThree />} />
      </Routes>
    </>
  );
}

export default App;
