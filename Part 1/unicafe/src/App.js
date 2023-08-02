import {useState} from 'react'

const Button = ({handleClick, text}) => { //creates button
  return (<button onClick={handleClick}>{text}</button>)
}

const StatisticLine = ({text, value}) => { //displays a single line of statistic
  return(
    <p>{text} {value}</p>
  )
}
const Statistics = ({good, neutral, bad}) => { //gets all clicks, avg, and positive percentage
  console.log({good}, {neutral}, {bad})
  const all = good + neutral + bad
  console.log({all})
  if (all === 0) {
    return <p>No feedback given</p> 
  }
  const average = (good + bad * -1)/all 
  const positive = good/all * 100 + '%'
  return(
    <div>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="all" value={all}/>
      <StatisticLine text="average" value={average}/>
      <StatisticLine text="positive" value={positive}/> 
    </div>
  )
}


const App = () => { //save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>
        give feedback
      </h1>
      <Button handleClick={() => setGood(good+1)} text='good'/> 
      <Button handleClick={() => setNeutral(neutral+1)} text='neutral'/> 
      <Button handleClick={() => setBad(bad+1)} text='bad'/> 
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/> 
    </div>
  );
}

export default App;
