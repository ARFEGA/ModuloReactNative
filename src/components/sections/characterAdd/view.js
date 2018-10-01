import React from 'react'
import {View,Text,Image,TouchableOpacity,Alert,TextInput} from 'react-native'
import styles from './styles'



export default class  extends React.Component{

        constructor(props){
            super(props)
            this.state={
                name:'HOLA'
            }
        }

_Alert(){
    Alert.alert("Botón pulsado","Botón pulsado")
}


    render(){
        const {name} = this.state
        return (
            <View style={styles.container}> 
                <View style={{padding:20}}>
                    <Text style={{color:'white'}}>{'Nombre del personaje: '}</Text>
                    <TextInput
                        onChangeText={(name) => this.setState({ name: name })}
                        value={name} 
                        style={{backgroundColor:'yellow'}}
                    /> 
                </View>
            </View>
        )
    }
}