import React from 'react';
import logo from './logo.svg';
import './App.css';

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    return (
        <p>{props.part} {props.exercises}</p>
    )
}

const Content = (props) => {
    return (
        <>
            <Part part={props.part1.name} exercises={props.part1.exercises} />
            <Part part={props.part2.name} exercises={props.part2.exercises} />
            <Part part={props.part3.name} exercises={props.part3.exercises} />
        </>
    )
}

const Total = (props) => {
    return (
        <p>Number of exercises {props.total}</p>
    )
}

function App() {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        excercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        excercises: 7
    }
    const part3 = {
        name: 'State of a component',
        excercises: 14
    }

    return (
        <div>
          <Header course={course} />
          <Content part1={part1} part2={part2} part3={part3} />
          <Total total={part1.excercises + part2.excercises + part3.excercises} />
        </div>
      )
}

export default App;
