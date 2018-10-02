import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './styles'
import { connect } from 'react-redux'
import * as charactersActions from '../../../redux/characters/actions'
import { CharacterCell } from '../../widgets'
import { Actions } from 'react-native-router-flux'
import Spinner from 'react-native-spinkit'

class ViewCharacters extends Component {

  componentDidMount () {
    this.props.fetchHousesCharacters()
  }

  _renderItem (item, index) {
    return <CharacterCell 
              character={item} 
              onCharacterPress={(character) => this.props.onCharacterTapped(character)}
              index={index}
            />
  }
  _renderActivitiIndicator() {
    // El parametro animating es un boolean que si es verdadero se muestra y sino se oculta.
    // isFetching puede ser true o false, por lo tanto nos sirve
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/*<ActivityIndicator size='large' color={'yellow'} animating={this.props.isFetching} />*/}
        <Spinner size={80} type={'ChasingDots'} color={'#FFF'} isVisible={this.props.isFetching} />
      </View>
    )
  }


  _renderContent() {
    if (this.props.isFetching) {
      return this._renderActivitiIndicator()
    } else {
      return (
        <FlatList
          data={this.props.list}
          renderItem={({ item, index }) => this._renderItem(item, index)}
          keyExtractor={(item, i) => 'character' + i}
        />
      )
    }
  }






  render () {
    const {list, isFetching} = this.props
    console.log(list)
    return (
      <View style={styles.container}>
       {this._renderContent()}
      </View>
    )
  }

}

const mapStateToProps = (stateRedux) => {
  return {
    isFetching: stateRedux.charactersReducer.isFetching,
    list: stateRedux.charactersReducer.list

  }
}

const mapDispatchProps = (dispatch, props) => {
  return {
    fetchHousesCharacters: () => {
      dispatch(charactersActions.fetchHouseCharacters())
    },
    onCharacterTapped: (character) => {
      console.log("El Protagonista: ", character)
      Actions.characterDetail({title: character.nombre})
      dispatch(charactersActions.setItem(character))
    }
  }
}

export default connect(mapStateToProps, mapDispatchProps)(ViewCharacters)
