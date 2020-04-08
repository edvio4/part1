import React, { useState, useEffect } from 'react';
import Filter from '../Filter';
import Form from './Form';
import phonebookService from '../../services/phonebook';

const Part2bExer = () => {
    const [persons, setPersons] = useState([]);
    const [newPerson, setNewPerson] = useState({
        name: '',
        number: ''
    });
    const [filter, setFilter] = useState('');

    const hook = () => {
        phonebookService
          .getAll()
          .then(setPersons);
    }

    const handleDelete = (person) => () => {
        const result = window.confirm(`Do you want to delete ${person.name}?`);
        if (result) {
            phonebookService
                .deletePerson(person.id)
                .then(() => {
                    setPersons(persons.filter(per => per.id !== person.id));
                });
        }
    }

    useEffect(hook, []);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    }

    const peopleToShow = filter
        ? persons.filter(person => {
                const regex = new RegExp(`(${filter})`, 'g');
                return regex.test(person.name.toLowerCase());
            })
        : persons;

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} handleFilterChange={handleFilterChange} />
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
                    {person.name} {person.number} <button onClick={handleDelete(person)}>delete</button>
                </div>
            )}
        </div>
    );
}

export default Part2bExer;
