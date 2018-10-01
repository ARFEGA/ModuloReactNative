import React from 'react'
import {TouchableOpacity,Text} from 'react-native'
import styles from './styles'


export default class extends React.Component{
static defaultProps={
    textButton:'',
    onPress:() => {},
}
   
    render(){
        const { textButton,onPress } = this.props
        return(
            <TouchableOpacity style={styles.buttonContainer} onPress={() => onPress()}>
                <Text style={styles.buttonText}>{textButton}</Text>
            </TouchableOpacity>
        )
    }
}