import React, { useContext, useState } from "react";
import { resumeContext } from "../context";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import TemplateOne from "../templates/TemplateOne";
import TemplateTwo from "../templates/TemplateTwo";
import TemplateThree from "../templates/TemplateThree";

const TemplateSelection = () => {
  const { resume, setResume } = useContext(resumeContext);

  return (
    <>
      <div className="flex flex-wrap gap-6">
        <div className="w-1/3">
          <TemplateOne />
        </div>
        <div className="w-1/3">
          <TemplateTwo />
        </div>
        <div className="w-1/3">
          <TemplateThree />
        </div>
      </div>
    </>
  );
};

export default TemplateSelection;
