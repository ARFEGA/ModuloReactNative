import CharacterDetail from './view'
import {connect} from 'react-redux'

const mapStateToProps= (stateRedux) => {
    return {
        
        character: stateRedux.charactersReducer.item,
        
    }
}

const mapDispatchToProps= (dispatch,props) => {
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail)