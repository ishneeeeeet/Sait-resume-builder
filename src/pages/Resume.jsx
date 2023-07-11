import React, { useContext } from 'react';
import { resumeContext } from '../context';

const Resume = () => {
  const { resume } = useContext(resumeContext);
  return (
    <div>{resume.course}</div>
  );
}

export default Resume;
