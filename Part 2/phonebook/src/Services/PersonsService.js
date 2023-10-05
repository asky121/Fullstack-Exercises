import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => { //gets all data from persons json
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newObject) => { //posts new data to json
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const deletePerson = (id) => {
    //const request = axios.delete(`${baseUrl}/${id}`)
    return axios.delete(`${baseUrl}/${id}`)
}

export default {getAll, create, update, deletePerson}