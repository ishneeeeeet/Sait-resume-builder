import React, { useContext } from "react";
import { resumeContext } from "../context";
import TemplateOne from "../templates/TemplateOne";
import TemplateTwo from "../templates/TemplateTwo";
import TemplateThree from "../templates/TemplateThree";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const TemplateSelection = () => {
  const { resume, setResume } = useContext(resumeContext);

  const handleTemplateSelection = (templateName) => {
    setResume((prevResume) => ({
      ...prevResume,
      template: templateName,
    }));
  };

  return (
    <>
      <h1>Select Template</h1>
      <div className="flex flex-col gap-6">
        <div className="w-1/3">
          <Button
            text={"Template 1"}
            onClick={() => handleTemplateSelection("Template 1")}
          />
        </div>
        <div className="w-1/3">
          <Button
            text={"Template 2"}
            onClick={() => handleTemplateSelection("Template 2")}
          />
        </div>
        <div className="w-1/3">
          <Button
            text={"Template 3"}
            onClick={() => handleTemplateSelection("Template 3")}
          />
        </div>
      </div>
      <Link to="/personalinfo">
        <Button text={"Next:"} />
      </Link>
      <p>Selected Template: {resume.template}</p>
    </>
  );
};

export default TemplateSelection;
