import React, { useContext} from "react";
import { resumeContext } from "../context";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const TemplateSelection = ({ templates, onSelectTemplate }) => {
  const { resume } = useContext(resumeContext);
  const courseType = resume.course;
  switch (courseType) {
    case "IT":
      console.log("It is IT");
      return (
        <>
          <div>Select your resume</div>
          <p>Course Type: IT</p>
          <Link to="/personalinfo">
            <Button text={"Next: Personal Info"} />
          </Link>
        </>
      );
    case "bakery":
      console.log("It is bakery");
      break;
    default:
      break;
  }
  return (
    <>
      <div>Select your resume</div>
      <Link to="/personalinfo">
        <Button text={"Next: Personal Info"} />
      </Link>
      {courseType}
    </>
  );
};

export default TemplateSelection;
