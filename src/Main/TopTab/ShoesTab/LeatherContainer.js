import Leather from './Leather';
import * as clothesActions from '../../../modules/wardrobe';
// import * as serverActions from '../../../modules/server'
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

const LeatherContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Leather)


export default LeatherContainer;