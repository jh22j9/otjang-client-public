import { createStore, applyMiddleware, compose } from 'redux';
import modules from './src/modules';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
// import promiseMiddleware from 'redux-promise-middleware';
// 미들웨어가 여러개인경우에는 파라미터로 여러개를 전달해주면 됩니다. 예: applyMiddleware(a,b,c)
// 미들웨어의 순서는 여기서 전달한 파라미터의 순서대로 지정됩니다.
const logger = createLogger();
// const customizedPromiseMiddleware = promiseMiddleware({
//     promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'FAILURE']
// });
const middleware = [ReduxThunk, promiseMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(modules, composeEnhancers(applyMiddleware(...middleware)))

export default store;