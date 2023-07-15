import React, { useContext, useState } from "react";
import { resumeContext } from "../context";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { Template1, Template2, Template3 } from "../templates";

const TemplateSelection = () => {
  const { resume } = useContext(resumeContext);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleTemplateSelect = (templateName) => {
    setSelectedTemplate(templateName);
    console.log(selectedTemplate);
  };

  const renderTemplatePreviews = () => {
    return (
      <div className="template-preview-container">
        {resume.course === "IT services" && (
          <div
            className={`template-preview relative ${selectedTemplate === "Template1" ? "selected" : ""}`}
            
           
          >
            <Template1 />
            {selectedTemplate === "Template1" && (
              <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={() => handleTemplateSelect("Template1")}
              >
                Select
              </button>
            )}
          </div>
        )}
        {resume.course === "Bakery" && (
          <div
            className={`template-preview relative ${selectedTemplate === "Template2" ? "selected" : ""}`}
            
          >
            <Template2 />
            {selectedTemplate === "Template2" && (
              <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={() => handleTemplateSelect("Template2")}
              >
                Select
              </button>
            )}
          </div>
        )}
        {!resume.course && (
          <div
            className={`template-preview relative ${selectedTemplate === "Template3" ? "selected" : ""}`}
           
          >
           Select a course
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <div>Select your resume</div>
      {renderTemplatePreviews()}
      
        <Link to="/personalinfo">
          <Button text={"Next: Personal Info"} />
        </Link>
      
    </>
  );
};

export default TemplateSelection;
