import Jewelry from './Jewelry';
import * as clothesActions from '../../../modules/wardrobe';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({

  user: state.wardrobe.get('user'),
  accessories: state.wardrobe.get('accessories'),
  temporaryClothing: state.wardrobe.get('temporaryClothing')

})

const mapDispatchToProps = (dispatch) => ({

  ClothesActions: bindActionCreators(clothesActions, dispatch)

})

const JewelryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Jewelry)


export default JewelryContainer;