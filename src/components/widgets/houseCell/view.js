
import React,{Component} from 'react'
import { TouchableOpacity,Image} from 'react-native'
import styles from './stylesCell'


export default class HouseCell extends Component {
    /*En el objeto hijo se recogen los parametros pasados por el padre con static defaultProps*/
    static defaultProps = {
        house: null,
        onHousePress: () => { },
       
    }
    render() {
        /*La siguiente línea es una Destructuración */
        const { house,onHousePress} = this.props
        const img = house.image_dir  ? { uri: house.image_dir} : require('../../../resources/place-holder_casas.jpg')
        return (
            <TouchableOpacity 
                onPress={() => onHousePress(house)}
                style={styles.cellStyle}
                activeOpacity={0.5}> 
                <Image 
                    source={img}
                    style={{width:'100%' ,height:'100%'}}
                    resizeMode={'cover'}
                
                />
            </TouchableOpacity>
        )
    }
}
