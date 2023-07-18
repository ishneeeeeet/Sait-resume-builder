import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { resumeContext } from "../context";
import validator from "validator";

const PersonalInfo = () => {
  const { resume, setResume } = useContext(resumeContext);
  const [errors, setErrors] = useState({});

  const handleNameChange = ({ target: { value, name } }) => {
    setResume((prevResume) => ({
      ...prevResume,
      [name]: value,
    }));
  };

  const handleButtonClick = () => {
    const { fname, lname, email } = resume;

    const newErrors = {};

    if (!fname) {
      newErrors.fname = "Please enter your first name";
    }

    if (!lname) {
      newErrors.lname = "Please enter your last name";
    }

    if (!validator.isEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Proceed to the next page or perform other actions
    }
  };

  return (
    <>
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Personal Information
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Use a permanent address where you can receive mail.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="first-name" className="form-label">
              First name
            </label>
            <div className="mt-2">
              <input
                onChange={handleNameChange}
                type="text"
                name="fname"
                id="first-name"
                autoComplete="given-name"
                className="form-input"
              />
              {errors.fname && (
                <p className="mt-2 text-xs text-red-500">{errors.fname}</p>
              )}
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="last-name" className="form-label">
              Last name
            </label>
            <div className="mt-2">
              <input
                onChange={handleNameChange}
                type="text"
                name="lname"
                id="last-name"
                autoComplete="family-name"
                className="form-input"
              />
              {errors.lname && (
                <p className="mt-2 text-xs text-red-500">{errors.lname}</p>
              )}
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <div className="mt-2">
              <input
                onChange={handleNameChange}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="form-input"
              />
              {errors.email && (
                <p className="mt-2 text-xs text-red-500">{errors.email}</p>
              )}
            </div>
          </div>

          {/* ...remaining code... */}
        </div>
      </div>
      <Button text="Next: Projects" onClick={handleButtonClick} />
      {resume && console.log(resume)}
    </>
  );
};

export default PersonalInfo;
