import React from 'react'
import {View,Text,Image,TouchableOpacity,Alert,Animated} from 'react-native'
import styles from './styles'
import {MyButton} from '../../widgets'


export default class  extends React.Component{

    constructor(props){
        super(props)
        this.state={
            imageExpanded: true,
            animatedHeight: new Animated.Value(200),
        }
    }

    _Alert(){
        Alert.alert("Botón pulsado","Botón pulsado")
    }

    _onShowImage(){
        const { imageExpanded,animatedHeight} = this.state
        if (imageExpanded){
            Animated.timing(
                animatedHeight,
                {
                    duration:500,
                    toValue:0
                }
            ).start()
            this.setState({imageExpanded:false})
        }else{
            Animated.timing(
                animatedHeight,
                {
                    duration:500,
                    toValue:200
                }
            ).start()
            this.setState({ imageExpanded: true })
        }
    }

    render(){
        const {character}= this.props
        const { animatedHeight,imageExpanded} = this.state
        const imgUri = character && character.image_dir ? {uri: character.image_dir } : null
        const edad = character && character.edad ? "Edad:"  + character.edad : ''
        
        return (
            <View style={styles.container}> 
                <Animated.Image source={imgUri} resizeMode={'cover'} style={[styles.image, { height: animatedHeight}]}/>
                <View style={styles.dataContainer}>
                    <Text style={styles.text}>{edad} </Text>
                </View>
                <View style={{margin: 20}}>
                    <MyButton textButton={'Editar'} onPress={() => this._Alert()}/>
                </View>
                <View style={{ margin: 20 }}>
                    <MyButton textButton={(imageExpanded ? 'Ocultar Imagen' : 'Expandir imagen').toUpperCase()} onPress={() => this._onShowImage()} />
                </View>
                
            </View>
        )
    }
}