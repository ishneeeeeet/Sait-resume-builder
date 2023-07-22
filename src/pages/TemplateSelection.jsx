import { Fragment, useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { resumeContext } from "../context";
import Loading from "./Loading";

const templates = [
  {
    name: "templateone",
  },
  {
    name: "template2",
  },
  {
    name: "Template3",
  },
];

function TemplateSelection() {
  const { resume, setResume } = useContext(resumeContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleClick = (temp) => {
    console.log("clicked");
    setResume((prevResume) => ({
      ...prevResume,
      template: temp.name,
    }));
    console.log(resume);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/personalinfo"); // Use navigate to navigate to the next page
    }, 3000); // 3 seconds delay (3000 milliseconds)
  };

  return (
    <Fragment>
      {loading && <Loading />} {/* Show the loading component when loading is true */}
      {templates.map((temp, index) => (
        <button
          key={index} // Added a unique key prop for each button in the map function
          onClick={() => handleClick(temp)}
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
        >
          <div className="relative h-[400px] w-[300px] rounded-md">
            <img
              src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="AirMax Pro"
              className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
              <h1 className="text-lg font-semibold text-white">{temp.name}</h1>

              <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                View Profile &rarr;
              </button>
            </div>
          </div>
        </button>
      ))}
    </Fragment>
  );
}

export default TemplateSelection;
