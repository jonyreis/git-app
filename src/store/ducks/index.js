import { combineReducers } from 'redux';

import login from './login';
import repos from './repos';
import followers from './followers'

export default combineReducers({
    login,
    repos,
    followers,
});
