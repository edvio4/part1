import React from 'react';

const Form = ({newPerson, setNewPerson, persons, setPersons}) => {
    const addPerson = (event) => {
        event.preventDefault();

        if (persons.some(person => person.name === newPerson.name)) {
            window.alert(`${newPerson.name} already exists`);
        } else {
            setPersons(persons.concat(newPerson));
        }

        setNewPerson({
            name: '',
            phoneNumber: ''
        });
    }

    const handleNameChange = (event) => {
        setNewPerson({
            name: event.target.value,
            phoneNumber: newPerson.phoneNumber
        });
    }

    const handlePhoneChange = (event) => {
        setNewPerson({
            name: newPerson.name,
            phoneNumber: event.target.value
        });
    }

    return (
        <form onSubmit={addPerson}>
            <div>
                name:
                <input
                    value={newPerson.name}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                phone number:
                <input
                    value={newPerson.phoneNumber}
                    onChange={handlePhoneChange}
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
}

export default Form;
