import CharacterAdd from './view'
import {connect} from 'react-redux'

const mapStateToProps= (stateRedux) => {
    return {
        
        house: stateRedux.housesReducer.item,
        isFetching: stateRedux.charactersReducer.isFetching || stateRedux.housesReducer.isFetching

        
    }
}

const mapDispatchToProps= (dispatch,props) => {
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterAdd)