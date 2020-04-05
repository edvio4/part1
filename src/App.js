import React, { useState } from 'react';
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

const Part1 = () => {
    const course = {
        name: 'Half Stack application development',
            parts: [
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
        ]
    };

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
        </div>
    );
}

const Part2 = () => {
    const [counter, setCounter] = useState(0);

    const increaseByOne = () => setCounter(counter+1);
    const setToZero = () => setCounter(0);

    return (
        <div>
            <div>{counter}</div>
            <button onClick={increaseByOne}>
                plus
            </button>
            <button onClick={setToZero}>
                zero
            </button>
        </div>
    );
}

function App() {
    return (
        <div>
          <Part1 />
          <Part2 />
        </div>
    );
}

export default App;