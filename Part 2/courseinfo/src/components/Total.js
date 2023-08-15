
const Total = ({course}) => {
    const parts = course.parts
    const sum = parts.reduce((sum, part) => sum = sum + part.exercises, 0)
    return(<h4>Number of exercises {sum}</h4>)
    
}

export default Total