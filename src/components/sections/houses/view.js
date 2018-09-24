import React, { Component } from 'react'
import { View, Text, Button, FlatList,TouchableOpacity,Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'
import * as api from '../../../api/'
import {HouseCell} from '../../widgets/'

export default class ViewHouses extends Component {

  constructor (props) {
    super(props)
    this.state = {
      housesList: [],
      selected:null,
    }
  }
  componentDidMount () {
    this.fetchHousesList()
  }

  fetchHousesList () {
    api.fetchHouses().then(response => {
      this.setState({ housesList: response.data.records})
      console.log(response)
    }).catch(error => {
      console.log('ERROR EN LLAMADA API:', error)
      this.setState({ housesList: []})
    })
  }
  goToCharacters () {
    Actions.characters({title: 'Pag Characters'})
  }

    _onHouseTaped(house){
    
    this.setState({selected:house})
   
      Alert.alert("CASA:", house.nombre)
   
  }
  _renderItem ({ item }) {
    /*MAndamos onHousePress en lugar de onPress, pues los objetos TouchableOpacity, reciben igualmente el parametro como onPress
    y de esta forma da más claridad al código*/
    return <HouseCell 
                house={item} 
                onHousePress={v => this._onHouseTaped(v)} 
                selected={this.state.selected}
                colorCell='grey'
            />
  }
  render () {
    console.log('Listado de casas:', this.state.housesList)
    return (
      <View style={styles.container}>
        <FlatList data={this.state.housesList} 
        /*Con renderItem, pasamos parametros de un objeto padre a un hobjeto hijo*/
        /*valueCell es cada elemento de houseList */
        renderItem={valueCell => this._renderItem(valueCell)} 
        keyExtractor={(item, i) => 'Cell' + item.id}
          extraData={this.state} />
        {/*keyExtractor es para identificar cada celda con una key. Item es  cada elemento de houseList*/}
      </View>
    )
  }
}

