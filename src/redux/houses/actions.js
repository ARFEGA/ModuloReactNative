import * as types from './types'
import {AsyncStorage} from 'react-native'

function setFetching (value) {
  return {
    type: types.HOUSE_SET_FETCHING,
    value: value
  }
}

export function setList (value,getFromApi) {
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
  //extraArgument, se injectan en App.js a thunk, al crear el store:
  //const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument({api: api})))
  //Trae el contenido de la api
  return (dispatch, getState, extraArguments) => {
    dispatch(setFetching(true))
     /* AsyncStorage.removeItem('houseList',(error) =>{
        if(error)
          console.log('Error: ', error)
        else
          console.log('NoError: ', error)
      })*/
    
      
      AsyncStorage.getItem('houseList', (error, result) => {
        if (result) {
          dispatch(setList(JSON.parse(result)))
          dispatch(setFetching(false))
        }
      })
      extraArguments.api.fetchHouses() // Estas son las llamadas asincronas ue nos permite thunk
        .then(res => {
          console.log('ATACA AL WEB SERVICE......')
          dispatch(setList(res.data.records))
          AsyncStorage.setItem('houseList', JSON.stringify(res.data.records))
        })
        .catch(err => { console.log('Error api: ', err) }) 
      dispatch(setFetching(false))
          
       
  
  }
}
