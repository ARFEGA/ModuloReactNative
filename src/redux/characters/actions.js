import * as types from './types'
import {Actions} from 'react-native-router-flux'

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

export function postHouseCharacter(data){
  //getState, tiene la información del estado que llega de los reducers
  // getState nos aporta el initialState
  //extraArgument, se injectan en App.js a thunk, al crear el store:
  //const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument({api: api})))
  //Trae el contenido de la api
  return (dispatch,getState, extraArguments) => {
    //Rescatamos la casa a la que pertenecerá el character
    const house = getState().housesReducer.item
    //Si no tenemos house o data, salimos
    if(!house || !data){
      return
    }
    //Indicamos el estado, por si queremos utilizar un spinner
    dispatch(setFetching(true))
    //Creamos el objeto que vamos a guardar y la casa a la que pertenece el character
    //...data, devuelve las propiedades/valores que tenga el objeto data
    //En este caso, characterToApi tendría nombre,edad,image y casa que es añadida despues de ...data
    const characterToApi = {
      ...data,
      casa:house.id
    }

    extraArguments.api
      .postHouseCharacter(characterToApi)//Guardamos en api
      .then(res => {
        dispatch(setFetching(false))
        //Rescatamos nuevamente la información del servidor despues de guardado el registro
        dispatch(fetchHouseCharacters())
        Actions.pop()//Vuelve a la pantalla anterior
        //Otra forma que además resetea la pantalla es con:
        //Actions.characters({type: 'reset'})
        //Con la forma siguiente reemplazamos la pantalla actual por otra que está cargada en la pila:
        //Actions.characters({type:'replace'})
      })
      .catch(err =>{
        dispatch(setFetching(false))
        console.log("Error en la inserción de un nuevo character: " , err)
      })
  }
}

export function fetchHouseCharacters () {
  //getState, tiene la información del estado que llega de los reducers
  //extraArgument, se injectan en App.js a thunk, al crear el store:
  //const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument({api: api})))
  //Trae el contenido de la api
  return (dispatch, getState, extraArguments) => { // Gracias a redux thunk
    dispatch(setList([]))
    const house = getState().housesReducer.item
    console.log("Item house",house)
    dispatch(setFetching(true))
    extraArguments.api
    .fetchHouseCharacters(house.id)
        .then(res => {
            dispatch(setList(res.data.records))
            dispatch(setFetching(false))
         }).catch(err => {
            dispatch(setFetching(false))
            console.log(err)
         })
  }
}
