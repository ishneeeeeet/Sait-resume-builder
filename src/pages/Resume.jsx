import React, { useContext, useRef } from "react";
import { resumeContext } from "../context";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";
import TemplateOne from "../templates/TemplateOne";
import TemplateTwo from "../templates/TemplateTwo";
import TemplateThree from "../templates/TemplateThree";

const Resume = () => {
  const { resume } = useContext(resumeContext);
  const componentRef = useRef(null);

  const renderTemplate = () => {
    switch (resume.template) {
      case "templateone":
        return <TemplateOne resume={resume} />;
      case "templatetwo":
        return <TemplateTwo resume={resume} />;
      case "templatethree":
        return <TemplateThree resume={resume} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderTemplate()}
      <ReactToPrint
        trigger={() => (
          <button>
            Download <ArrowDown />
          </button>
        )}
        content={() => componentRef.current}
      />
      <div style={{ display: "none" }}>
        <PrintContent ref={componentRef} resume={resume} />
      </div>
    </div>
  );
};

const PrintContent = React.forwardRef(({ resume }, ref) => {
  const renderTemplate = () => {
    switch (resume.template) {
      case "templateone":
        return <TemplateOne resume={resume} />;
      case "templatetwo":
        return <TemplateTwo resume={resume} />;
      case "templatethree":
        return <TemplateThree resume={resume} />;
      default:
        return null;
    }
  };

  return <div ref={ref}>{renderTemplate()}</div>;
});

export default Resume;
