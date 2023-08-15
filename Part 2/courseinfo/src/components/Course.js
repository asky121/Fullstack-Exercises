import Header from "./Header"
import Content from "./Content"
import Total from "./Total"



const Course = ({course}) => {
    // console.log('parts', course.parts)
    return (
        // console.log('test', course.name)
        <div>
            <Header name={course.name} />
            <Content course={course} />
            <Total course={course} />
        </div> 
    )
}

export default Course