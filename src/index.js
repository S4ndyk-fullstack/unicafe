import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const all = good + neutral + bad
    const average = (good - bad) / all
    const positive = good / all

    return (
        <div>
            <Header title={"give feedback"} />
            <Buttons good={good} setGood={setGood} neutral={neutral} setNeutral={setNeutral} bad={bad} setBad={setBad} />
            <Header title={"statistics"} />
            <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
        </div>
    )
}

const Button = ({ onClick, text }) => <div><button onClick={onClick} >{text}</button></div>

const Buttons = ({ setGood, good, setNeutral, neutral, setBad, bad }) => {
    return (
        <div>
            <Button text="good" onClick={() => setGood(good + 1)} />
            <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
            <Button text="bad" onClick={() => setBad(bad + 1)} />
        </div>
    )
}

const Statistic = ({ text, votes, extra }) => <tr><td>{text}:</td><td>{votes}{extra}</td></tr>

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
    if (good === 0 && neutral === 0 && bad === 0) return <div>no feedback given</div>
    return (
        <div>
            <table>
                <tbody>
                    <Statistic text="good" votes={good} />
                    <Statistic text="neutral" votes={neutral} />
                    <Statistic text="bad" votes={bad} />
                    <Statistic text="all" votes={all} extra=" votes in total" />
                    <Statistic text="average" votes={average} />
                    <Statistic text="positive" votes={positive} extra="%" />
                </tbody>
            </table>
        </div>
    )
}

const Header = ({ title }) => <h1>{title}</h1>

ReactDOM.render(<App />, document.getElementById("root"))
