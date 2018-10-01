import React from 'react'
import {View,Text,Image,TouchableOpacity,Alert} from 'react-native'
import styles from './styles'
import {MyButton} from '../../widgets'


export default class  extends React.Component{


_Alert(){
    Alert.alert("Botón pulsado","Botón pulsado")
}


    render(){
        const {character}= this.props
        const imgUri = character && character.image_dir ? {uri: character.image_dir } : null
        const edad = character && character.edad ? "Edad:"  + character.edad : ''
        
        return (
            <View style={styles.container}> 
                <Image source={imgUri} resizeMode={'cover'} style={styles.image}/>
                <View style={styles.dataContainer}>
                    <Text style={styles.text}>{edad} </Text>
                </View>
                <View style={{margin: 20}}>
                    <MyButton textButton={'Editar'} onPress={() => this._Alert()}/>
                </View>
                
            </View>
        )
    }
}