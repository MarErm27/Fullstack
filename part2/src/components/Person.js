import React from "react";

const Person = ({person}) => {
    console.log(person.name)
    return (
        <li key={person.name}>{person.name}</li>
    )
}

export default Person