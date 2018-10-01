import React from 'react'
import {View,Text,Image,TouchableOpacity,Alert,TextInput} from 'react-native'
import styles from './styles'
import { MyTextImput,MyButton} from '../../widgets'
import ImagePicker  from 'react-native-image-picker'



export default class  extends React.Component{

        constructor(props){
            super(props)
            this.state={
                name:'',
                age:'',
               
            }
            this.options={
                title: 'Seleccionar una imagen',
                storageOPtions:{
                    skipBackup:true,
                    path:'images'
                }
            }
        }

    _Alert(){
        Alert.alert("Botón pulsado","Botón pulsado")
    }

    _onImagePickerTapped(){
        ImagePicker.showImagePicker(this.options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });
            }
        });
    }
    _renderInputText(label,key,placeholder){
        return(
            <MyTextImput
                label={label}
                value={this.state[key]}
                onChangeText={value => this.setState({ [key]: value })}
                placeHolder={placeholder}
            />
        )
    }

    _renderImageInput(){
        const imgUri = this.state.avatarSource ? { uri: this.state.avatarSource.uri} : null
        
        return(
            <View style={{padding:20}}>
                <Image source={imgUri} style={{width: '100%',height: 200,}} resizeMode={'cover'}/>
                <TouchableOpacity style={{}} onPress={() => this._onImagePickerTapped()}>
                    <Text style={{color:'white' , fontWeight:'bold'}}>{'Obtener image.'}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    render(){
        const {name,age} = this.state
        return (
            <View style={styles.container}>
                <View> 
                    {this._renderInputText('Nombre:  ', 'name', 'Introduce el nombre...')}
                </View>
                <View>
                    <MyTextImput
                        label={'Edad del personaje: '}
                        value={age}
                        onChangeText={value => this.setState({ age: value })}
                        placeHolder={'Introduce la edad...'}
                    />
                </View>
                <View>
                    {this._renderImageInput()}
                </View>
                <View>
                   <MyButton textButton={'Guardar'.toLocaleUpperCase()}/>
                </View>
                {/*https://github.com/react-community/react-native-image-picker*/}

            </View>
        )
    }
}