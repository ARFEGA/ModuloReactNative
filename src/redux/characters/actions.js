import * as types from './types'

function setFetching(value){
    return{
        type: types.CHARACTERS_SET_FETCHING,
        value:value
    }
}

export function setList(value){
    return{
        type: types.CHARACTERS_UPDATE_LIST,
        value
    }
}

export function setItem(value){
    return{
        type: types.CHARACTERS_SET_ITEM,
        value
    }
}

export function fetchHouseCharacters(){
    return(dispatch,getState,api) => {//Gracias a redux thunk
        const house = getState().housesReducer.item
        dispatch(setFetching(true))
        
       
    }

}