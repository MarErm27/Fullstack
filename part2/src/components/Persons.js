import React from 'react'

const Person = (props) => {
    return (
        <li>{props.name} {props.phone}</li>
    )
}

const Persons = ({persons}) => {
    return (
        <ul>
            {persons.map(person =>
                <Person key={person.name} name={person.name} phone={person.phone}/>
            )}
        </ul>
    )
}

export default Persons