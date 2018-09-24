
import React,{Component} from 'react'
import { TouchableOpacity,Text} from 'react-native'
import styles from './stylesCell'


export default class HouseCell extends Component {
    /*En el objeto hijo se recogen los parametros pasados por el padre con static defaultProps*/
    static defaultProps = {
        house: null,
        onHousePress: () => { },
        selected: null,
        colorCell: null,
    }
    render() {
        /*La siguiente línea es una Destructuración */
        const { house, selected, onHousePress, colorCell } = this.props
        const name = house ? house.nombre : 'Casa sin nombre'
        const background = selected && selected.id == house.id ?
            'yellow' :
            colorCell
        return (
            <TouchableOpacity 
                onPress={() => onHousePress(house)}
                style={[ styles.cellStyle, { backgroundColor: background }]}>

                <Text>
                    {name}
                </Text>
            </TouchableOpacity>
        )
    }
}
