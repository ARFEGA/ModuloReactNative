import React from 'react'
import {TouchableOpacity,Text,View} from 'react-native'
import styles from './styles'


export default class extends React.Component{
static defaultProps={
    textButton:'Guardar',
    onPress:() => {},
}
   
    render(){
        const { textButton,onPress } = this.props
        return(
            <View style={{padding:20}}>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => onPress()}>
                    <Text style={styles.buttonText}>{textButton}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}