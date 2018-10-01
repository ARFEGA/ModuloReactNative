import React, { Component } from 'react'
import { TouchableOpacity, Image,Text,View } from 'react-native'
import styles from './stylesCell'



export default class characterCell extends Component{

    static defaultProps={
        character: null,
        onCharacterPress: () => {},
    }



    render(){
        const  {character,onCharacterPress} = this.props
        const image = {uri: character.image_dir}
        //console.log("Personaje: " , character.nombre + ' ' + image.uri)
        return (
            <TouchableOpacity style={styles.cellStyle} onPress={() => onCharacterPress(character)}>
                <Image source={image} style={styles.imageCell} resizeMode={'cover'}/>
            <View style={styles.detailCell}>
                <Text style={[styles.label, styles.nameCell]}>{character.nombre} </Text>
                <Text style={styles.label}> {character.edad}</Text>
            </View>
        </TouchableOpacity>
        )
    }
}