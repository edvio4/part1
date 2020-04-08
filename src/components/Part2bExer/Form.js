import React from 'react';
import phonebookService from '../../services/phonebook';

const Form = ({newPerson, setNewPerson, persons, setPersons}) => {
    const addPerson = (event) => {
        event.preventDefault();
        const match = persons.find(person => person.name === newPerson.name);
        if (match) {
            if (newPerson.number === match.number) {
                window.alert(`${newPerson.name} already exists`);
            } else {
                const result = window.confirm(`${newPerson.name} already exists, replace the phone number?`);
                const changedPerson = { ...match, number: newPerson.number };
                if (result) {
                    phonebookService
                        .update(match.id, changedPerson)
                        .then(updatedPerson => {
                            setPersons(persons.map(per => per.id !== match.id ? per : updatedPerson));
                            setNewPerson({
                                name: '',
                                number: ''
                            });
                        });
                }
            }
        } else {
            phonebookService
                .create(newPerson)
                .then(createdPerson => {
                    setPersons(persons.concat(createdPerson));
                    setNewPerson({
                        name: '',
                        number: ''
                    });
                });
        }
    }

    const handleNameChange = (event) => {
        setNewPerson({
            name: event.target.value,
            number: newPerson.number
        });
    }

    const handlePhoneChange = (event) => {
        setNewPerson({
            name: newPerson.name,
            number: event.target.value
        });
    }

    return (
        <form onSubmit={addPerson}>
            <div>
                name:
                <input
                    required
                    value={newPerson.name}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                phone number:
                <input
                    required
                    value={newPerson.number}
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
