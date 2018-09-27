import * as types from './types'
import * as api from '../../api/'

function setFetching (value) {
  return {
    type: types.HOUSE_SET_FETCHING,
    value: value
  }
}

export function setList (value) {
  return {
    type: types.HOUSE_UPDATE_LIST,
  value}
}

export function setItem (value) {
  return {
    type: types.HOUSE_SET_ITEM,
  value}
}
//Dispatch lanza la función reducer de reducer.js
export function fetchHousesList () {
  return (dispatch, getState) => {
    dispatch(setFetching(true))
    api.fetchHouses()  //Estas spon las llamadas asincronas ue nos permite thunk
      .then(res => {
        dispatch(setFetching(false))
        dispatch(setList(res.data.records))
      })
      .catch(err => {
        dispatch(setFetching(false))
        console.log('Error api: ' , err)
      })
  }
}
