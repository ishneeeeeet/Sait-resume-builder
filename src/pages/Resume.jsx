import React, { useContext } from 'react'
import { resumeContext } from '../context';

const Resume = () => {
    const resume= useContext(resumeContext);
  return (
    
    <div>{console.log(resume.course)}</div>
  )
}

export default Resume