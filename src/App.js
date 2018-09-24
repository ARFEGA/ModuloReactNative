import React , { Component } from 'react'
import {} from 'react-native'
import { Router, Scene, Actions, Stack } from 'react-native-router-flux'
import { Houses, Characters } from './components/sections/'
import * as api from './api/'

export default class App extends Component {
componentWillMount(){
  api.configureAxios()
}

  render () {
    return (
      <Router>
        <Stack key='root'>
          <Scene
            key='houses'
            component={Houses}
            title='Houses'
            initial={true} />
          <Scene key='characters' component={Characters} title='Characters' />
        </Stack>
      </Router>
    )
  }
}
