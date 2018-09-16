import { ActionTypes } from '../constants';
import Api from '../api'

function fetchUser() {
  return Api.getJSON('student', { authorization: true })
}

function patchUser(data: any) {
  return Api.patchJSON(`student`, { authorization: true, data })
}

function getUser() {
  return {
    type: ActionTypes.STUDENT_FETCH,
    payload: fetchUser()
  };
}

function updateUser( data: any) {
  return {
    type: ActionTypes.STUDENT_UPDATE,
    payload: patchUser(data)
  };
}

export {
  getUser,
  updateUser
}
