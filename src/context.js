import React, { createContext, useState } from "react";

const resumeContext = createContext();

const ContextProvider = ({ children }) => {
  const [resume, setResume] = useState({
    course: "",
    fname: "",
    lname: "",
  });


  return (
    <resumeContext.Provider value={{ resume, setResume }}>
      {children}
    </resumeContext.Provider>
  );
};

export { resumeContext, ContextProvider };
