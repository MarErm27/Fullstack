import React from 'react'

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
                <div>
                    <Header course={course}/>
                    <Content course={course}/>
                    <Total course={course}/>
                </div>
            )}
        </div>
    )
}

const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]

    return <Course courses={courses}/>
}
export default App