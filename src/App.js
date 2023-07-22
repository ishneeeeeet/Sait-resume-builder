import Header from "./components/Header";
import Course from "./pages/Course";
import Home from "./pages/Home";
import PersonalInfo from "./pages/PersonalInfo";
import { Routes, Route, useNavigate } from "react-router-dom";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import TemplateSelection from "./pages/TemplateSelection";

import TemplateOne from "./templates/TemplateOne";
import TemplateTwo from "./templates/TemplateTwo";
import TemplateThree from "./templates/TemplateThree";


import {
  ClerkProvider,
  RedirectToSignIn,
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";

function App() {
  const navigate = useNavigate();
  return (
    <ClerkProvider
      publishableKey="pk_test_dG91Y2hlZC1tdXNrb3gtNDIuY2xlcmsuYWNjb3VudHMuZGV2JA"
      navigate={(to) => navigate(to)}
    >
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/sign-in/*"
          element={<SignIn routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
        <Route
          path="/course"
          element={
            <>
              <SignedIn>
                <Course />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route path="/templateselection" element={<TemplateSelection />} />
        <Route path="/personalinfo" element={<PersonalInfo />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/templateone" element={<TemplateOne />} />
        <Route path="/templateTwo" element={<TemplateTwo />} />
        <Route path="/templateThree" element={<TemplateThree />} />
      </Routes>
    </ClerkProvider>
  );
}

export default App;
