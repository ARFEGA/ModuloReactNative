import React from 'react'
import  {Text,TextInput,View} from 'react-native'
import styles from './style'
import * as MyColors from '../../../commons/colors' 


export default class extends React.Component{

    static defaultProps= {
        label:'',
        value:'',
        onChangeText:()=>{},
        placeHolder:'',
    }
    render() {
        const {label,value,onChangeText,placeHolder} = this.props
        return(
            <View style={{padding:10}}>
                <Text style={styles.label}>{label}</Text>
                <TextInput
                    onChangeText={(v) => onChangeText(v)}
                    value={value}
                    style={styles.textImput}
                    placeholder={placeHolder}
                    placeholderTextColor={MyColors.main}
                />
            </View>
        )
    }
}