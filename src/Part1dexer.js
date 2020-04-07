import React, { useState } from 'react';
import Button from './Button';

const Statistic = ({text, stat}) => {
    return (
        <tr>
            <td>
            {text}
            </td>
            <td>
            {stat}
            </td>
        </tr>
    );
}

const Statistics = ({good, neutral, bad}) => {
    const total = good+neutral+bad;
    const average = (good*1+bad*-1)/total || 0;
    const positive = `${good/total*100 || 0}%`;

    if (!total) {
        return (
            <>
                <div>
                    No feedback given
                </div>
            </>
        )
    }

    return (
        <>
            <table>
                <Statistic text="good" stat={good} />
                <Statistic text="neutral" stat={neutral} />
                <Statistic text="bad" stat={bad} />
                <Statistic text="all" stat={total} />
                <Statistic text="average" stat={average} />
                <Statistic text="positive" stat={positive} />
            </table>
        </>
    );
}

const Part1dexer = () => {
    const [good, setGood] = useState(0);
    const [bad, setBad] = useState(0);
    const [neutral, setNeutral] = useState(0);

    const handleGoodClick = () => {
        setGood(good + 1);
    }

    const handleBadClick = () => {
        setBad(bad + 1);
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1);
    }

    return (
        <div>
            <h1>give feedback</h1>
            <div>
                <Button handleClick={handleGoodClick} text='good' />
                <Button handleClick={handleNeutralClick} text='neutral' />
                <Button handleClick={handleBadClick} text='bad' />
            </div>

            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    );
}

export default Part1dexer;
