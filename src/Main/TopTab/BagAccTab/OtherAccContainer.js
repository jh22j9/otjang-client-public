import OtherAcc from './OtherAcc';
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

const OtherAccContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OtherAcc)


export default OtherAccContainer;