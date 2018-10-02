import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './styles'
import { connect } from 'react-redux'
import * as charactersActions from '../../../redux/characters/actions'
import { CharacterCell } from '../../widgets'
import { Actions } from 'react-native-router-flux'

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
  render () {
    const {list, isFetching} = this.props
    console.log(list)
    return (
      <View style={styles.container}>
        <FlatList
          data={list}
          renderItem={({item, index}) => this._renderItem(item, index)}
          keyExtractor={(item, i) => 'character' + i} 
        />
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
