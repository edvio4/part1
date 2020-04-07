import React, { useState } from 'react';
import Filter from './Filter';
import Form from './Form';

const Part2bExer = () => {
    const [persons, setPersons] = useState([
        { id: 1, name: 'Arto Hellas', phoneNumber: '040-123456' },
        { id: 2, name: 'Ada Lovelace', phoneNumber: '39-44-5323523' },
        { id: 3, name: 'Dan Abramov', phoneNumber: '12-43-234345' },
        { id: 4, name: 'Mary Poppendieck', phoneNumber: '39-23-6423122' }
    ]);
    const [newPerson, setNewPerson] = useState({
        name: '',
        phoneNumber: ''
    });
    const [filter, setFilter] = useState('');

    const peopleToShow =  filter
        ? persons.filter(person => {
                const regex = new RegExp(`(${filter})`, 'g');
                return regex.test(person.name);
            })
        : persons;

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} setFilter={setFilter} />
            <h2>add new</h2>
            <Form
                newPerson={newPerson}
                setNewPerson={setNewPerson}
                persons={persons}
                setPersons={setPersons}
            />
            <h2>Numbers</h2>
            {peopleToShow.map(person =>
                <div key={person.id}>
                    {person.name} {person.phoneNumber}
                </div>
            )}
        </div>
    );
}

export default Part2bExer;
