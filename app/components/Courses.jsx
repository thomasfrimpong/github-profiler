import Link from "next/link";

import React from 'react';

// async function fetchCourses(){
//     const response=await fetch("http://localhost:3000/api/courses");
//     const courses=await response.json();
//     return courses;
// }

const Courses = ({courses}) => {
  
 
    // const courses=await fetchCourses();
  return (
    <div className="courses">
      {courses.map((course)=>(
<div key={course.id} className="card"> 
 <h2>{course.title}</h2>
 <small>Level: {course.level}</small>
 <p>{course.description}</p>
 <Link href={course.link} className="btn" target="_blank">Go to course</Link>
</div>
      )) }
    </div>
  )
}

export default Courses
