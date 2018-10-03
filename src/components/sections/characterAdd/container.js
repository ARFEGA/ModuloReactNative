import CharacterAdd from './view'
import {connect} from 'react-redux'
import * as CharacterActions from '../../../redux/characters/actions'






const mapStateToProps= (stateRedux) => {
    return {
        
        house: stateRedux.housesReducer.item,
        isFetching: stateRedux.charactersReducer.isFetching || stateRedux.housesReducer.isFetching

        
    }
}

const mapDispatchToProps= (dispatch,props) => {
    return{
            onSubmitCharacter: (data) => {
                dispatch(CharacterActions.postHouseCharacter(data))//Todo
            },
            onChangeCharacter: (data) => {
                dispatch(CharacterActions.patchHouseCharacter(data))//Todo
            }
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterAdd)