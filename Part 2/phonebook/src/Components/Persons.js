import Person from "./Person"
import PersonsService from "../Services/PersonsService"

const Persons = ({persons, deletePerson}) => {
   return (
    persons.map((person, i) => <Person key={i} person={person} deletePerson={deletePerson}/>)
   )
}

export default Persons