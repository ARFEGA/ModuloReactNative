import * as types from './types'

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
// Dispatch lanza la función reducer de reducer.js
export function fetchHousesList () {
  // getState nos aporta el initialState
  return (dispatch, getState, extraArguments) => {
    dispatch(setFetching(true))
    extraArguments.api.fetchHouses() // Estas son las llamadas asincronas ue nos permite thunk
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
