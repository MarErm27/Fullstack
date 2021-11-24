import React from 'react'

const Header = (props) => {
  return (
      <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
    const parts = props.course.parts
    console.log(parts)
  return (
      <ul>
          {parts.map(part =>
              <li key={part.id}>
                  {part.name}
              </li>
          )}
      </ul>
  )
}

// const Total = (props) => {
//   return (
//       <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
//   )
// }

const Course = ({course}) => {
    return (
        <div>
            <Header course={course}/>
            <Content course={course}/>
        </div>
    )
}

const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
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
            }
        ]
    }

    return <Course course={course} />
}
export default App