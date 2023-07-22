import { Fragment, useContext, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { resumeContext } from "../context";
import Loading from "./Loading";

const courses = [
  { name: "Software Development" },
  { name: "Business Administration" },
  { name: "IT services" },
  { name: "Architecture" },
  { name: "Bakery" },
];

function Course() {
  const { resume, setResume } = useContext(resumeContext);
  const [selected, setSelected] = useState(courses[0]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleCourseSelection = (value) => {
    setSelected(value);
    setResume((prevResume) => ({
      ...prevResume,
      course: value.name,
    }));
    console.log(resume);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/templateselection"); // Use navigate to navigate to the next page
    }, 2000); // 3 seconds delay (3000 milliseconds)
  };

  return (
    <>
    {loading ? <Loading/> : <div className="fixed top-16 w-72">
      Which course at Sait?
      <Listbox value={selected} onChange={handleCourseSelection} >
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {courses.map((course, courseIdx) => (
                <Listbox.Option
                  key={courseIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-[#F50157] text-white" : "text-gray-900"
                    }`
                  }
                  value={course}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {course.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
     
        
      
      {console.log(resume.course)}
    </div> }
    
    </>
  );
}

export default Course;
