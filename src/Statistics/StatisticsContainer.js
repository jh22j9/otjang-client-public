import Statistics from './Statistics';
import * as clothesActions from '../modules/wardrobe';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
    wardrobe: state.wardrobe.toJS()
})

const mapDispatchToProps = (dispatch) => ({

    ClothesActions: bindActionCreators(clothesActions, dispatch),
})

const StatisticsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Statistics)


export default StatisticsContainer;