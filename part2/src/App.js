import React, {useState} from 'react'
import Person from "./components/Person";


const App = () => {
    const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas',
            phone: '040-1234567'
        }
    ])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')

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

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div> name: <input
                    value={newName}
                    onChange={handleNameChange}
                />
                </div>
                <div>number: <input
                    value={newPhone}
                    onChange={handlePhoneChange}
                />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {persons.map(person =>
                    <Person key={person.name} name={person.name} phone={person.phone}/>
                )}
            </ul>
        </div>
    )
}

export default App