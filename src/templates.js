import React from 'react';

const Template1 = ({resume}) => {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">Resume</h1>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Personal Information</h2>
        <p className="text-gray-700">Name: {resume.fname}</p>
        <p className="text-gray-700">Email: {resume.email}</p>
        <p className="text-gray-700">Phone: (123) 456-7890</p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Education</h2>
        <p className="text-gray-700">Degree: Bachelor of Science</p>
        <p className="text-gray-700">Major: Computer Science</p>
        <p className="text-gray-700">University: Example University</p>
        <p className="text-gray-700">Year: 2020</p>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Experience</h2>
        <p className="text-gray-700">Company: Example Company</p>
        <p className="text-gray-700">Position: Software Engineer</p>
        <p className="text-gray-700">Duration: 2018 - Present</p>
        <p className="text-gray-700">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

const Template2 = ({resume}) => {

  
  return (
    <div className="bg-blue-200 p-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Resume</h1>
        <p className="text-sm">{resume? resume.fname : "Name"}</p>
        <p className="text-sm">{resume? resume.fname : "Email"} | (123) 456-7890</p>
      </div>
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-2">Education</h2>
        <p className="text-gray-700">Degree: Bachelor of Science</p>
        <p className="text-gray-700">Major: Computer Science</p>
        <p className="text-gray-700">University: Example University</p>
        <p className="text-gray-700">Year: 2020</p>
      </div>
      <div>
        <h2 className="text-lg font-bold mb-2">Experience</h2>
        <p className="text-gray-700">Company: Example Company</p>
        <p className="text-gray-700">Position: Software Engineer</p>
        <p className="text-gray-700">Duration: 2018 - Present</p>
        <p className="text-gray-700">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

const Template3 = () => {
  return (
    <div className="bg-yellow-100 p-8">
      <h1 className="text-2xl font-bold mb-4">Resume</h1>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Personal Information</h2>
        <p className="text-gray-700">Name: John Doe</p>
        <p className="text-gray-700">Email: john.doe@example.com</p>
        <p className="text-gray-700">Phone: (123) 456-7890</p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Education</h2>
        <p className="text-gray-700">Degree: Bachelor of Science</p>
        <p className="text-gray-700">Major: Computer Science</p>
        <p className="text-gray-700">University: Example University</p>
        <p className="text-gray-700">Year: 2020</p>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Experience</h2>
        <p className="text-gray-700">Company: Example Company</p>
        <p className="text-gray-700">Position: Software Engineer</p>
        <p className="text-gray-700">Duration: 2018 - Present</p>
        <p className="text-gray-700">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export { Template1, Template2, Template3 };
