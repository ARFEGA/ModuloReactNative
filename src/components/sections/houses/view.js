import React, { Component } from 'react'
import { View, Text, Button, FlatList, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'
import { HouseCell } from '../../widgets/'
import { fetchHouses } from '../../../api/index'
import { connect } from 'react-redux'
import * as HousesActions from '../../../redux/houses/actions'

class ViewHouses extends Component {
  // Propiedades de componente
  constructor (props) {
    super(props)
    this.state = {
      housesList: []
    }
  }
  componentDidMount () {
    this.props.fetchHousesList()
  }

  goToCharacters () {
    Actions.characters({title: 'Pag Characters'})
  }

  _onHouseTaped (house) {
    Alert.alert('CASA:', house.nombre)
    this.props.onHouseTaped(house)
  }
  _renderItem ({ item }) {
    /*MAndamos onHousePress en lugar de onPress, pues los objetos TouchableOpacity, reciben igualmente el parametro como onPress
    y de esta forma da más claridad al código*/
    return <HouseCell 
              house={item} 
              onHousePress={v => this._onHouseTaped(v)} 
            />
  }

  _renderActivitiIndicator () {
    // El parametro animating es un boolean que si es verdadero se muestra y sino se oculta.
    // isFetching puede ser true o false, por lo tanto nos sirve
    return (
      <View style={{flex:1 , alignItems:'center' , justifyContent:'center' }}>
        <ActivityIndicator size='large' color={'yellow'} animating={this.props.isFetching} />
      </View>
    )
  }

_renderContent(){
  if(this.props.isFetching){
    return this._renderActivitiIndicator()
  }else{
    return(
      <FlatList
      data={this.props.list} /*Con renderItem, pasamos parametros de un objeto padre a un hobjeto hijo*/ /*valueCell es cada elemento de houseList */
      renderItem={valueCell => this._renderItem(valueCell)}
      /*keyExtractor es para identificar cada celda con una key.
      Item es  cada elemento de houseList*/
      keyExtractor={(item, i) => 'Cell' + item.id}
      extraData={this.state}
      numColumns={2}
      style={{ paddingTop: 40 }}
      /*ListFooterComponent={this._renderActivitiIndicator()} 
      ListHeaderComponent={()=> this._renderActivitiIndicator()}*/ />
    )
  }
}

  render () {
    console.log("SelectedHouse:" , this.props.houseSelected)
    return (
      <View style={styles.container}>
        {this._renderContent()}
      </View>
    )
  }
}

const mapStateToProps = (stateRedux) => {
  return {
    isFetching: stateRedux.housesReducer.isFetching,
    list: stateRedux.housesReducer.list,
    houseSelected: stateRedux.housesReducer.item
  }
}

const mapDispatchProps = (dispatch, props) => {
  return {
    fetchHousesList: () => {
      dispatch(HousesActions.fetchHousesList())
    }
    ,
    onHouseTaped:(house) => {
      dispatch(HousesActions.setItem(house))
      Actions.characters({title: house.nombre})
    }
  }
}

export default connect(mapStateToProps, mapDispatchProps)(ViewHouses)
