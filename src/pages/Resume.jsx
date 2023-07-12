import React, { useContext, useRef } from "react";
import { resumeContext } from "../context";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";

const Resume = () => {
  const { resume } = useContext(resumeContext);
  const componentRef = useRef(null);

  return (
    <div>
      {Object.entries(resume).map(([key, value]) => (
        <div key={key}>
          {key}: {value}
        </div>
      ))}
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

const PrintContent = React.forwardRef(({ resume }, ref) => (
  <div ref={ref}>
    {Object.entries(resume).map(([key, value]) => (
      <div key={key}>
        {key}: {value}
      </div>
    ))}
  </div>
));

export default Resume;
