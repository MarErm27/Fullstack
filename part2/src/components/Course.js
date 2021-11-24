import React from "react";

const Header = (props) => {
    return (
        <h1>{props.course.name}</h1>
    )
}

const Total = (props) => {
    const parts = props.course.parts
    const sum = parts.reduce(function (prev, current) {
        return prev + current.exercises
    }, 0);
    return (
        <div><b>total of {sum} exercises</b></div>
    )
}

const Content = (props) => {
    const parts = props.course.parts
    return (
        <ul>
            {parts.map(part =>
                <li key={part.id}>
                    {part.name} {part.exercises}
                </li>
            )}
        </ul>
    )
}

const Course = ({courses}) => {
    return (
        <div>
            {courses.map(course =>
                <div key={course.id}>
                    <Header course={course}/>
                    <Content course={course}/>
                    <Total course={course}/>
                </div>
            )}
        </div>
    )
}

export default Course