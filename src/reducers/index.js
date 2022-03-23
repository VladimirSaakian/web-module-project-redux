import { combineReducers } from 'redux';
import favReducer from './favReducer';
import movieReducer from './movieReducer';
const rootReducer = combineReducers({
    movieReducer, 
    favReducer
})

export default rootReducer;