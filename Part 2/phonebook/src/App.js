import { useState, useEffect } from "react";
import Persons from "./Components/Persons";
import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import axios from "axios";

const App = () => {
  // const [persons, setPersons] = useState([
  //   {name: 'Arto Hellas',
  //   number: '040-1234567'}
  // ])

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => { //fetches persons from json then adds it to persons useState
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => { 
        console.log('promise fulfilled')
        setPersons(response.data) 
      })
  }, [])
  console.log('render', persons.length, 'persons')

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
      setPersons(persons.concat(nameObject))
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


  return(
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/> 
      <h3>Add a new</h3>
      <PersonForm addName={addName} 
      newName={newName} newNumber={newNumber}
      handleNameChange={handleNameChange} 
      handleNumberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      <Persons persons={personsToShow}/>
    </div>
  )
  
}

export default App;
