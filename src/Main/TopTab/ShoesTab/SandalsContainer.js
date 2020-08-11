import Sandals from './Sandals';
import * as clothesActions from '../../../modules/wardrobe';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({

  user: state.wardrobe.get('user'),
  shoes: state.wardrobe.get('shoes'),
  temporaryClothing: state.wardrobe.get('temporaryClothing')

})

const mapDispatchToProps = (dispatch) => ({

  ClothesActions: bindActionCreators(clothesActions, dispatch)

})

const SandalsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sandals)


export default SandalsContainer;