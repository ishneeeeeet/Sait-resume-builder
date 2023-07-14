import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const ResumeSelection = () => {
  return (
    <>
      <div>Select your resume</div>

      <Link to="/personalinfo">
        <Button text={"Next: Personal Info"} />
      </Link>
    </>
  );
};

export default ResumeSelection;
