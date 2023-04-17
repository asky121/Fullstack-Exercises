const Header = (props) => { //should work just fine
  console.log(props.course)
  //const head = {props}
  return (<h1>{props.course}</h1>) 
}

const Content = (props) => { //edit to make it loop through array
  //const part = parts.name
  //const exercises = parts.exercises
  console.log(props.p1)
  return (<><p>{props.p1} {props.e1}</p>
  <p>{props.p2} {props.e2}</p>
  <p>{props.p3} {props.e3}</p></>)
}

const Total = (props) => {
  console.log(props)
  return (<p>Number of exercises {props.e1+props.e2+props.e3}</p> )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1='Fundaments of React'
  const exercises1=10
  const part2='Using props to pass data'
  const exercises2=7
  const part3='State of a component'
  const exercises3=14
  console.log("test")
  return (
    <div>
      <Header course={course} />
      <Content p1 = {part1} p2 = {part2} p3 = {part3} 
        e1={exercises1} e2 = {exercises2} e3 = {exercises3}/>
      <Total e1={exercises1} e2 = {exercises2} e3 = {exercises3}/>
    </div>
  )
}

export default App;
