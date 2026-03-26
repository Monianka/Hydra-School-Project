"use client";


const courses = [{
    id:1, nme: "Open water Diver"
},{
    id:2, name: "Advanced Open Water Diver"
},{
    id:3, name: "Rescue Diver"
}]

export default function CourseList(){
    return(
        <ul>
            {courses.map((course)=>(
                <li key={course.id}>{course.name}</li>
            ))}
        </ul>
    )
}