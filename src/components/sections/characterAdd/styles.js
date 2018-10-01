import {StyleSheet}  from 'react-native'
import * as color from '../../../commons/colors'

export default StyleSheet.create({
    container: { backgroundColor: 'rgb(24,24,24)', flex: 1 },
   
    imageContainer:{
        borderWidth:1,
        borderColor:color.main,
        borderRadius:20,
        height:200,
        width:'100%',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    imageText:{
        color:'white',
        fontWeight:'bold',
        position:'absolute',
        left:0,
        right:0,
        textAlign:'center',
        top:'50%'


    }
})
