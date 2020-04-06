import React, { useState } from 'react';
import Button from './Button';

const Display = ({counter}) => {
    return (
        <div>{counter}</div>
    );
}

const Part1c = () => {
    const [counter, setCounter] = useState(0);

    const increaseByOne = () => setCounter(counter+1);
    const decreaseByOne = () => setCounter(counter-1);
    const setToZero = () => setCounter(0);

    return (
        <div>
            <Display counter={counter} />
            <Button text='plus' handleClick={increaseByOne} />
            <Button text='minus' handleClick={decreaseByOne} />
            <Button text='zero' handleClick={setToZero} />
        </div>
    );
}

export default Part1c;
