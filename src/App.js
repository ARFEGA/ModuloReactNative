import React , { Component } from 'react'
import { StatusBar } from 'react-native'
import { Router, Scene, Actions, Stack } from 'react-native-router-flux'
import { Houses, Characters } from './components/sections/'
import * as api from './api/'
//Estos tres import siguientes son necesarios para redux
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk  from 'redux-thunk'

import * as reducers from './redux/' 
const reducer = combineReducers(reducers) 
const store = createStore(reducer, applyMiddleware(thunk))

export default class App extends Component {
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
              title='Characters' 
              navigationBarStyle={{ backgroundColor: 'rgb(24,24,24)'}}
              backButtonTextStyle={'yellow'}
              backButtonTintColor={'yellow'}
              titleStyle={{color : 'yellow'}}
             
              
            />
          </Stack>
        </Router>
      </Provider>
    )
  }
}
