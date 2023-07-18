import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { resumeContext } from "../context";

const PersonalInfo = () => {
  const { resume, setResume } = useContext(resumeContext);

  const handleNameChange = ({ target: { value, name } }) => {
    setResume((prevResume) => ({
      ...prevResume,
      [name]: value,
    }));
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
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <div className="mt-2">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="form-select"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <div className="mt-2">
              <input
                onChange={handleNameChange}
                type="text"
                name="city"
                id="city"
                autoComplete="address-level2"
                className="form-input"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="region" className="form-label">
              State / Province
            </label>
            <div className="mt-2">
              <input
                onChange={handleNameChange}
                type="text"
                name="region"
                id="region"
                autoComplete="address-level1"
                className="form-input"
              />
            </div>
          </div>
        </div>
      </div>
      <Link to="/projects">
        <Button text="Next: Projects" />
      </Link>
      {resume && console.log(resume)}
    </>
  );
};

export default PersonalInfo;
