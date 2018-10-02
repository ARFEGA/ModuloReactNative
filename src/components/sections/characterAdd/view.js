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
                image:null,
               
            }
            this.options={
                title: 'Seleccionar una imagen',
                maxWidth:640,
                maxHeight:640,
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
                let preview = { uri: response.uri };
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                let data = 'data:image/jpeg;base64,' + response.data;
                
                this.setState({
                    image: { preview,data}
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
        const imgUri = this.state.image ?  this.state.image.preview : null
        const imageLabel = this.state.image ? 'Pulsar para cambiar imagen' : 'Pulsar para obtener image.'
        return(
            <View style={{padding:20}}>
                 <TouchableOpacity style={styles.imageContainer} onPress={() => this._onImagePickerTapped()}>
                    <Image style = {styles.image} source={imgUri} resizeMode={'cover'} />
                    <Text style={styles.imageText}>{imageLabel}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    _validateForm(){
        // un string vacío es false, esto: '' sería false
        const {name,age,image} = this.state
        if(name && age && image){
            return true
        }else{
            return false
        }
    }
    _onSubmit(){
        if(this._validateForm()){
            const { name, age, image } = this.state
            const dataForAPI={
                nombre:name,
                edad:age,
                image:image.data,
            }
            this.props.onSubmitCharacter(dataForAPI)
        }else{
            Alert.alert('Atención','Complete todos los campos.')
        }
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
                   <MyButton 
                        textButton={'Guardar'.toLocaleUpperCase()} 
                        onPress={() => this._onSubmit()}
                        isFetching={this.props.isFetching}/>
                </View>
                {/*https://github.com/react-community/react-native-image-picker*/}

            </View>
        )
    }
}