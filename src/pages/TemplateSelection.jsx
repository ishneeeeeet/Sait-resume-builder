import { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { resumeContext } from "../context";

function TemplateSelection() {
  const { resume, setResume } = useContext(resumeContext);
  const navigate = useNavigate();
  let templates = [];

  switch (resume.course) {
    case "Software Development":
      templates = [
        { name: "templateone" },
        { name: "templatetwo" },
        { name: "templatethree" },
      ];
      break; // Add break statement to prevent falling through to the next case

    case "Business Administration":
      templates = [
        { name: "templatefour" },
        { name: "templatefive" },
        { name: "templatesix" },
      ];
      break; // Add break statement to prevent falling through to the default case
    default:
      break;
  }

  const handleClick = (temp) => {
    console.log("clicked");
    setResume((prevResume) => ({
      ...prevResume,
      template: temp.name,
    }));
    console.log(resume);
    navigate("/personalinfo");
  };

  return (
    <Fragment>
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
