import React, { useContext } from "react";
import { resumeContext } from "../context";

const Resume = () => {
  const { resume } = useContext(resumeContext);
  return (
    <div>
      <div> course: {resume.course}</div>
      <div> name: {resume.fname}</div>
      <div>lname: {resume.lname}</div>
    </div>
  );
};

export default Resume;
