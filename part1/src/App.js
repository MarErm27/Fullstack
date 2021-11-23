import React, {useState} from 'react'

const Statistics = ({good, neutral, bad}) => {
    const all = good + neutral + bad
    if (all === 0) {
        return <div>No feedback given</div>
    }



    const average = (good * 100/ all - bad * 100/ all) * 0.01
    const positive = good * 100/ all
    return <div>
        <div>good {good}</div>
        <div>neutral {neutral}</div>
        <div>bad {bad}</div>
        <div>all {all}</div>
        <div>average {average}</div>
        <div>positive {positive} %</div>
    </div>
}

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const setToGood = newValue => {
        setGood(newValue)
    }
    const setToNeutral = newValue => {
        setNeutral(newValue)
    }
    const setToBad = newValue => {
        setBad(newValue)
    }
    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={() => setToGood(good + 1)} text="good"/>
            <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral"/>
            <Button handleClick={() => setToBad(bad + 1)} text="bad"/>
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App