import AddItems from './AddItems';
import * as clothesActions from '../modules/wardrobe';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({

    temporaryClothing: state.wardrobe.get('temporaryClothing'),

})

const mapDispatchToProps = (dispatch) => ({

    ClothesActions: bindActionCreators(clothesActions, dispatch),

})

const AddItemsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddItems)


export default AddItemsContainer;