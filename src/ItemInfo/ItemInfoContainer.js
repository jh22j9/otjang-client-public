import ItemInfo from './ItemInfo';
import * as clothesActions from '../modules/wardrobe';
import * as serverActions from '../modules/server'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({

  temporaryClothing: state.wardrobe.get('temporaryClothing'),
  post: state.server.data,
  loading: state.server.pending,
  error: state.server.error

})

const mapDispatchToProps = (dispatch) => ({

  ClothesActions: bindActionCreators(clothesActions, dispatch),
  ServerActions: bindActionCreators(serverActions, dispatch)

})

const ItemInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemInfo)


export default ItemInfoContainer;