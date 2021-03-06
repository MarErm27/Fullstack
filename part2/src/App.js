import React, {useState} from 'react'
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";


const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-123456', id: 1},
        {name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
        {name: 'Dan Abramov', number: '12-43-234345', id: 3},
        {name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
    ])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [filterString, setFilterString] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        if (persons.map(person => person.name).indexOf(newName) !== -1) {
            alert(`${newName} is already added to phonebook`)
            return
        }

        const personObject = {
            name: newName,
            phone: newPhone
        }
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewPhone('')
    }

    const personsToShow = filterString.length === 0
        ? persons
        : persons.filter(person => person.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1)

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value)
    }

    const handleFilterStringChange = (event) => {
        setFilterString(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filterString={filterString} handleFilterStringChange={handleFilterStringChange}/>
            <h3>add a new</h3>
            <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newPhone={newPhone}
                        handlePhoneChange={handlePhoneChange}/>
            <h3>Numbers</h3>
            <Persons persons={personsToShow}/>
        </div>
    )
}

export default App