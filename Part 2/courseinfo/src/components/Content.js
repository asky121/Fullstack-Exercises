
const Content = ({course}) => { //use map for array
    const parts = course.parts
    //parts.map(part => console.log(part.name))
    console.log('name', course.name)
    return (<>
        {parts.map((part, i) => <p key= {i}>{part.name} {part.exercises}</p>)}
    </>)
}

export default Content