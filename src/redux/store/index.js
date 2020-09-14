import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducer from '../reducers'


export default store = createStore(Reducer, {}, applyMiddleware(ReduxThunk))