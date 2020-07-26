import EditItem from './EditItem';
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

// Action을 dispatch에 담아 Reducer에게 전달해야 Reducer가 주어진 Action을 실행한다. 
// bindActionCreators를 사용하면 모든 액션을 따로 dispatch(action) 하지 않아도 한번에 처리된다. 
const mapDispatchToProps = (dispatch) => ({

  ClothesActions: bindActionCreators(clothesActions, dispatch),
  ServerActions: bindActionCreators(serverActions, dispatch)

})

// Store와 Reducer를 연결하는 컴포넌트 
const EditItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditItem)


export default EditItemContainer;