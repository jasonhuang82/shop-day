import { PERSON_ADD,PERSON_DEL } from "../actions/actionType";
const initState = [];
export default (state = initState, action) => {
  let personState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case PERSON_ADD:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: 'Max',
        age: Math.floor(Math.random() * 40)
      }
      personState.unshift(newPerson)
      return personState
    case PERSON_DEL:
      console.log('PERSON_DEL'); 
      personState = personState.filter(person => person.id !== action.personID)
      return personState;
    default:
      return state;
  }
};