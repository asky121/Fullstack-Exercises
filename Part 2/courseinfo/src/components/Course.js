import Header from "./Header"
import Content from "./Content"

// const Total = (props) => {
//     console.log(props)
//     return (<p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p> )
//   }

const Course = ({course}) => {
    // console.log('parts', course.parts)
    return (
        // console.log('test', course.name)
        <div>
            <Header name={course.name} />
            <Content course={course} />
        </div> 
    )
}

export default Course