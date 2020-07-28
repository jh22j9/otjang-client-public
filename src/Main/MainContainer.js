import Main from './Main';
import * as clothesActions from '../modules/wardrobe';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({

    temporaryClothing: state.wardrobe.get('temporaryClothing'),
    wardrobe: state.wardrobe.toJS()

})

const mapDispatchToProps = (dispatch) => ({

    ClothesActions: bindActionCreators(clothesActions, dispatch),

})

const MainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)


export default MainContainer;