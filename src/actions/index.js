import { PERSON_ADD,PERSON_DEL ,LOAD_PHOTO_DATA} from "~/actions/actionType";

export const addPersonHandle = () => ({
  type: PERSON_ADD
})

export const delPersonHandle = (personID) => ({
  type: PERSON_DEL,
  personID
})

export const loadPhotoDataHandle = (photoData) => ({
  type: LOAD_PHOTO_DATA,
  photoData
})