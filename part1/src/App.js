import React, {useState} from 'react'

/*const StatisticLine = ({text, value}) => {
    return <tr><td>{text}</td> <td>{value}</td></tr>
}

const Statistics = ({good, neutral, bad}) => {
    const all = good + neutral + bad
    if (all === 0) {
        return <div>No feedback given</div>
    }
    const average = (good * 100 / all - bad * 100 / all) * 0.01
    const positive = (good * 100 / all) + " %"
    return <table>
        <tbody>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={all}/>
        <StatisticLine text="average" value={average}/>
        <StatisticLine text="positive" value={positive}/>
        </tbody>
    </table>
}

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
}*/

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ]

    const randomNumber = () => Math.floor((Math.random() * anecdotes.length - 1) + 1)
    const [selected, setSelected] = useState(0)
    const setToSelected = newValue => {
        setSelected(newValue)
    }

    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
    const setToVotes = () => {
        const copy = [...votes]
        copy[selected] += 1
        setVotes(copy)
    }
    return (
        <div>
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <Button handleClick={() => setToVotes()} text="vote"/>
            <Button handleClick={() => setToSelected(randomNumber())} text="next anecdote"/>
        </div>
    )
}

export default App