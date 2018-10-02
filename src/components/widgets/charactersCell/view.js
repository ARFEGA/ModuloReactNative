import React, { Component } from 'react'
import { TouchableOpacity, Image,Text,View } from 'react-native'
import styles from './stylesCell'
import * as Animatable from 'react-native-animatable'



export default class characterCell extends Component{

    static defaultProps={
        character: null,
        onCharacterPress: () => {},
        index:0,
    }

    constructor(props){
        super(props)
        this.state={
            animation:'bounceInLeft'
        }
    }


    render(){
        const  {character,onCharacterPress,index} = this.props
        const image = {uri: character.image_dir}
        const animation = index % 2 ? 'bounceInLeft' : 'bounceInRight'
        //console.log("Personaje: " , character.nombre + ' ' + image.uri)
        //onPress={() => this.setState({animation:'bounceOutRight'})}
        //onPress={() => onCharacterPress(character)}
        return (
        <Animatable.View animation={this.state.animation} >
                <TouchableOpacity style={styles.cellStyle} onPress={() => onCharacterPress(character)}>
                    <Image source={image} style={styles.imageCell} resizeMode={'cover'}/>
                    <View style={styles.detailCell}>
                        <Text style={[styles.label, styles.nameCell]}>{character.nombre} </Text>
                        <Text style={styles.label}> {character.edad}</Text>
                    </View>
                </TouchableOpacity>
            </Animatable.View>
        )
    }
}