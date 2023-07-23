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
        {
          name: "templateone",
          img: "https://i.ibb.co/kx3wPKz/templateone.png",
        },
        {
          name: "templatetwo",
          img: "https://i.ibb.co/zbj5MGJ/templatetwo.png",
        },
        {
          name: "templatethree",
          img: "https://i.ibb.co/Sr0Sgmq/templatethree.png",
        },
      ];
      break; // Add break statement to prevent falling through to the next case

    case "Business Administration":
      templates = [
        { name: "templatefour", img: "https://i.ibb.co/vjDNxBw/templatefour.png" },
        { name: "templatefive" , img: "https://i.ibb.co/Bq4bT23/templatefive.png" },
        { name: "templatesix", img: "https://i.ibb.co/KrHXYkk/templatesix.png" },
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
              src={temp.img}
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
