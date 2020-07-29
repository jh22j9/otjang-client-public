import AllClothes from './AllClothes';
import * as clothesActions from '../../modules/wardrobe';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({

    clothing: state.wardrobe.get('clothing'),
    shoes: state.wardrobe.get('shoes'),
    accessories: state.wardrobe.get('accessories'),
    temporaryClothing: state.wardrobe.get('temporaryClothing'),

})

const mapDispatchToProps = (dispatch) => ({

    ClothesActions: bindActionCreators(clothesActions, dispatch),

})

const AddItemsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AllClothes)


export default AddItemsContainer;