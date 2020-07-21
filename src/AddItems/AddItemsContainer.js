import AddItems from './AddItems';
import * as actions from '../modules/clothesReducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({

    user: state.get('user'),
    clothes: state.get('clothes')


})

const mapDispatchToProps = (dispatch) => ({

    // THINK: argument 로는 clothes OBJ 를 받는다. 

    onCreateClothes: (clothesObject) => dispatch(actions.createClothes(clothesObject)),
    onSetClothes: (setObjcet) => dispatch(actions.setClothes(setObjcet)),
})

const AddItemsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddItems)


export default AddItemsContainer;