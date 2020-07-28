import Clothing from './Clothing';
import * as clothesActions from '../../modules/wardrobe';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({

  user: state.wardrobe.get('user'),
  clothing: state.wardrobe.get('clothing'),
  temporaryClothing: state.wardrobe.get('temporaryClothing'),

})

const mapDispatchToProps = (dispatch) => ({

  ClothesActions: bindActionCreators(clothesActions, dispatch),

})

const ClothingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Clothing)


export default ClothingContainer;