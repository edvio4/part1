import React from 'react';

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

const Total = ({total}) => {
    return (
        <b>total of {total} excersises</b>
    );
}

const Course = ({course}) => {
    const total = course.parts.reduce((acc, curr) => acc + curr.exercises, 0);

    return (
        <div>
            <Header course={course.name} />
            {course.parts.map(part =>
                <Part key={part.id} part={part.name} exercises={part.exercises} />
            )}
            <Total total={total} />
        </div>
    )
}

export default Course;
