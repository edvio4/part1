import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from '../Filter';
import Form from './Form';

const Part2bExer = () => {
    const [persons, setPersons] = useState([]);
    const [newPerson, setNewPerson] = useState({
        name: '',
        phoneNumber: ''
    });
    const [filter, setFilter] = useState('');

    const hook = () => {
        axios
          .get('http://localhost:3001/persons')
          .then(response => {
              setPersons(response.data);
        });
    }

    useEffect(hook, []);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    }

    const peopleToShow =  filter
        ? persons.filter(person => {
                const regex = new RegExp(`(${filter})`, 'g');
                return regex.test(person.name);
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
                    {person.name} {person.phoneNumber}
                </div>
            )}
        </div>
    );
}

export default Part2bExer;
