import * as types from './types'

function setFetching (value) {
  return {
    type: types.CHARACTERS_SET_FETCHING,
    value: value
  }
}

export function setList (value) {
  return {
    type: types.CHARACTERS_UPDATE_LIST,
  value}
}

export function setItem (value) {
  return {
    type: types.CHARACTERS_SET_ITEM,
  value}
}

export function fetchHouseCharacters () {
  return (dispatch, getState, extraArguments) => { // Gracias a redux thunk
    dispatch(setList([]))
    const house = getState().housesReducer.item
    console.log("Item house",house)
    dispatch(setFetching(true))
    extraArguments.api
    .fetchHouseCharacters(house.id)
        .then(res => {
            dispatch(setFetching(false))
            dispatch(setList(res.data.records))
         }).catch(err => {
            dispatch(setFetching(false))
            console.log(err)
         })
  }
}
