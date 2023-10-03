import { useState, useEffect } from "react";
import Persons from "./Components/Persons";
import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import axios from "axios";
import PersonsService from "./Services/PersonsService"
import Person from "./Components/Person";

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => { //fetches persons from json then adds it to persons useState
    console.log('effect')
    PersonsService
      .getAll()
      .then(intialData => setPersons(intialData))
  }, [])

  const addName = (event) => { //adds name to persons object when form is submitted
    event.preventDefault()
    //console.log('button clicked', event.target)
    const nameObject = { //puts inputed name into an object to add to persons
      name: newName, 
      number: newNumber
    }

    if (persons.some(person => person.name === newName)) {//checks if there's a duplicate name
      alert(`${newName} is already added to the phonebook`)
    } else ( //adds name to persons
      
      PersonsService
        .create(nameObject)
        .then(response => {
          setPersons(persons.concat(nameObject))
        })
    )
    setNewName('')
    setNewNumber('')
  }

  const personsToShow = showAll //shows filtered person object if showAll is false
    ? persons //if showAll is true
    : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())) 

  
  const handleNameChange = (event) => { //changes newName when form is changed
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {//reads filter form input and sets it to useState
    if(event.target.value !== '') { //if there is no input showAll is set to true
      setShowAll(false)
    } else (
      setShowAll(true)
    )
    setNewFilter(event.target.value)
  }

  const handleDelete = (id) => { //deletes the inputted id from server and updates the persons useState
    
    console.log("need to delete this", id)
    axios.delete(`http://localhost:3001/persons/${id}`)
      .then(setPersons(persons.filter(person => person.id !== id)))
  }


  return(
    <div>
      {console.log(persons)}
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/> 
      <h3>Add a new</h3>
      <PersonForm addName={addName} 
      newName={newName} newNumber={newNumber}
      handleNameChange={handleNameChange} 
      handleNumberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      {/* <Persons persons={personsToShow}/> */}
      {personsToShow.map((person) => <Person key={person.id} person={person} deletePerson={() => handleDelete(person.id)}/>)}
    </div>
  )
  
}

export default App;