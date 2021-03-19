import { combineReducers } from 'redux';

import login from './login';
import repos from './repos'

export default combineReducers({
    login,
    repos
});
