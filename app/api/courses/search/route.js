import { NextResponse } from "next/server";
import courses from '../data.json';
import {v4 as uuidv4} from 'uuid';

export async function GET(request){
    const {searchParams}=new URL(request.url);
   const query= searchParams.get('query');
   const filteredCourses=courses.filter((course)=>{
    return course.title.toLowerCase().includes(query.toLowerCase())
   })
    return NextResponse.json(filteredCourses);
}

export async function POST(request){
  const {title,level,description,link}=await request.json();

  const newCourse={
    id:uuidv4(),
    title,
    description,
    level,
    link
  }
  //console.log(title,level,description,link);

  courses.push(newCourse);
  return NextResponse.json(courses);
}