import {StyleSheet} from 'react-native'
import * as MyColors from '../../../commons/colors'
export default StyleSheet.create({

    label:{
        color:'white',
        fontSize:18,
        marginBottom:20,  
    },
    textImput:{
        color:'white',
        backgroundColor:MyColors.mainDark,
        fontSize:18,
        borderWidth:2,
        borderColor:'yellow',
        paddingVertical:6,
        paddingHorizontal:10,
        borderRadius:10
    }
})