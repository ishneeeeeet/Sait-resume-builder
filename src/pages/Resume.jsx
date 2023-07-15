import React, { useContext, useRef } from "react";
import { resumeContext } from "../context";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";
import { Template1, Template2, Template3 } from "../templates";

const Resume = () => {
  const { resume } = useContext(resumeContext);
  const componentRef = useRef(null);

  const renderTemplate = () => {
    switch (resume.template) {
      case "Template1":
        return <Template1 resume={resume} />;
      case "Template2":
        return <Template2 resume={resume} />;
      case "Template3":
        return <Template3 resume={resume} />;
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
      case "Template1":
        return <Template1 resume={resume} />;
      case "Template2":
        return <Template2 resume={resume} />;
      case "Template3":
        return <Template3 resume={resume} />;
      default:
        return null;
    }
  };

  return <div ref={ref}>{renderTemplate()}</div>;
});

export default Resume;
