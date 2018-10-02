import React , { Component } from 'react'
import { StatusBar,TouchableOpacity,Text } from 'react-native'
import { Router, Scene, Actions, Stack } from 'react-native-router-flux'
import { Houses, Characters,CharacterDetail,CharacterAdd } from './components/sections/'
import * as api from './api/'
//Estos tres import siguientes son necesarios para redux
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk  from 'redux-thunk'

import * as reducers from './redux/' 
const reducer = combineReducers(reducers) 
//Pasamos un argumento extra, que será la referencia  a api, por lo que tendremos la referencia a
//la api injetada en actions.js
const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument({api: api})))
const sceneDefaultStyles = {
  navigationBarStyle:{backgroundColor: 'rgb(24,24,24)'},
  backButtonTextStyle : 'yellow',
  backButtonTintColor : 'yellow',
  titleStyle : { color: 'yellow' },
  backgroundColor: 'rgb(50,50,50)',
}

//Componente statelees (sin estado)
const RightButton = props => (
  <TouchableOpacity style={{ padding: 10 }} onPress={() => Actions.characterAdd()}>
  {/*Si quisieramos un icono, añadiríamos un tag <Image*/}
    <Text style={{color:'yellow' , fontWeight:'bold'}}>{'Añadir'}</Text>
  </TouchableOpacity>
)
//El mismo componente pero con estado. Se llamaría así {<RightButtonBis/>}
class RightButtonBis extends Component{
  render(){
    return(
      <TouchableOpacity style={{ padding: 10 }} onPress={() => Actions.characterAdd()}>
        <Text style={{ color: 'yellow', fontWeight: 'bold' }}>{'Añadir'}</Text>
      </TouchableOpacity>
    )
  }
}

export default class App extends Component {
  //WillMount, DidMount, etc.. solo se llamarán cuando son creadas las pantallas.
  //si la pantalla es accedida a través de un Actions.pop(), no se lanzarán.
  //Se pueden resetear meidante Action.nombre_key({type:'reset'})
  componentWillMount () {
    api.configureAxios()
    //Status bar en blanco, la hora, la señal, la batería etc..
    StatusBar.setBarStyle('light-content')
  }
  
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Stack key='root'>
            <Scene
              hideNavBar={true}
              key='houses'
              component={Houses}
              title='Houses'
              initial={true} 
            />
            <Scene 
              key='characters' 
              component={Characters} 
             {...sceneDefaultStyles}
              //renderRightButton={<RightButtonBis/>}
              renderRightButton={RightButton}
            />
            <Scene
              key='characterDetail'
              component={CharacterDetail}
              {...sceneDefaultStyles}
            />
            <Scene
              key={'characterAdd'}
              component={CharacterAdd}
              title={'Add Character'}
              {...sceneDefaultStyles}
              
            />
          </Stack>
        </Router>
      </Provider>
    )
  }
}
