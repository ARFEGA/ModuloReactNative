import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { connect } from 'react-redux'
import * as charactersActions from '../../../redux/characters/actions'

class ViewCharacters extends Component {

    componentDidMount(){
        this.props.fetchHousesCharacters()
    }



    render () {
        return (
            <View style={ styles.container }>
            <Text style={{height:'100%',width:'100%'}}>LALALA</Text>
            </View>
        )
  }

}

const mapStateToProps = (stateRedux) => {
  return {
    isFetching: false,
  }
}

const mapDispatchProps = (dispatch, props) => {
  return {
      fetchHousesCharacters: () => {
        dispatch(charactersActions.fetchHouseCharacters())
    }
  }
}

export default connect(mapStateToProps, mapDispatchProps)(ViewCharacters)
