import { combineReducers } from 'redux';
import wardrobe from './wardrobe';
import server from './server';

export default combineReducers({
    wardrobe, server
});