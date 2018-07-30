import { LOAD_PHOTO_DATA } from "../actions/actionType";
const initState = [];
export default (state = initState, action) => {
  let personState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case LOAD_PHOTO_DATA:
      personState = action.photoData
      return personState;
    default:
      return state;
  }
};
