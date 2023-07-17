import React, { createContext, useState, useEffect } from "react";

const resumeContext = createContext();

const ContextProvider = ({ children }) => {
  const [resume, setResume] = useState(() => {
    try {
      const storedResume = localStorage.getItem("resume");
      return storedResume ? JSON.parse(storedResume) : {
        course: "",
        fname: "",
        lname: "",
      };
    } catch (error) {
      console.error("Error retrieving resume data from local storage:", error);
      return {
        course: "",
        fname: "",
        lname: "",
      };
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("resume", JSON.stringify(resume));
    } catch (error) {
      console.error("Error saving resume data to local storage:", error);
    }
  }, [resume]);

  return (
    <resumeContext.Provider value={{ resume, setResume }}>
      {children}
    </resumeContext.Provider>
  );
};

export { resumeContext, ContextProvider };
