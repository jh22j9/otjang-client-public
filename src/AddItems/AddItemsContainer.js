import AddItems from './AddItems';
import * as clothesActions from '../modules/wardrobe';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({

    user: state.wardrobe.get('user'),
    clothes: state.wardrobe.get('clothes'),
    temporaryClothing: state.wardrobe.get('temporaryClothing'),
    post: state.server.data,
    loading: state.server.pending,
    error: state.server.error

})

const mapDispatchToProps = (dispatch) => ({

    // THINK: argument 로는 clothes OBJ 를 받는다. 
    // TODO: 아래 메서드가 사용된 부분 전부 교체해야 함 
    // onCreateClothes: (clothesObject) => dispatch(clothesActions.createClothes(clothesObject)),
    // onSetClothes: (setObjcet) => dispatch(clothesActions.setClothes(setObjcet)),
    // onSetTemporaryClothing: (temporaryClothing) => dispatch(clothesActions.setTemporaryClothing(temporaryClothing)),
    ClothesActions: bindActionCreators(clothesActions, dispatch)
})

const AddItemsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddItems)


export default AddItemsContainer;