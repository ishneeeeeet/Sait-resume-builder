import React, { useContext } from "react";
import { resumeContext } from "../context";

const Resume = () => {
  const { resume } = useContext(resumeContext);

  return (
    <div>
      {Object.entries(resume).map(([key, value]) => (
        <div key={key}>
          {key}: {value}
        </div>
      ))}
    </div>
  );
};

export default Resume;
