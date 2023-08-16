import Person from "./Person"

const Persons = ({persons}) => {
   return (
    persons.map((person, i) => <Person key={i} person={person}/>)
   )
}

export default Persons