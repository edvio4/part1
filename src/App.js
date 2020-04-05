import React from 'react';
import logo from './logo.svg';
import './App.css';

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    );
}

const Part = (props) => {
    return (
        <p>{props.part} {props.exercises}</p>
    );
}

const Content = (props) => {
    return (
        <>
            <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
            <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
            <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
        </>
    );
}

const Total = (props) => {
    return (
        <p>Number of excercises {props.total}</p>
    );
}

function App() {
    const course = 'Half Stack application development';
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
        name: 'Using props to pass data',
        exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ];

    return (
        <div>
          <Header course={course} />
          <Content parts={parts} />
          <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
        </div>
    );
}

export default App;
