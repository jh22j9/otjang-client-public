import AddItems from './AddItems';
import * as actions from '../modules/index';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({

    user: state.get('user'),
    clothes: state.get('clothes'),
    temporaryClothing: state.get('temporaryClothing')


})

const mapDispatchToProps = (dispatch) => ({

    // THINK: argument 로는 clothes OBJ 를 받는다. 

    onCreateClothes: (clothesObject) => dispatch(actions.createClothes(clothesObject)),
    onSetClothes: (setObjcet) => dispatch(actions.setClothes(setObjcet)),
    onSetTemporaryClothing: (temporaryClothing) => dispatch(actions.setTemporaryClothing(temporaryClothing)),

})

const AddItemsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddItems)


export default AddItemsContainer;