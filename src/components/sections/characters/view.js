import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { connect } from 'react-redux'

class ViewCharacters extends Component {

    componentDidMount(){
        this.props.fetchHousesCharacters()
    }



    render () {
        return (
            <View style={ styles.container }>
             <Text style={{ color: 'yellow', fontWeight: 'bold' }}>
                 CHARACTERS
             </Text>
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
      //dispatch(HousesActions.fetchHousesList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchProps)(ViewCharacters)
